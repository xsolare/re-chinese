import type { IGlossaryBase, IGlossaryContent, IGlossaryItem } from '#/types/glossary'
import { briefly } from './briefly'
import { tester } from './tester'
import { text } from './text'

const base = {
  id: '3',
  title: 'Семья',
  description: 'Как состовлять предложения в контексте "Семья" в китайском языке',
  url: 'family',
  hsk: '1'
} as IGlossaryBase

export const familyGlossaryItem3: IGlossaryItem = {
  ...base,
  icon: '1',
  badges: []
}

export const familyGlossary3: IGlossaryContent = {
  ...base,
  text,
  briefly,
  tester
}
