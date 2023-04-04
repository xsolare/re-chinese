import type { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'
import { glossaryItems } from '#/utils/mock/glossary'

type Changefreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export const getServerSideProps: GetServerSideProps = (ctx) => {
  const url = process.env.NEXT_SITE_URL ?? 'https://rechinese.ru'

  const fields = [
    {
      loc: `${url}/server/`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as Changefreq,
      priority: 0.5
    },
    ...glossaryItems.map((val) => {
      return {
        loc: `${url}/glossary/${val.id}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily' as Changefreq,
        priority: 0.6
      }
    })
  ]

  return getServerSideSitemap(ctx, fields)
}

export default function Sitemap() {}
