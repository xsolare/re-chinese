import type { NextPageWithLayout } from '#/pages/_app'
import type { IGlossaryContent } from '#/types/glossary'
import { observer } from 'mobx-react-lite'
import { NextSeo } from 'next-seo'
import React from 'react'
import { GlossaryText } from '#/components/glossary/sections/'
import GlossaryUrlLayout from '#/components/layouts/glossary/url/glossary-url.layout'
import { useGlossaryUrlContext } from '#/components/layouts/glossary/url/glossary-url.provider'
import { Sections } from '#/store/pages/glossary.store'
import { glossary as g } from '#/utils/mock/glossary'

interface IGlossaryItemProps {
  glossary: IGlossaryContent
}

// Glossary main section
//* ------------------------------------------------------------------------------------------ *//
const GlossaryMainSection: NextPageWithLayout<IGlossaryItemProps> = ({ glossary }) => {
  const pageStore = useGlossaryUrlContext()
  const { setupGlossaryBase } = pageStore

  setupGlossaryBase(glossary, Sections.Main)

  return (
    <>
      <NextSeo title={glossary.title} description={glossary.description} />
      <GlossaryText content={glossary.text} />
    </>
  )
}

GlossaryMainSection.getInitialProps = async (ctx) => {
  const { query } = ctx
  const glossaryContent = await new Promise<IGlossaryContent>((r) =>
    r(g.find((f) => f.url === query?.url) as IGlossaryContent)
  )

  return {
    glossary: glossaryContent
  }
}

GlossaryMainSection.getLayout = function getLayout(page: React.ReactElement) {
  return <GlossaryUrlLayout>{page}</GlossaryUrlLayout>
}

export default observer(GlossaryMainSection)
