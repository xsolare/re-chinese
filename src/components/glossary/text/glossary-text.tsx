import type { FC } from 'react';
import React, { useMemo } from 'react';
import { parseGlossary } from '#/utils/parseTextToHtml';
import { GlossaryPageStyled } from '../glossary.style';

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
    <GlossaryPageStyled>{content ? GlossaryContent : <h2>Текст не найден</h2>}</GlossaryPageStyled>
  );
};

export default GlossaryText;
