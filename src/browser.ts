import type { 
  ZeroTokenSDK, 
  ZeroTokenConfig, 
  ProviderInfo, 
  AuthStatus, 
  ChatRequest, 
  ChatResponse,
  ImageRequest,
  VideoRequest,
  AudioRequest,
  ModelCategory
} from './types';
import { DEFAULT_PROVIDERS, MODEL_CATEGORIES } from './providers';

type StreamCallback = (content: string) => void;

declare const chrome: typeof globalThis & { 
  runtime?: { 
    sendMessage: (message: any) => Promise<any>;
  } 
};

interface AuthState {
  cookie: string;
  userAgent: string;
}

interface ProviderRuntime {
  info: ProviderInfo;
  models: Map<string, any>;
  lastFetch?: number;
}

class BrowserExtensionAdapter implements ZeroTokenSDK {
  private providerCache: Map<string, ProviderRuntime> = new Map();
  private cacheTimeout = 5 * 60 * 1000;

  async init(_config: ZeroTokenConfig): Promise<void> {
    if (typeof chrome === 'undefined' || !chrome.runtime) {
      throw new Error('Chrome extension not found');
    }
  }

  async getProviders(category?: ModelCategory): Promise<ProviderInfo[]> {
    const baseProviders = category 
      ? DEFAULT_PROVIDERS.filter(p => p.category === category)
      : DEFAULT_PROVIDERS;

    const result: ProviderInfo[] = [];
    
    for (const provider of baseProviders) {
      const cached = this.providerCache.get(provider.id);
      if (cached && cached.lastFetch && Date.now() - cached.lastFetch < this.cacheTimeout) {
        result.push({ ...provider, models: cached.models.map(m => m) });
        continue;
      }

      try {
        const models = await this.fetchModelsFromProvider(provider);
        this.providerCache.set(provider.id, {
          info: provider,
          models: models,
          lastFetch: Date.now(),
        });
        result.push({ ...provider, models });
      } catch {
        result.push(provider);
      }
    }

    return result;
  }

  private async fetchModelsFromProvider(provider: ProviderInfo): Promise<any[]> {
    const response = await chrome.runtime!.sendMessage({
      action: 'fetchModels',
      data: { providerId: provider.id, baseUrl: provider.baseUrl },
    });

    if (response.success && response.models) {
      return response.models;
    }
    return provider.models;
  }

  async getAuthStatus(): Promise<AuthStatus[]> {
    const response = await chrome.runtime!.sendMessage({ action: 'getAuthStatus' });
    if (!response.success) {
      throw new Error(response.error || 'Failed to get auth status');
    }
    return response.status;
  }

  async login(providerId: string): Promise<void> {
    const response = await chrome.runtime!.sendMessage({ action: 'openLogin', data: { providerId } });
    if (!response.success) {
      throw new Error(response.error || 'Failed to open login');
    }
  }

  async logout(_providerId: string): Promise<void> {}

  async chat(request: ChatRequest): Promise<ChatResponse> {
    const [providerId] = request.model.split('/');    
    const response = await chrome.runtime!.sendMessage({
      action: 'proxyRequest',
      data: { providerId, body: request },
    });

    if (!response.success) {
      throw new Error(response.error || 'Request failed');
    }

    const data = JSON.parse(response.result.body);
    return {
      id: data.id || `chat-${Date.now()}`,
      model: request.model,
      choices: [{
        message: {
          role: 'assistant',
          content: data.choices?.[0]?.message?.content || data.content?.[0]?.text || '',
        },
        finishReason: 'stop',
      }],
    };
  }

  async chatStream(request: ChatRequest, onChunk: StreamCallback): Promise<void> {
    const response = await this.chat({ ...request, stream: false });
    onChunk(response.choices[0].message.content);
  }

  async generateImage(request: ImageRequest): Promise<{ url: string }> {
    const [providerId] = request.model.split('/');
    const response = await chrome.runtime!.sendMessage({
      action: 'proxyRequest',
      data: { providerId, body: request },
    });
    if (!response.success) throw new Error(response.error || 'Request failed');
    const data = JSON.parse(response.result.body);
    return { url: data.data?.[0]?.url || '' };
  }

  async generateVideo(request: VideoRequest): Promise<{ url: string }> {
    const [providerId] = request.model.split('/');
    const response = await chrome.runtime!.sendMessage({
      action: 'proxyRequest',
      data: { providerId, body: request },
    });
    if (!response.success) throw new Error(response.error || 'Request failed');
    const data = JSON.parse(response.result.body);
    return { url: data.data?.[0]?.url || '' };
  }

  async textToSpeech(request: AudioRequest): Promise<{ url: string }> {
    const [providerId] = request.model.split('/');
    const response = await chrome.runtime!.sendMessage({
      action: 'proxyRequest',
      data: { providerId, body: request },
    });
    if (!response.success) throw new Error(response.error || 'Request failed');
    const data = JSON.parse(response.result.body);
    return { url: data.data?.[0]?.url || '' };
  }

  destroy(): void {}
}

export { BrowserExtensionAdapter, MODEL_CATEGORIES };
export * from './types';
export { DEFAULT_PROVIDERS, MODEL_CATEGORIES };
