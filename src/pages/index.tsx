import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import React from 'react';
import PageLayout from '#/components/layouts/page.layout';

// Home component
//* ------------------------------------------------------------------------------------------ *//
const Home: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="Home" description="Home page" />
      <div>Home</div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Home;
