import type { MetaFunction } from 'react-router'
import { AgentPage } from 'app/Custom/pages/Terms/Agent'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'ИИ-агент',
    description:
      'ИИ-агент как LLM и обвязки: роли компонентов, выполнение задачи по шагам, самостоятельность и вложенные агенты. Пример ответа клиенту.',
    path: '/terms/agent',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default AgentPage
