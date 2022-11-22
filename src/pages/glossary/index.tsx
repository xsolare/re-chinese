import React from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import type { IGlossaryItem } from '#/types/glossary';
import { NextSeo } from 'next-seo';
import GlossaryItem from '#/components/glossary/glossary-item';
import { glossaryItems as gi } from '#/utils/mock/glossary';
import { GlossaryContentStyled, GlossaryStyled } from '#/styles/glossary/glossary.style';
import GlossaryLayout from '#/components/layouts/glossary/glossary.layout';

interface IGlossaryProps {
  glossaryItems: IGlossaryItem[];
}

// Glossary component
//* ------------------------------------------------------------------------------------------ *//
const Glossary: NextPageWithLayout<IGlossaryProps> = (props) => {
  const { glossaryItems } = props;

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
  );
};

Glossary.getInitialProps = async () => {
  return {
    glossaryItems: gi
  };
};

Glossary.getLayout = function getLayout(page: ReactElement) {
  return <GlossaryLayout>{page}</GlossaryLayout>;
};

export default Glossary;
