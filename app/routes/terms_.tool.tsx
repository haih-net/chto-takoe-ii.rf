import type { MetaFunction } from 'react-router'
import { ToolPage } from 'app/Custom/pages/Terms/Tool'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'Инструмент',
    description:
      'Как ИИ-система использует инструменты: описание операции, ответ модели, вызов обвязками и проверка результата. Примеры света и почты.',
    path: '/terms/tool',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default ToolPage
