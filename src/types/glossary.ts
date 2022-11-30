import type { IHieroglyph } from '#/types/hieroglyph';

export interface IGlossaryBase {
  id: string;
  url: string;
  title: string;
  htmlTitle?: string;
  hsk: string;
}

export interface IGlossaryItem extends IGlossaryBase {
  icon: string;
  badges: string[];
}

export interface IGlossaryContent extends IGlossaryBase {
  description: string;
  text: string;
  briefly: IGlossaryBriefly[];
}

export type IGlossaryBrieflyExample = Omit<IHieroglyph, 'id' | 'traditional'>;
export interface IGlossaryBriefly extends IHieroglyph {
  examples: IGlossaryBrieflyExample[];
}
