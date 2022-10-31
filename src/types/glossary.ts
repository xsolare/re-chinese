export interface IGlossaryItem {
  id: string;
  title: string;
  hsk: string;
  icon: string;
  badges: string[];
}

export interface IGlossaryContent {
  id: string;
  title: string;
  hsk: number;
  text: string;
  briefly: IGlossaryBriefly[];
}

export interface IGlossaryBriefly {
  id: string;
  hieroglyph: string;
  pinyin: string;
  translate: string;
}
