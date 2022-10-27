import React from 'react';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useSelector } from 'react-redux';
import { setProfileData, selectProfile } from '../store/slices/profile';
import { wrapper } from '../store';

interface IHomeProps {
  resolvedUrl: string;
}

// Home component
//* ------------------------------------------------------------------------------------------ *//
const Home: NextPage<IHomeProps> = (props) => {
  const state = useSelector(selectProfile);
  const { resolvedUrl } = props;

  return (
    <>
      <NextSeo title="Home" description="Home page" />
      <div></div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { resolvedUrl } = context;
  store.dispatch(setProfileData('My Server Name'));
  return {
    props: {
      resolvedUrl
    }
  };
});

export default Home;
