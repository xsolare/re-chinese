import type { FC } from 'react';
import type { IGlossaryItem } from '#/types/glossary';
import Link from 'next/link';

type IGlossaryItemProps = IGlossaryItem;

// LibItem
//* ------------------------------------------------------------------ *//
const GlossaryItem: FC<IGlossaryItemProps> = (props) => {
  const { id, icon, hsk, text } = props;

  return (
    <Link href={`/glossary/${id}`}>
      <div>
        <div>{icon}</div>
        <div>{text}</div>
        <div>{hsk}</div>
      </div>
    </Link>
  );
};

export default GlossaryItem;
