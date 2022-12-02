import type { FC } from 'react';
import React, { useMemo } from 'react';
import { parseGlossary } from '#/utils/parseTextToHtml';
import { GlossarySectionStyled } from '../section.style';

interface IGlossaryTextProps {
  content: string;
}

const GlossaryText: FC<IGlossaryTextProps> = ({ content }) => {
  const GlossaryContent = useMemo(() => parseGlossary(content), []);

  return (
    <GlossarySectionStyled>
      {content ? GlossaryContent : <h2>Текст не найден</h2>}
    </GlossarySectionStyled>
  );
};

export default GlossaryText;
