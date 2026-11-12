import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: [
    '/',
    '/terms',
    '/terms/language-model',
    '/terms/context',
    '/terms/token',
    '/terms/tokenizer',
    '/terms/prompt',
    '/terms/wrappers',
    '/terms/runtime',
    '/terms/tool',
    '/terms/agent',
  ],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
