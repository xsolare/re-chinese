import type { IGlossaryBase, IGlossaryContent, IGlossaryItem } from '#/types/glossary'
import { briefly } from './briefly'
import { tester } from './tester'
import { text } from './text'

const base = {
  id: '4',
  url: 'afterword',
  title: 'Послеслоги ( 方位词 )',
  description: 'Послеслоги ( 方位词 / hòu zhì cí ) в китайском языке',
  hsk: '1'
} as IGlossaryBase

export const afterwordGlossaryItem4: IGlossaryItem = {
  ...base,
  icon: '1',
  badges: []
}

export const afterwordGlossary4: IGlossaryContent = {
  ...base,
  text,
  briefly,
  tester
}
