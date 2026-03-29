import type { ProviderInfo, ModelCategory } from './types';

export const MODEL_CATEGORIES: { id: ModelCategory; name: string; icon: string }[] = [
  { id: 'chat', name: '对话模型', icon: '💬' },
  { id: 'image', name: '生图模型', icon: '🎨' },
  { id: 'video', name: '视频模型', icon: '🎬' },
  { id: 'audio', name: '语音模型', icon: '🎙️' },
];

export const DEFAULT_PROVIDERS: ProviderInfo[] = [
  // ============ 对话模型 ============
  {
    id: 'deepseek',
    name: 'DeepSeek',
    category: 'chat',
    baseUrl: 'https://chat.deepseek.com',
    apiPath: '/api/v1/chat/completions',
    models: [
      { id: 'deepseek-chat', name: 'DeepSeek Chat', contextWindow: 64000, maxTokens: 4096 },
      { id: 'deepseek-reasoner', name: 'DeepSeek Reasoner', contextWindow: 64000, maxTokens: 8192, reasoning: true },
      { id: 'deepseek-coder', name: 'DeepSeek Coder', contextWindow: 64000, maxTokens: 4096 },
    ],
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'chat',
    baseUrl: 'https://claude.ai',
    apiPath: '/api/chat/completions',
    models: [
      { id: 'claude-sonnet-4-6', name: 'Claude Sonnet 4', contextWindow: 195000, maxTokens: 8192 },
      { id: 'claude-opus-4-6', name: 'Claude Opus 4', contextWindow: 195000, maxTokens: 8192 },
      { id: 'claude-haiku-3-5', name: 'Claude Haiku 3.5', contextWindow: 200000, maxTokens: 4096 },
    ],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'chat',
    baseUrl: 'https://chat.openai.com',
    apiPath: '/api/chat/completions',
    models: [
      { id: 'gpt-4o', name: 'GPT-4o', contextWindow: 128000, maxTokens: 4096 },
      { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', contextWindow: 128000, maxTokens: 4096 },
      { id: 'gpt-4', name: 'GPT-4', contextWindow: 8000, maxTokens: 4096 },
      { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', contextWindow: 16000, maxTokens: 4096 },
      { id: 'o1-preview', name: 'o1 Preview', contextWindow: 128000, maxTokens: 32768, reasoning: true },
      { id: 'o1-mini', name: 'o1 Mini', contextWindow: 65536, maxTokens: 32768 },
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'chat',
    baseUrl: 'https://generativelanguage.googleapis.com',
    apiPath: '/v1beta/models',
    models: [
      { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash', contextWindow: 1000000, maxTokens: 8192 },
      { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', contextWindow: 2000000, maxTokens: 8192 },
      { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash', contextWindow: 1000000, maxTokens: 8192 },
      { id: 'gemini-1.5-flash-8b', name: 'Gemini 1.5 Flash 8B', contextWindow: 1000000, maxTokens: 8192 },
    ],
  },
  {
    id: 'qwen',
    name: 'Qwen',
    category: 'chat',
    baseUrl: 'https://chat.qwen.ai',
    apiPath: '/api/v1/chat/completions',
    models: [
      { id: 'qwen-plus', name: 'Qwen Plus', contextWindow: 32000, maxTokens: 4096 },
      { id: 'qwen-turbo', name: 'Qwen Turbo', contextWindow: 32000, maxTokens: 4096 },
      { id: 'qwen-max', name: 'Qwen Max', contextWindow: 32000, maxTokens: 4096 },
      { id: 'qwq-32b', name: 'QwQ 32B', contextWindow: 32000, maxTokens: 4096, reasoning: true },
    ],
  },
  {
    id: 'kimi',
    name: 'Kimi',
    category: 'chat',
    baseUrl: 'https://kimi.moonshot.cn',
    apiPath: '/api/v1/chat/completions',
    models: [
      { id: 'moonshot-v1-8k', name: 'Moonshot V1 8K', contextWindow: 8000, maxTokens: 4096 },
      { id: 'moonshot-v1-32k', name: 'Moonshot V1 32K', contextWindow: 32000, maxTokens: 4096 },
      { id: 'moonshot-v1-128k', name: 'Moonshot V1 128K', contextWindow: 128000, maxTokens: 4096 },
    ],
  },
  {
    id: 'doubao',
    name: '豆包',
    category: 'chat',
    baseUrl: 'https://www.doubao.com',
    apiPath: '/api/v1/chat/completions',
    models: [
      { id: 'doubao-seed-2.0', name: '豆包 Seed 2.0', contextWindow: 63000, maxTokens: 4096 },
      { id: 'doubao-pro-32k', name: '豆包 Pro 32K', contextWindow: 32000, maxTokens: 4096 },
    ],
  },
  {
    id: 'grok',
    name: 'Grok',
    category: 'chat',
    baseUrl: 'https://grok.x.com',
    apiPath: '/v1/chat/completions',
    models: [
      { id: 'grok-2-1212', name: 'Grok 2 (12-12)', contextWindow: 131000, maxTokens: 8192 },
      { id: 'grok-2-v01-1212', name: 'Grok 2 Vision (12-12)', contextWindow: 32768, maxTokens: 4096 },
      { id: 'grok-beta', name: 'Grok Beta', contextWindow: 131000, maxTokens: 4096 },
    ],
  },
  {
    id: 'glm',
    name: '智谱 GLM',
    category: 'chat',
    baseUrl: 'https://chatglm.cn',
    apiPath: '/api/paa/v4/chat/completions',
    models: [
      { id: 'glm-4', name: 'GLM-4', contextWindow: 128000, maxTokens: 4096 },
      { id: 'glm-4-plus', name: 'GLM-4 Plus', contextWindow: 128000, maxTokens: 4096 },
      { id: 'glm-4-flash', name: 'GLM-4 Flash', contextWindow: 128000, maxTokens: 4096 },
      { id: 'glm-4v', name: 'GLM-4V', contextWindow: 128000, maxTokens: 4096 },
      { id: 'glm-z1-flash', name: 'GLM-Z1 Flash', contextWindow: 128000, maxTokens: 4096, reasoning: true },
    ],
  },
  {
    id: 'mistral',
    name: 'Mistral',
    category: 'chat',
    baseUrl: 'https://chat.mistral.ai',
    apiPath: '/v1/chat/completions',
    models: [
      { id: 'mistral-large-2411', name: 'Mistral Large 2 (24-11)', contextWindow: 128000, maxTokens: 65536 },
      { id: 'mistral-small', name: 'Mistral Small', contextWindow: 128000, maxTokens: 4096 },
      { id: 'pixtral-large-2411', name: 'Pixtral Large', contextWindow: 128000, maxTokens: 4096 },
    ],
  },
  {
    id: 'xiaomimo',
    name: '小米 MiMo',
    category: 'chat',
    baseUrl: 'https://xiaomimo.com',
    apiPath: '/v1/chat/completions',
    models: [
      { id: 'mimo-8b', name: 'MiMo 8B', contextWindow: 32000, maxTokens: 4096 },
      { id: 'mimo-72b', name: 'MiMo 72B', contextWindow: 32000, maxTokens: 4096 },
    ],
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'chat',
    baseUrl: 'https://api.perplexity.ai',
    apiPath: '/chat/completions',
    models: [
      { id: 'sonar', name: 'Sonar', contextWindow: 127000, maxTokens: 4096 },
      { id: 'sonar-pro', name: 'Sonar Pro', contextWindow: 127000, maxTokens: 4096 },
      { id: 'sonar-reasoning', name: 'Sonar Reasoning', contextWindow: 127000, maxTokens: 4096, reasoning: true },
    ],
  },

  // ============ 生图模型 ============
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'image',
    baseUrl: 'https://api.thenextleg.io',
    apiPath: '/v2/imagine',
    models: [
      { id: 'midjourney', name: 'Midjourney', contextWindow: 0, maxTokens: 0 },
      { id: 'niji-journey', name: 'Niji Journey', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'dalle',
    name: 'DALL-E',
    category: 'image',
    baseUrl: 'https://api.openai.com',
    apiPath: '/v1/images/generations',
    models: [
      { id: 'dall-e-3', name: 'DALL-E 3', contextWindow: 0, maxTokens: 0 },
      { id: 'dall-e-2', name: 'DALL-E 2', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    category: 'image',
    baseUrl: 'https://api.stability.ai',
    apiPath: '/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
    models: [
      { id: 'sd-xl-1.0', name: 'SDXL 1.0', contextWindow: 0, maxTokens: 0 },
      { id: 'sd-3-medium', name: 'SD3 Medium', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    category: 'image',
    baseUrl: 'https://firefly-api.adobe.io',
    apiPath: '/v3/images/generate',
    models: [
      { id: 'firefly-image-3', name: 'Firefly Image 3', contextWindow: 0, maxTokens: 0 },
      { id: 'firefly-style', name: 'Firefly Style', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'tongyi-wanxiang',
    name: '通义万相',
    category: 'image',
    baseUrl: 'https://dashscope.aliyuncs.com',
    apiPath: '/api/v1/images/generations',
    models: [
      { id: 'wanx-plus', name: '通义万相 Plus', contextWindow: 0, maxTokens: 0 },
      { id: 'wanx-standard', name: '通义万相 Standard', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'wenxin',
    name: '文心一格',
    category: 'image',
    baseUrl: 'https://aip.baidubce.com',
    apiPath: '/rpc/2.0/ai_custom/v1/wenxinimages',
    models: [
      { id: 'ernie-v3g', name: 'ERNIE-VLG 3.0', contextWindow: 0, maxTokens: 0 },
      { id: 'ernie-v2g', name: 'ERNIE-VLG 2.0', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'jimeng',
    name: '即梦',
    category: 'image',
    baseUrl: 'https://jimeng.jianying.com',
    apiPath: '/ai/v1/image/generate',
    models: [
      { id: 'jimeng-2.0', name: '即梦 2.0', contextWindow: 0, maxTokens: 0 },
      { id: 'jimeng-1.4', name: '即梦 1.4', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'flux',
    name: 'FLUX',
    category: 'image',
    baseUrl: 'https://api.together.xyz',
    apiPath: '/v1/image/generation',
    models: [
      { id: 'flux-pro', name: 'FLUX Pro', contextWindow: 0, maxTokens: 0 },
      { id: 'flux-dev', name: 'FLUX Dev', contextWindow: 0, maxTokens: 0 },
      { id: 'flux-schnell', name: 'FLUX Schnell', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    category: 'image',
    baseUrl: 'https://api.ideogram.ai',
    apiPath: '/v1/ generations',
    models: [
      { id: 'ideogram-2', name: 'Ideogram 2', contextWindow: 0, maxTokens: 0 },
      { id: 'ideogram-1', name: 'Ideogram 1', contextWindow: 0, maxTokens: 0 },
    ],
  },

  // ============ 视频模型 ============
  {
    id: 'sora',
    name: 'Sora',
    category: 'video',
    baseUrl: 'https://api.openai.com',
    apiPath: '/v1/video/generations',
    models: [
      { id: 'sora-turbo', name: 'Sora Turbo', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'runway',
    name: 'Runway',
    category: 'video',
    baseUrl: 'https://api.runwayml.com',
    apiPath: '/v1/videos',
    models: [
      { id: 'gen3-alpha-turbo', name: 'Gen-3 Alpha Turbo', contextWindow: 0, maxTokens: 0 },
      { id: 'gen3-alpha', name: 'Gen-3 Alpha', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'pika',
    name: 'Pika',
    category: 'video',
    baseUrl: 'https://api.pika.art',
    apiPath: '/v1/videos/generate',
    models: [
      { id: 'pika-2.2', name: 'Pika 2.2', contextWindow: 0, maxTokens: 0 },
      { id: 'pika-2.0', name: 'Pika 2.0', contextWindow: 0, maxTokens: 0 },
      { id: 'pika-1.5', name: 'Pika 1.5', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'kling',
    name: '快手可灵',
    category: 'video',
    baseUrl: 'https://api.klingai.com',
    apiPath: '/v1/videos/generations',
    models: [
      { id: 'kling-2.0', name: '可灵 2.0', contextWindow: 0, maxTokens: 0 },
      { id: 'kling-1.6', name: '可灵 1.6', contextWindow: 0, maxTokens: 0 },
      { id: 'kling-1.0', name: '可灵 1.0', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'hailuo',
    name: '海螺视频',
    category: 'video',
    baseUrl: 'https://api.hailuoai.com',
    apiPath: '/v1/video/generate',
    models: [
      { id: 'hailuo-video-01', name: '海螺视频 01', contextWindow: 0, maxTokens: 0 },
      { id: 'hailuo-video-02', name: '海螺视频 02', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'jianying',
    name: '剪映',
    category: 'video',
    baseUrl: 'https://lf-beijing-jym.bytedance.com',
    apiPath: '/api/jianying/v1/video/generate',
    models: [
      { id: 'jianying-2.0', name: '剪映 2.0', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'zhipu',
    name: '智谱清影',
    category: 'video',
    baseUrl: 'https://open.bigmodel.cn',
    apiPath: '/api/paas/v4/video/generations',
    models: [
      { id: 'cogvideo-x', name: 'CogVideoX', contextWindow: 0, maxTokens: 0 },
      { id: 'cogvideo', name: 'CogVideo', contextWindow: 0, maxTokens: 0 },
    ],
  },

  // ============ 语音模型 ============
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'audio',
    baseUrl: 'https://api.elevenlabs.io',
    apiPath: '/v1/text-to-speech',
    models: [
      { id: 'eleven-multilingual-v2', name: 'Multilingual v2', contextWindow: 0, maxTokens: 0 },
      { id: 'eleven-english-v2', name: 'English v2', contextWindow: 0, maxTokens: 0 },
      { id: 'eleven Turbo v2', name: 'Turbo v2', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'azure-tts',
    name: 'Azure TTS',
    category: 'audio',
    baseUrl: 'https://eastus.tts.speech.microsoft.com',
    apiPath: '/cognitiveservices/v1',
    models: [
      { id: 'azure-neural', name: 'Neural', contextWindow: 0, maxTokens: 0 },
      { id: 'azure-standard', name: 'Standard', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: ' volcengine-tts',
    name: '火山引擎语音',
    category: 'audio',
    baseUrl: 'https://openspeech.bytedance.com',
    apiPath: '/api/v1/tts',
    models: [
      { id: 'volc-engine-4k', name: '火山引擎 4K', contextWindow: 0, maxTokens: 0 },
      { id: 'volc-engine-8k', name: '火山引擎 8K', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'iflytek',
    name: '讯飞语音',
    category: 'audio',
    baseUrl: 'https://tts-api.xfyun.cn',
    apiPath: '/v2/tts',
    models: [
      { id: 'iflytek-l飞速', name: '讯飞 L飞速', contextWindow: 0, maxTokens: 0 },
      { id: 'iflytek-standard', name: '讯飞 Standard', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'minimax',
    name: 'MiniMax 语音',
    category: 'audio',
    baseUrl: 'https://api.minimax.chat',
    apiPath: '/v1/t2a_v2',
    models: [
      { id: 'minimax-speech-01', name: 'Speech 01', contextWindow: 0, maxTokens: 0 },
      { id: 'minimax-turbo', name: 'MiniMax Turbo', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'openai-audio',
    name: 'OpenAI Audio',
    category: 'audio',
    baseUrl: 'https://api.openai.com',
    apiPath: '/v1/audio/speech',
    models: [
      { id: 'gpt-4o-mini-tts', name: 'GPT-4o Mini TTS', contextWindow: 0, maxTokens: 0 },
      { id: 'tts-1', name: 'TTS-1', contextWindow: 0, maxTokens: 0 },
      { id: 'tts-1-hd', name: 'TTS-1 HD', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'cartesia',
    name: 'Cartesia',
    category: 'audio',
    baseUrl: 'https://api.cartesia.ai',
    apiPath: '/tts',
    models: [
      { id: 'cartesia-2.1', name: 'Cartesia 2.1', contextWindow: 0, maxTokens: 0 },
    ],
  },
  {
    id: 'lmnt',
    name: 'LMNT',
    category: 'audio',
    baseUrl: 'https://api.lmnt.com',
    apiPath: '/v1/synthesize',
    models: [
      { id: 'lmnt-1.0', name: 'LMNT 1.0', contextWindow: 0, maxTokens: 0 },
    ],
  },
];
