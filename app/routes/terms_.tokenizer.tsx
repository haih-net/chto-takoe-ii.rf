import type { MetaFunction } from 'react-router'
import { TokenizerPage } from 'app/Custom/pages/Terms/Tokenizer'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'

export const handle = {
  seo: {
    title: 'Токенизатор',
    description:
      'Как токенизатор преобразует текст в токены и обратно, почему он связан с моделью и от чего зависит подсчёт объёма контекста.',
    path: '/terms/tokenizer',
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)

export default TokenizerPage
