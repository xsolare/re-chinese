import type { ILibItem, ILibContent } from '#/models/ILib';

export const libItems: ILibItem[] = [
  { id: '1', hsk: '1', icon: '1', text: 'text' },
  { id: '2', hsk: '2', icon: '2', text: 'text' },
  { id: '3', hsk: '3', icon: '3', text: 'text' }
];

export const libs: ILibContent[] = [
  { id: '1', text: 'text'.repeat(100) },
  { id: '2', text: 'text'.repeat(100) },
  { id: '3', text: 'text'.repeat(100) }
];
