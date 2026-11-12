import type { MetaFunction } from 'react-router'
import { TokenPage } from 'app/Custom/pages/Terms/Token'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'Токен',
    description:
      'Что такое токен, почему он не равен слову и как токены определяют объём текста для модели. Объяснение без сложных формул.',
    path: '/terms/token',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default TokenPage
