import type { IGlossaryContent, IGlossaryItem } from '#/types/glossary';
import { briefly } from './briefly';
import { text } from './text';

const base = {
  id: '5',
  url: 'countingWords',
  title: 'Счетные слова',
  hsk: '2'
};

export const countingWordsGlossary5: IGlossaryContent = {
  ...base,
  description: 'Счётные слова / Классификаторы / Нумеративы китайского языка',
  text,
  briefly
};

export const countingWordsGlossaryItem5: IGlossaryItem = {
  ...base,
  icon: '1',
  title: 'Счетные слова',
  badges: ['глаголы']
};
