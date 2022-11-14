/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';

//* Styles
import { HieroglyphLayoutStyled } from './hieroglyph.style';

//* Components
import { TabsSlider } from '#/components/xsolare';
import { isWindowExists } from '#/utils/helpers';

// Default layout
//* ------------------------------------------------------------------------------------------ *//
const HieroglyphLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const getDefaultTab = React.useMemo(() => {
    if (!isWindowExists()) return 0;

    const { pathname } = window.location;

    if (pathname === '/hieroglyph') return 0;
    if (pathname === '/hieroglyph/tester') return 1;
  }, []);

  const MemoSlider = React.useMemo(
    () => (
      <TabsSlider
        options={[
          { value: 'Ключи', additional: '' },
          { value: 'Проверка знаний', additional: 'tester' }
        ]}
        renderOption={({ value, additional }) => (
          <div onClick={() => router.push(`/hieroglyph/${(additional as string) ?? ''}`)}>
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
    <HieroglyphLayoutStyled>
      {MemoSlider}
      {children}
    </HieroglyphLayoutStyled>
  );
};
export default HieroglyphLayout;
