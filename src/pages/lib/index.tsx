import React from 'react';
import type { NextPage } from 'next';
import type { ILibItem } from '#/models/ILib';
import { NextSeo } from 'next-seo';
import { wrapper } from '#/store';
import { libItems } from './mock';
import LibItem from '#/components/lib-item/LibItem';

interface ILibraryProps {
  libItems: ILibItem[];
}

// Library component
//* ------------------------------------------------------------------------------------------ *//
const Library: NextPage<ILibraryProps> = (props) => {
  const { libItems } = props;

  return (
    <>
      <NextSeo title="Library" description="Library page" />
      <div>
        {libItems.map((lib) => (
          <LibItem key={lib.id} {...lib} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      libItems
    }
  };
});

export default Library;
