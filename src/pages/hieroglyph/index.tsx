import type { NextPageWithLayout } from '#/pages/_app';
import type { IHieroglyph } from '#/types/hieroglyph';
import type { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import React from 'react';

//* Components
import HieroglyphKeys from '#/components/hieroglyph/hieroglyph-keys/hieroglyph-keys';
import HieroglyphLayout from '#/components/layouts/hieroglyph/hieroglyph.layout';
import { mockHieroglyph } from '#/utils/mock/hieroglyph';

interface IPinyinProps {
  hieroglyphKeys: IHieroglyph[];
}

// Pinyin component
//* ------------------------------------------------------------------------------------------ *//
const Hieroglyph: NextPageWithLayout<IPinyinProps> = (props) => {
  const { hieroglyphKeys } = props;

  return (
    <>
      <NextSeo title="Ключи-иероглифы" description="Ключи китайского языка" />
      <div>
        <h2>214 радикала(ключа), для построения всевозможных иероглифов</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Всего существует более 80 000 китайских иероглифов. Из них
          примерно 10 000 используются активно. Знание 214-х радикалов облегчит вам процесс изучения
          китайского языка. Почему? Потому что, когда вы знаете радикалы, вам легче запомнить, как
          они сочетаются друг с другом, образуя более сложные символы. Радикалы могут выполнять одну
          из следующих функций или обе:
        </p>
        <ul>
          <li>
            <em>семантический</em>, предоставление части или всего смысла;
          </li>
          <li>
            <em>фонетика</em>, придание звука персонажу или чему-то очень близкому к нему.
          </li>
        </ul>
        <h2>Концепция ключевых</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Каждый символ имеет один и только один радикал с названием ”ключ“,
          который позволяет найти символ в словаре. Во многих случаях радикал слева или вверху
          символа является ключевым.
        </p>
      </div>
      <HieroglyphKeys hieroglyphKeys={hieroglyphKeys} />
    </>
  );
};

Hieroglyph.getInitialProps = async () => {
  return {
    hieroglyphKeys: mockHieroglyph
  };
};

Hieroglyph.getLayout = function getLayout(page: ReactElement) {
  return <HieroglyphLayout>{page}</HieroglyphLayout>;
};

export default Hieroglyph;
