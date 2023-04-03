import type { IGlossaryBase, IGlossaryContent, IGlossaryItem } from '#/types/glossary'
import { briefly } from './briefly'
import { tester } from './tester'
import { text } from './text'

const base = {
  id: '2',
  title: 'Глаголы 可以 keyi 能 neng 会 hui',
  description: 'Глаголы 可以 keyi 能 neng 会 hui и их разница в китайском языке',
  url: 'keyi-neng-hui',
  hsk: '1'
} as IGlossaryBase

export const keyiNengHuiGlossaryItem2: IGlossaryItem = {
  ...base,
  icon: '1',
  badges: ['глаголы']
}

export const keyiNengHuiGlossary2: IGlossaryContent = {
  ...base,
  text,
  briefly,
  tester
}
