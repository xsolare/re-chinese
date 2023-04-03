import type { IGlossaryBase, IGlossaryContent, IGlossaryItem } from '#/types/glossary'
import { briefly } from './briefly'
import { tester } from './tester'
import { text } from './text'

const base = {
  id: '6',
  url: 'le',
  title: 'Частица 了(le)',
  description: 'Частица, показывающая изменение ситуации или состояния 了 (le)',
  hsk: '2'
} as IGlossaryBase

export const leGlossary6: IGlossaryContent = {
  ...base,
  text,
  briefly,
  tester
}

export const leGlossaryItem6: IGlossaryItem = {
  ...base,
  icon: '1',
  title: 'Частица 了(le)',
  badges: ['модальные глаголы']
}
