export interface IGlossaryBase {
  id: string;
  url: string;
  title: string;
  hsk: string;
}

export interface IGlossaryItem extends IGlossaryBase {
  icon: string;
  badges: string[];
}

export interface IGlossaryContent extends IGlossaryBase {
  text: string;
  briefly: IGlossaryBriefly[];
}

export interface IGlossaryBriefly {
  id: string;
  hieroglyph: string;
  pinyin: string;
  translate: string;
}
