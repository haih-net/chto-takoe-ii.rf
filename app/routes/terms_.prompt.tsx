import type { MetaFunction } from 'react-router'
import { PromptPage } from 'app/Custom/pages/Terms/Prompt'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'Промпт',
    description:
      'Что такое промпт и как поставить задачу ИИ: запрос, исходные данные, уточнения и формат ответа. Примеры подготовки письма.',
    path: '/terms/prompt',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default PromptPage
