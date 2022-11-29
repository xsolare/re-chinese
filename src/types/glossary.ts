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

export interface IGlossaryBriefly {
  id: string;
  hieroglyph: string;
  pinyin: string;
  translate: string;
  examples: string[];
}
