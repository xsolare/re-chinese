import type { FC } from 'react';
import type { ILibItem } from '#/models/ILib';
import Link from 'next/link';

type ILibItemProps = ILibItem;

// LibItem
//* ------------------------------------------------------------------ *//
const LibItem: FC<ILibItemProps> = (props) => {
  const { id, icon, hsk, text } = props;

  return (
    <Link href={`/lib/${id}`}>
      <div>
        <div>{icon}</div>
        <div>{text}</div>
        <div>{hsk}</div>
      </div>
    </Link>
  );
};

export default LibItem;
