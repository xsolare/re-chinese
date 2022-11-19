import type { IGlossaryItem, IGlossaryContent } from '#/types/glossary';

const text = `
<div>
    <span type="text">&nbsp;&nbsp;&nbsp;&nbsp;Послелоги или <span fixed="0" type="h" p="fāngwèi cí" t="послелоги">方位词</span> по своим грамматическим свойствам схожи с существительными места. Всего в китайском языке 14 односложных (состоящих из одного слога) послелогов, четыре из которых географические названия и места.</span>
    <span type="text">Чтобы более точно указать местоположение, необходимо после дополнения места использовать послелоги:</span>
    <div type="example" row="2">
        <span type="h" p="lǐ" t="в, внутри">里</span><br/>
        <span type="h" p="wài" t="внешний">外</span><br/>
        <span type="h" p="qián" t="впереди">前</span><br/>
        <span type="h" p="shàng" t="сверху, на чём-то">上</span><br/>
        <span type="h" p="zhōng" t="внутри, в, между, посреди; среди">中</span><br/>
        <span type="h" p="zuǒ" t="слева">左</span><br/>
        <span type="h" p="nèi" t="внутри">内</span><br/>
        <span type="h" p="xià" t="под чем-то">下</span><br/>
        <span type="h" p="yòu" t="справа">右</span><br/>
        <span type="h" p="hòu" t="позади, сзади">后</span><br/>
    </div>
    <br />  
    <span type="warn">
      Послелоги обычно <strong>не ставятся</strong> после географических названий и мест, а также после слов, обозначающих стороны горизонта:
      <br/>
      <span type="h" p="běi" t="Север">北</span>
      <span type="h" p="nán" t="Юг">南</span>
      <span type="h" p="xī" t="Запад">西</span>
      <span type="h" p="dōng" t="Восток">东</span> 
    </span>
    <hr />
    <span type="text">&nbsp;&nbsp;&nbsp;&nbsp;
      После односложных послелогов можно добавить иероглифы 
        <span fixed="0" type="h" p="biān" t="сторона, край">边</span>
        <span fixed="0" type="h" p="miàn" t="поверхность, сторона">面</span>
        <span fixed="0" type="h" p="tóu"  t="сторона, верхушка">头</span>
        <span fixed="0" type="h" p="fāng" t="сторона, место">方</span>
        <span fixed="0" type="h" p="jiān" t="время">间</span>
      так образуются двусложные послелоги.
      Также вместо послелогов можно использовать вспомогательные существительные, чтобы указать местоположение:
    </span>
    <div type="example" row="2">
        <span type="h" p="zhōngjian" t="посередине, среди">中间</span><br/>
        <span type="h" p="duìmian" t="напротив">对面</span><br/>
        <span type="h" p="pángbian" t="рядом">旁边</span><br/>
        <span type="h" p="zuǒbiān" t="слева">左边</span><br/>
        <span type="h" p="yòubiān" t="справа">右边</span><br/>
    </div>

    <br/>
    <span type="text">
      Также если Вы хотите сказать, что делаете что-то где-то, то используйте 
      <span fixed="0" type="h" p="zài" t="находиться в...">在</span> 
      с послеслогом, чтобы точно указать место совершения действия.
    </span>
    <span type="rule">
      Субъект + <span fixed="0" type="h" p="le" t="в, на, у, за, под, при, до, перед">在</span> + Место + Послелог + Глагол + Объект
    </span>
    <span type="rule">
      Подлежащее + <span fixed="0" type="h" p="le" t="в, на, у, за, под, при, до, перед">在</span> + Дополнение места + Послелог + Сказуемое + Дополнение
    </span>
    <div type="example">
      <span type="h" p="xuéshēng zài jiàoshì shàngkè" t="Учащиеся занимаются в аудитории">学生在教室上课</span><br/>
      <span type="h" p="gēgē zài zhèér gōngzuò" t="Старший брат работает здесь">哥哥在这儿工作</span><br/>
      <span type="h" p="shū zài wǒ zhèér" t="Книга у меня (здесь)">书在我这儿</span><br/>
      <span type="h" p="bùyào zài chuáng shàng chī dōngxī" t="Не ешь в постели">不要在床上吃东西</span><br/>
    </div
</div>
`;

export const afterwordGlossaryItem4: IGlossaryItem = {
  id: '4',
  url: 'afterword',
  hsk: '1',
  icon: '1',
  title: 'Послеслоги ( 方位词 )',
  htmlTitle:
    '<span>Послеслоги <span fixed="0" type="h" p="hòu zhì cí" t="послеслоги">方位词</span></span>',
  badges: ['послеслоги']
};

export const afterwordGlossary4: IGlossaryContent = {
  id: '4',
  url: 'afterword',
  description: 'Послеслоги ( 方位词 / hòu zhì cí ) в китайском языке',
  title: 'Послеслоги ( 方位词 / hòu zhì cí )',
  htmlTitle:
    '<span>Послеслоги <span fixed="0" type="h" p="hòu zhì cí" t="послеслоги">方位词</span></span>',
  hsk: '1',
  text,
  briefly: [
    {
      id: '1',
      hieroglyph: '内',
      pinyin: 'nèi',
      translate: 'внутри'
    },
    {
      id: '2',
      hieroglyph: '下',
      pinyin: 'xià',
      translate: 'под чем-то'
    },
    {
      id: '3',
      hieroglyph: '上',
      pinyin: 'shàng',
      translate: 'сверху, на что'
    },
    {
      id: '4',
      hieroglyph: '左',
      pinyin: 'zuǒ',
      translate: 'слева'
    },
    {
      id: '5',
      hieroglyph: '右',
      pinyin: 'yòu',
      translate: 'справа'
    },
    {
      id: '6',
      hieroglyph: '前',
      pinyin: 'qián',
      translate: 'впереди'
    },
    {
      id: '7',
      hieroglyph: '后',
      pinyin: 'hòu',
      translate: 'позади, сзади'
    },
    {
      id: '8',
      hieroglyph: '里',
      pinyin: 'lǐ',
      translate: 'в, внутри'
    },
    {
      id: '9',
      hieroglyph: '中',
      pinyin: 'zhōng',
      translate: 'внутри, в, между, посреди; среди'
    },
    {
      id: '10',
      hieroglyph: '对面',
      pinyin: 'duìmian ',
      translate: 'напротив'
    },
    {
      id: '11',
      hieroglyph: '旁边',
      pinyin: 'pángbian',
      translate: 'рядом'
    },
    {
      id: '12',
      hieroglyph: '中间',
      pinyin: 'zhōngjian',
      translate: 'посередине, среди'
    },
    {
      id: '13',
      hieroglyph: '左边',
      pinyin: 'zuǒbiān',
      translate: 'слева'
    },
    {
      id: '14',
      hieroglyph: '右边',
      pinyin: 'yòubiān',
      translate: 'справа'
    }
  ]
};
