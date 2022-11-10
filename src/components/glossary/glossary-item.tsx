import type { FC } from 'react';
import type { IGlossaryItem } from '#/types/glossary';
import Link from 'next/link';
import { Tooltip } from '../xsolare';
import { GlossaryItemHskStyled, GlossaryItemStyled } from './glossary-item.style';
import { AiTwotoneFire } from 'react-icons/ai';

type IGlossaryItemProps = IGlossaryItem;

// LibItem
//* ------------------------------------------------------------------ *//
const GlossaryItem: FC<IGlossaryItemProps> = (props) => {
  const { id, title, hsk, badges } = props;

  return (
    <Link href={`/glossary/${id}`}>
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
        <Link href={`/glossary/${id}`}>
          <div className="title">{title}</div>
        </Link>
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
