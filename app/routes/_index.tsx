import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { MainPage } from 'app/Custom/pages/MainPage'

export const handle = {
  seo: {
    title: 'Что такое ИИ',
    description:
      'Как устроены современные ИИ-чаты и агенты: языковая модель, обвязки, инструменты и среда выполнения. Объяснения на примерах переписки и управления светом.',
    path: '/',
    image: undefined,
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default MainPage
