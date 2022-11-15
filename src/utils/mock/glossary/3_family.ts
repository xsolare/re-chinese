import type { IGlossaryItem, IGlossaryContent } from '#/types/glossary';

const text = '<div>asdasd <span type="h" p="le">家</span></div>';

export const familyGlossaryItem3: IGlossaryItem = {
  id: '3',
  hsk: '1',
  icon: '1',
  title: 'Семья',
  badges: ['глаголы']
};

export const familyGlossary3: IGlossaryContent = {
  id: '3',
  title: 'Семья',
  hsk: 1,
  text,
  briefly: [
    {
      id: '1',
      hieroglyph: '家',
      pinyin: 'jiā',
      translate: 'семья'
    }
  ]
};
