import type { IGlossaryItem, IGlossaryContent } from '#/types/glossary';

const text = `
<div>
  <span type="text">Данный вспомогательный глагол, имеет значение: разрешите, позвольте.</span>

  <span type="rule">Субъект + <span type="h" p="le">了</span> + Глагол + Объект</span>

  <div type="example">
    <span type="h" p="wǒ kěyǐ zǒu liǎo mǎ?" t="Могу ли я уйти?">我可以走了吗?</span> <br />
    <span type="h" p="wǒ néng zǎodiǎn huíjiā mǎ?" t="Могу ли я пойти домой раньше?">我能早点回家吗?</span> <br />
    <span type="h" p="wǒ kěyǐ qù nàlǐ" t="Я могу туда пойти">我可以去那里</span> (есть разрешение)
  </div>

  <br />
  <br />
  <span type="text">Отрицание с <span type="h" p="kěyǐ">可以</span> </span>

  <span type="text">
    Отрицательные предложения с <span type="h" p="kěyǐ">可以</span> 
    строятся по принципу стандартного отрицания с частицей <span type="h" p="bù">不</span>,
    которая ставится перед <span type="h" p="kěyǐ">可以</span> 
  </span>

  <span type="rule">Субъект + <span type="h" p="bù">不</span> + <span type="h" p="le">了</span> + Глагол + Объект</span>

  <div type="example">
    <span type="h" p="wǒ bùkěyǐ gàosù nǐ" t="Я не могу тебе это рассказать">我不可以告诉你</span> <br />
    <span type="h" p="nǐ bùkěyǐ hé wǒmen yīqǐ qù" t="Ты не можешь пойти с нами">你不可以和我们一起去</span> <br />
    <span type="h" p="wǒ xiànzài bùkěyǐ kāichē" t="Я сейчас не могу вести машину">我现在不可以开车</span> <br />
  </div>

</div>
`;

export const keyiNengHuiGlossaryItem2: IGlossaryItem = {
  id: '2',
  url: 'keyiNengHui',
  hsk: '1',
  icon: '1',
  title: 'Глаголы 可以 keyi 能 neng 会 hui и их разница',
  badges: ['глаголы']
};

export const keyiNengHuiGlossary2: IGlossaryContent = {
  id: '2',
  description: 'Глаголы 可以 keyi 能 neng 会 hui и их разница в китайском языке',
  url: 'keyiNengHui',
  title: '可以 keyi 能 neng 会 hui',
  hsk: '1',
  text,
  briefly: [
    {
      id: '1',
      hieroglyph: '可以',
      pinyin: 'kěyǐ',
      translate: 'мочь, можно'
    }
  ]
};
