import React from 'react';
import type { NextPage } from 'next';
import type { ILibContent } from '#/models/ILib';
import { NextSeo } from 'next-seo';
import { wrapper } from '#/store';
import { libs } from './mock';
import { LibraryItemContentStyled, LibraryItemStyled } from '#/styles/lib/Lib.style';

interface ILibraryItemProps {
  lib: ILibContent;
}

// LibraryItem component
//* ------------------------------------------------------------------------------------------ *//
const LibraryItem: NextPage<ILibraryItemProps> = (props) => {
  const { lib } = props;

  return (
    <>
      <NextSeo title="Library item content" description="Library item content page" />
      <LibraryItemStyled>
        <LibraryItemContentStyled>{lib.text}</LibraryItemContentStyled>
      </LibraryItemStyled>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { params } = context;
  const lib = libs.find((f) => f.id === params?.id);

  return {
    props: {
      lib
    }
  };
});

export default LibraryItem;
