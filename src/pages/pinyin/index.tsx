import React from 'react';
import type { NextPageWithLayout } from '../_app';
import { NextSeo } from 'next-seo';
import { mockPinyin } from '../../utils/mock/pinyin';

interface IPinyinTable {
  id: number;
  text: string;
}

interface IPinyinProps {
  pinyinTable: IPinyinTable[];
}

// Pinyin component
//* ------------------------------------------------------------------------------------------ *//
const Pinyin: NextPageWithLayout<IPinyinProps> = () => {
  return (
    <>
      <NextSeo title="Pinyin" description="Pinyin page" />
      <div className="pinyin">
        <div className="pinyin-container">
          {/* {[...Array(10)].map((final) => (
            <div key={final}>
              <div className="pinyin-row__h { highlight: hoverPinyin.finalPos === final.pos }">
                {final}
              </div>
            </div>
          ))}
          {[...Array(10)].map((initial) => (
            <div key={initial}>
              <div className="pinyin-row__v { highlight: hoverPinyin.initialPos === initial.pos }">
                {initial}
              </div>
              {[...Array(10)].map((pinyin) => (
                <div key={pinyin}>
                  <div className="pinyin-row__v { highlight: hoverPinyin.initialPos === initial.pos }">
                    {pinyin}
                  </div>
                </div>
              ))}
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

Pinyin.getInitialProps = async () => {
  return {
    pinyinTable: mockPinyin
  };
};

export default Pinyin;
