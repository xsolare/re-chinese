import type { FC } from 'react';
import React, { useMemo } from 'react';
import { parseGlossary } from '#/utils/parseTextToHtml';
import { GlossarySectionStyled } from '../section.style';

interface IGlossaryTextProps {
  content: string;
  isHidden?: boolean;
}

const GlossaryText: FC<IGlossaryTextProps> = (props) => {
  const { content, isHidden } = props;

  const GlossaryContent = useMemo(() => parseGlossary(content), []);

  if (isHidden) {
    return null;
  }

  return (
    <GlossarySectionStyled>
      {content ? GlossaryContent : <h2>Текст не найден</h2>}
    </GlossarySectionStyled>
  );
};

export default GlossaryText;
