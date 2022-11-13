/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';

//* Styles
import { GlossaryLayoutStyled } from './glossary.style';

//* Components
import { TabsSlider } from '#/components/xsolare';
import { useLayoutEffect, useState } from 'react';
import { isWindowExists } from '#/utils/helpers';

// Glossary layout
//* ------------------------------------------------------------------------------------------ *//
const GlossaryLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [route, setRoute] = useState<number>(0);

  useLayoutEffect(
    () => {
      const { pathname } = window.location;

      if (pathname === '/glossary') setRoute(0);
    },
    isWindowExists() ? [window.location.pathname] : []
  );

  return (
    <GlossaryLayoutStyled>
      <TabsSlider
        options={[{ value: '/', additional: '' }]}
        renderOption={({ value, additional }) => (
          <div onClick={() => router.push(`/hieroglyph/${additional ?? ''}`)}>{value}</div>
        )}
        defaultTab={route}
        headerText="Глоссарий"
        width="1000px"
      />
      {children}
    </GlossaryLayoutStyled>
  );
};
export default GlossaryLayout;
