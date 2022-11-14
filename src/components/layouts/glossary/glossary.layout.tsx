/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';

//* Styles
import { GlossaryLayoutStyled } from './glossary.style';

//* Components
import { TabsSlider } from '#/components/xsolare';
import { isWindowExists } from '#/utils/helpers';

// Glossary layout
//* ------------------------------------------------------------------------------------------ *//
const GlossaryLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const getDefaultTab = React.useMemo(() => {
    if (!isWindowExists()) return 0;

    const { pathname } = window.location;

    if (pathname === '/glossary') return 0;
  }, []);

  const MemoSlider = React.useMemo(
    () => (
      <TabsSlider
        options={[{ value: '/', additional: '' }]}
        renderOption={({ value, additional }) => (
          <div onClick={() => router.push(`/glossary/${(additional as string) ?? ''}`)}>
            {value}
          </div>
        )}
        defaultTab={getDefaultTab}
        headerText="Иероглифы китайского языка"
        width="1000px"
      />
    ),
    []
  );

  return (
    <GlossaryLayoutStyled>
      {MemoSlider}
      {children}
    </GlossaryLayoutStyled>
  );
};
export default GlossaryLayout;
