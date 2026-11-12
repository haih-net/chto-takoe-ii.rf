import type { MetaFunction } from 'react-router'
import { TermsPage } from 'app/Custom/pages/Terms'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'Справочник',
    description:
      'Определения основных терминов: языковая модель, контекст, токен, промпт, среда выполнения, инструмент и ИИ-агент.',
    path: '/terms',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default TermsPage
