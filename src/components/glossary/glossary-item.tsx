import type { FC } from 'react';
import type { IGlossaryItem } from '#/types/glossary';
import { GlossaryItemHskStyled, GlossaryItemStyled } from './glossary-item.style';
import { AiTwotoneFire } from 'react-icons/ai';
import { Tooltip } from '../xsolare';
import Link from 'next/link';

type IGlossaryItemProps = IGlossaryItem;

// LibItem
//* ------------------------------------------------------------------ *//
const GlossaryItem: FC<IGlossaryItemProps> = (props) => {
  const { id, title, hsk } = props;

  return (
    <GlossaryItemStyled>
      {/* <div className="badges-header">
        {[...badges, `hsk-${hsk}`].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div> */}
      <Link href={`/glossary/${id}`}>
        <div className="title">{title}</div>
      </Link>
      <div className="badges-footer">
        {/* <Word p="xiǎng" t="хотеть, собираться">
          想
        </Word> */}
        <Tooltip title="Уровень сложности по шкале HSK (1-9)" placement="bottom" delay={250}>
          <GlossaryItemHskStyled hsk={hsk}>
            <AiTwotoneFire />
            <div>{hsk}</div>
          </GlossaryItemHskStyled>
        </Tooltip>
      </div>
    </GlossaryItemStyled>
  );
};

export default GlossaryItem;
