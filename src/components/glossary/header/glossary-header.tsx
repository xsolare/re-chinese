/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import type { FC } from 'react';
import { Sections } from '#/store/pages/glossary.store';
import { GlossaryHeaderStyled } from './glossary-header.style';

import { TbTestPipe } from 'react-icons/tb';
import { CgShortcut } from 'react-icons/cg';
import { useGlossaryUrlContext } from '#/components/layouts/glossary/url/glossary-url.provider';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import cn from 'classnames';

// Glossary header
//* ------------------------------------------------------------------ *//
const GlossaryHeader: FC = () => {
  const router = useRouter();
  const navigateTo = (value: string) => router.push(`/glossary/${glossaryBase.url}/${value}`);

  const { pageStore } = useGlossaryUrlContext();
  const {
    state: { glossaryBase, section },
    setSection
  } = pageStore;

  const changeSection = (value: Sections) => () => {
    if (section === value) {
      navigateTo(Sections.Main);
      setSection(Sections.Main);
    } else {
      navigateTo(value);
      setSection(value);
    }
  };

  return (
    <GlossaryHeaderStyled>
      <div className="option left">
        <CgShortcut
          className={cn('icon', { isActive: section === Sections.Briefly })}
          onClick={changeSection(Sections.Briefly)}
        />
        <TbTestPipe
          className={cn('icon', { isActive: section === Sections.Tester })}
          onClick={changeSection(Sections.Tester)}
        />
      </div>
      <h1 className="title">{glossaryBase?.title}</h1>
      <div className="option right">
        <div className="hsk">{`HSK-${glossaryBase?.hsk}`}</div>
      </div>
    </GlossaryHeaderStyled>
  );
};

export default observer(GlossaryHeader);
