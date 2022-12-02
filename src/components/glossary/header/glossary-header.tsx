import type { FC } from 'react';
import type GlossaryStore from '#/store/pages/glossary.store';
import { GlossaryHeaderStyled } from './glossary-header.style';

import { TbTestPipe } from 'react-icons/tb';
import { CgShortcut } from 'react-icons/cg';

interface IGlossaryHeaderProps {
  pageStore: GlossaryStore;
}

// Glossary header
//* ------------------------------------------------------------------ *//
const GlossaryHeader: FC<IGlossaryHeaderProps> = (props) => {
  const { pageStore } = props;

  const { glossary, state, setBriefly, setTester } = pageStore;
  const { isBriefly, isTester } = state;

  return (
    <GlossaryHeaderStyled isBriefly={isBriefly} isTester={isTester}>
      <div className="option left">
        <CgShortcut className="icon" onClick={() => setBriefly(!isBriefly)} />
        <TbTestPipe className="icon" onClick={() => setTester(!isTester)} />
      </div>
      <h1 className="title">{glossary.title}</h1>
      <div className="option right">
        <div className="hsk">{`HSK-${glossary.hsk}`}</div>
      </div>
    </GlossaryHeaderStyled>
  );
};

export default GlossaryHeader;
