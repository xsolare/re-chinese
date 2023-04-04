import type { NextPageWithLayout } from '#/pages/_app'
import type { IGlossaryItem } from '#/types/glossary'
import type { ReactElement } from 'react'
import { NextSeo } from 'next-seo'
import React from 'react'
import GlossaryItem from '#/components/glossary/item/glossary-item'
import GlossaryLayout from '#/components/layouts/glossary/glossary.layout'
import { GlossaryContentStyled, GlossaryStyled } from '#/styles/glossary/glossary.style'
import { glossaryItems as gi } from '#/utils/mock/glossary'

interface IGlossaryProps {
  glossaryItems: IGlossaryItem[]
}

// Glossary component
//* ------------------------------------------------------------------------------------------ *//
const Glossary: NextPageWithLayout<IGlossaryProps> = (props) => {
  const { glossaryItems } = props

  return (
    <>
      <NextSeo title="Глоссарий" description="Глоссарий китайского языка" />
      <GlossaryStyled>
        <GlossaryContentStyled>
          {glossaryItems.map((lib) => (
            <div className="wrapper" key={lib.id}>
              <GlossaryItem {...lib} />
            </div>
          ))}
        </GlossaryContentStyled>
      </GlossaryStyled>
    </>
  )
}

Glossary.getInitialProps = async () => {
  return {
    glossaryItems: gi
  }
}

Glossary.getLayout = function getLayout(page: ReactElement) {
  return <GlossaryLayout>{page}</GlossaryLayout>
}

export default Glossary
