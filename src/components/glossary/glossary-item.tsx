import type { FC } from 'react';
import type { IGlossaryItem } from '#/types/glossary';
import Link from 'next/link';
import { GlossaryItemHskStyled, GlossaryItemStyled } from './glossary-item.style';
import { AiTwotoneFire } from 'react-icons/ai';
import { Tooltip } from '../xsolare';

type IGlossaryItemProps = IGlossaryItem;

// Glossary item
//* ------------------------------------------------------------------ *//
const GlossaryItem: FC<IGlossaryItemProps> = (props) => {
  const { url, title, hsk } = props;

  return (
    <Link href={`/glossary/${url}`}>
      <GlossaryItemStyled>
        <div className="badges-header">
          <div> </div>
          {/* <GlossaryItemyTagsStyled>
            {badges.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </GlossaryItemyTagsStyled> */}
          <Tooltip title="Уровень сложности по шкале HSK (1-9)" placement="bottom" delay={250}>
            <GlossaryItemHskStyled hsk={hsk}>
              <AiTwotoneFire />
              <div>{hsk}</div>
            </GlossaryItemHskStyled>
          </Tooltip>
        </div>
        <div className="title">{title}</div>
        {/* <div className="badges-footer">
          <Word p="xiǎng" t="хотеть, собираться">
            想
          </Word>
        </div> */}
      </GlossaryItemStyled>
    </Link>
  );
};

export default GlossaryItem;
