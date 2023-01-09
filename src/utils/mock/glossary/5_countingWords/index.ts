import type { IGlossaryBase, IGlossaryContent, IGlossaryItem } from '#/types/glossary';
import { briefly } from './briefly';
import { tester } from './tester';
import { text } from './text';

const base = {
  id: '5',
  url: 'countingWords',
  title: 'Счетные слова',
  description: 'Счётные слова / Классификаторы / Нумеративы китайского языка',
  hsk: '2'
} as IGlossaryBase;

export const countingWordsGlossary5: IGlossaryContent = {
  ...base,
  text,
  briefly,
  tester
};

export const countingWordsGlossaryItem5: IGlossaryItem = {
  ...base,
  icon: '1',
  title: 'Счетные слова',
  badges: ['глаголы']
};
