import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import React from 'react';

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

export default Home;
