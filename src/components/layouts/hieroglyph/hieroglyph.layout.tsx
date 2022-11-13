/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';

//* Styles
import { HieroglyphLayoutStyled } from './hieroglyph.style';

//* Components
import { TabsSlider } from '#/components/xsolare';
import { useLayoutEffect, useState } from 'react';
import { isWindowExists } from '#/utils/helpers';

// Default layout
//* ------------------------------------------------------------------------------------------ *//
const HieroglyphLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [route, setRoute] = useState<number>(0);

  useLayoutEffect(
    () => {
      const { pathname } = window.location;

      if (pathname === '/hieroglyph') setRoute(0);
      if (pathname === '/hieroglyph/tester') setRoute(1);
    },
    isWindowExists() ? [window.location.pathname] : []
  );

  return (
    <HieroglyphLayoutStyled>
      <TabsSlider
        options={[
          { value: 'Ключи', additional: '' },
          { value: 'Проверка знаний', additional: 'tester' }
        ]}
        renderOption={({ value, additional }) => (
          <div onClick={() => router.push(`/hieroglyph/${additional ?? ''}`)}>{value}</div>
        )}
        defaultTab={route}
        headerText="Иероглифы китайского языка"
        width="1000px"
      />
      {children}
    </HieroglyphLayoutStyled>
  );
};
export default HieroglyphLayout;
