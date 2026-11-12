import type { MetaFunction } from 'react-router'
import { RuntimePage } from 'app/Custom/pages/Terms/Runtime'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'Среда выполнения',
    description:
      'Где работают модель и обвязки: компьютеры, серверы и программное окружение. Чем среда выполнения отличается от компонентов ИИ-агента.',
    path: '/terms/runtime',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default RuntimePage
