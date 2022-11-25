import type { IGlossaryContent, IGlossaryItem } from '#/types/glossary';
import { mvGlossaryItem1, mvGlossary1 } from './glossary/1_modalVerb';
import { keyiNengHuiGlossaryItem2, keyiNengHuiGlossary2 } from './glossary/2_keyiNengHui';
import { familyGlossaryItem3, familyGlossary3 } from './glossary/3_family';
import { afterwordGlossary4, afterwordGlossaryItem4 } from './glossary/4_afterword';
import { countingWordsGlossary5, countingWordsGlossaryItem5 } from './glossary/5_countingWords';

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
