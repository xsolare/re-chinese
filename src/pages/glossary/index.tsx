import React from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import type { IGlossaryItem } from '#/types/glossary';
import { NextSeo } from 'next-seo';
import GlossaryItem from '#/components/glossary/glossary-item';
import { glossaryItems as gi } from './mock';
import PageLayout from '#/components/layouts/page.layout';

interface IGlossaryProps {
  glossaryItems: IGlossaryItem[];
}

// Glossary component
//* ------------------------------------------------------------------------------------------ *//
const Glossary: NextPageWithLayout<IGlossaryProps> = (props) => {
  const { glossaryItems } = props;

  return (
    <>
      <NextSeo title="Glossary" description="Glossary page" />
      <div>
        {glossaryItems.map((lib) => (
          <GlossaryItem key={lib.id} {...lib} />
        ))}
      </div>
    </>
  );
};

Glossary.getInitialProps = async () => {
  return {
    glossaryItems: gi
  };
};

Glossary.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Glossary;
