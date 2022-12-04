import type {
  IGlossaryBriefly,
  IGlossaryContent,
  IGlossaryItem,
  IGlossaryTester
} from '#/types/glossary';
import { mvGlossaryItem1, mvGlossary1 } from './1_modalVerb';
import { keyiNengHuiGlossaryItem2, keyiNengHuiGlossary2 } from './2_keyiNengHui';
import { familyGlossaryItem3, familyGlossary3 } from './3_family';
import { afterwordGlossaryItem4, afterwordGlossary4 } from './4_afterword';
import { countingWordsGlossaryItem5, countingWordsGlossary5 } from './5_countingWords';

export const glossaryItems: IGlossaryItem[] = [
  mvGlossaryItem1,
  keyiNengHuiGlossaryItem2,
  familyGlossaryItem3,
  afterwordGlossaryItem4,
  countingWordsGlossaryItem5
];

export const glossary: IGlossaryContent[] = [
  mvGlossary1,
  keyiNengHuiGlossary2,
  familyGlossary3,
  afterwordGlossary4,
  countingWordsGlossary5
];

//* --- Text --- *//
export const text: IGlossaryContent[] = [
  mvGlossary1,
  keyiNengHuiGlossary2,
  familyGlossary3,
  afterwordGlossary4,
  countingWordsGlossary5
];

//* --- Briefly --- *//
export const briefly: IGlossaryBriefly[] = [
  mvGlossary1,
  keyiNengHuiGlossary2,
  familyGlossary3,
  afterwordGlossary4,
  countingWordsGlossary5
];

//* --- Tester --- *//
export const tester: IGlossaryTester[] = [];
