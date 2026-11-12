import type { MetaFunction } from 'react-router'
import { WrappersPage } from 'app/Custom/pages/Terms/Wrappers'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'Обвязки',
    description:
      'Что такое обвязки ИИ: как работают чат, контекст и инструменты, где проходят границы модели и агента. Примеры переписки и отправки письма.',
    path: '/terms/wrappers',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default WrappersPage
