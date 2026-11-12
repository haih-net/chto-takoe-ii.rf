import type { MetaFunction } from 'react-router'
import { LanguageModelPage } from 'app/Custom/pages/Terms/LanguageModel'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'Языковая модель (LLM)',
    description:
      'Что такое LLM: как модель получает контекст и генерирует ответ, чем отличается от агента и почему может ошибаться. Примеры работы с письмом.',
    path: '/terms/language-model',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default LanguageModelPage
