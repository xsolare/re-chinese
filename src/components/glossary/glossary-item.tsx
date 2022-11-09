import type { FC } from 'react';
import type { IGlossaryItem } from '#/types/glossary';
import { GlossaryItemStyled } from './glossary-item.style';
import { AiFillFire } from 'react-icons/ai';
import Link from 'next/link';

type IGlossaryItemProps = IGlossaryItem;

// LibItem
//* ------------------------------------------------------------------ *//
const GlossaryItem: FC<IGlossaryItemProps> = (props) => {
  const { id, title, hsk, badges } = props;

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
        <span className="hsk">
          <AiFillFire />
          <div>{hsk}</div>
        </span>
      </div>
    </GlossaryItemStyled>
  );
};

export default GlossaryItem;
