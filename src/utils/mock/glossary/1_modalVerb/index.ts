import type { IGlossaryBase, IGlossaryContent, IGlossaryItem } from '#/types/glossary'
import { briefly } from './briefly'
import { tester } from './tester'
import { text } from './text'

const base = {
  id: '1',
  title: 'Модальные глаголы',
  description: 'Модальные глаголы в китайском языке',
  url: 'modal-verb',
  hsk: '1'
} as IGlossaryBase

export const mvGlossaryItem1: IGlossaryItem = {
  ...base,
  icon: '1',
  badges: ['глаголы']
}

export const mvGlossary1: IGlossaryContent = {
  ...base,
  text,
  briefly,
  tester
}
