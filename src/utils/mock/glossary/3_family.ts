import type { IGlossaryItem, IGlossaryContent } from '#/types/glossary';

const text = `<div>
  <span type="text">
    "Семья" по-китайски - это <span fixed="0" type="h" p="jiā">家</span> Этот иероглиф можно перевести как «семья» или «дом».
    Но истинное значение этого слова гораздо глубже.
    Иероглиф «семья» – <span fixed="0" type="h" p="jiā">家</span> – обозначает как место, где живет семья, так и людей, которые ее составляют.
    В верхней части символа находится <span fixed="0" type="h" p="mián">宀</span>, что означает «дом»;
    в нижней части – <span fixed="0" type="h" p="shǐ">豕</span>, что означает «свинья».
  </span>

  <br />
  <br />
  <br />

  <span type="warn">
    <em>Интересный факт</em> <br /> <br /> 
    <span type="text">В китайской культуре страна называется:</span> <br />
    <span type="h" p="guó jiā" t="Государственная семья.">国家</span>  <br /> <br />
    <span type="text">Конфуцианство:</span> <br />
    <span type="h" p="ru jiā" t="конфуцианская семья.">儒家</span>  <br />
  </span>

  <hr />

  <span type="text">Члены семьи:</span> <br /> <br />
  <div type="example" row="2">
    <span fixed="1" type="h" p="mǔ qīn" t="Мать">母亲</span> <br />
    <span fixed="1" type="h" p="fù qīn" t="Отец">父亲</span> <br />
    <span fixed="1" type="h" p="xiōng dì" t="Брат">兄弟</span> <br />
    <span fixed="1" type="h" p="ér zi" t="Сын">儿子</span> <br />
    <span fixed="1" type="h" p="nǚ ér" t="Дочь">女儿</span> <br />
    <span fixed="1" type="h" p="hái zi men" t="Дети">孩子们</span> <br />
    <span fixed="1" type="h" p="jì fù" t="Отчим">继母</span> <br />
    <span fixed="1" type="h" p="jì jiě mèi" t="Сводная сестра">继姐妹</span> <br />
    <span fixed="1" type="h" p="nǚ xù" t="Зять">女婿</span> <br />
    <span fixed="1" type="h" p="ér xí fù" t="Невестка">儿媳妇</span> <br />
    <span fixed="1" type="h" p="qī zi" t="Жена">妻子</span> <br />
    <span fixed="1" type="h" p="zhàng fū" t="Муж">丈夫</span> <br />
  </div>
</div>`;

export const familyGlossaryItem3: IGlossaryItem = {
  id: '3',
  url: 'family',
  hsk: '1',
  icon: '1',
  title: 'Семья',
  badges: ['глаголы']
};

export const familyGlossary3: IGlossaryContent = {
  id: '3',
  url: 'family',
  description: 'Как состовлять предложения в контексте "Семья" в китайском языке',
  title: 'Семья',
  hsk: '1',
  text,
  briefly: [
    {
      id: '1',
      hieroglyph: '家',
      pinyin: 'jiā',
      translate: 'Семья'
    },
    {
      id: '2',
      hieroglyph: '宀',
      pinyin: 'mián',
      translate: 'Дом'
    },
    {
      id: '3',
      hieroglyph: '豕',
      pinyin: 'shǐ',
      translate: 'Свинья'
    },
    {
      id: '4',
      hieroglyph: '国家',
      pinyin: 'guó jiā',
      translate: 'Государственная семья (Государство)'
    },
    {
      id: '5',
      hieroglyph: '儒家',
      pinyin: 'ru jiā',
      translate: 'Конфуцианская семья (Конфуцианство)'
    },
    {
      id: '6',
      hieroglyph: '母亲',
      pinyin: 'mǔ qīn',
      translate: 'Мать'
    },
    {
      id: '7',
      hieroglyph: '父亲',
      pinyin: 'fù qīn',
      translate: 'Отец'
    },
    {
      id: '8',
      hieroglyph: '兄弟',
      pinyin: 'xiōng dì',
      translate: 'Брат'
    },
    {
      id: '9',
      hieroglyph: '姊妹',
      pinyin: 'zǐ mèi',
      translate: 'Сестра'
    },
    {
      id: '10',
      hieroglyph: '儿子',
      pinyin: 'ér zi',
      translate: 'Сын'
    },
    {
      id: '11',
      hieroglyph: '女儿',
      pinyin: 'nǚ ér',
      translate: 'Дочь'
    },
    {
      id: '12',
      hieroglyph: '孩子们',
      pinyin: 'hái zi men',
      translate: 'Дети'
    },
    {
      id: '13',
      hieroglyph: '继母',
      pinyin: 'jì fù',
      translate: 'Отчим'
    },
    {
      id: '14',
      hieroglyph: '继姐妹',
      pinyin: 'jì jiě mèi',
      translate: 'Сводная сестра'
    },
    {
      id: '15',
      hieroglyph: '女婿',
      pinyin: 'nǚ xù',
      translate: 'Зять'
    },
    {
      id: '16',
      hieroglyph: '儿媳妇',
      pinyin: 'ér xí fù',
      translate: 'Невестка'
    },
    {
      id: '17',
      hieroglyph: '妻子',
      pinyin: 'qī zi',
      translate: 'Жена'
    },
    {
      id: '18',
      hieroglyph: '丈夫',
      pinyin: 'zhàng fū',
      translate: 'Муж'
    }
  ]
};
