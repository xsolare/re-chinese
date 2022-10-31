import type { FC } from 'react';
import type { IGlossaryItem } from '#/types/glossary';
import Link from 'next/link';
import { GlossaryItemStyled } from '#/styles/components/glossary/glossary.style';

type IGlossaryItemProps = IGlossaryItem;

// LibItem
//* ------------------------------------------------------------------ *//
const GlossaryItem: FC<IGlossaryItemProps> = (props) => {
  const { id, title, hsk, badges } = props;

  return (
    <Link href={`/glossary/${id}`}>
      <GlossaryItemStyled>
        <div className="title">{title}</div>
        <div className="badges">
          {[...badges, `hsk-${hsk}`].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </GlossaryItemStyled>
    </Link>
  );
};

export default GlossaryItem;
