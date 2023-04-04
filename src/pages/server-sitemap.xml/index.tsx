import { getServerSideSitemap } from 'next-sitemap'
import { glossaryItems } from '#/utils/mock/glossary'

type Changefreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export const getServerSideProps = (ctx) => {
  const url = process.env.NEXT_SITE_URL ?? 'https://rechinese.ru'

  const fields = [
    {
      loc: `${url}/server/`,
      changefreq: 'daily' as Changefreq,
      priority: 1.0
      // lastmod: new Date('2022-01-01').toISOString(),
    },
    ...glossaryItems.map((val) => {
      return {
        loc: `${url}/glossary/${val.id}`,
        changefreq: 'daily' as Changefreq,
        priority: 0.6
        // lastmod: val.lastModified.toISOString(),
      }
    })
  ]

  return getServerSideSitemap(ctx, fields)
}

export default function Sitemap() {}
