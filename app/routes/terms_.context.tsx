import type { MetaFunction } from 'react-router'
import { ContextPage } from 'app/Custom/pages/Terms/Context'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'Контекст',
    description:
      'Что входит в контекст модели, чем он отличается от истории чата и почему важные данные могут не попасть в ответ. Примеры переписки и документов.',
    path: '/terms/context',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default ContextPage
