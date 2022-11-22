type LvlHSK = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface HSK {
  uid: string;
  id: number;
  hsk: LvlHSK;
  cn: string;
  translate: string;
  pinyin: string;
  another?: string;
}
