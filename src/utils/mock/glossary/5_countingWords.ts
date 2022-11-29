import type { IGlossaryItem, IGlossaryContent } from '#/types/glossary';

const text = `<div> 
  <span type="text">
    &nbsp;&nbsp;&nbsp;&nbsp; При подсчёте количества в китайском языке обязательно использование счётных слов.
    Счётное слово ставится между числом и существительным. Счётные слова в русском языке также используются очень часто.
    Например, нельзя сказать "два мяса". Надо обязательно сказать "два <em>куска</em> мяса".
    Нельзя "два варёных риса", можно "две <em>чашки</em> варёного риса" или "две крупицы риса". 
    Нельзя сказать "500 крупного рогатого скота", можно сказать "500 <em>голов</em> крупного рогатого скота". 
    В китайском языке классификаторы используются практически по такой же логике, но в несколько раз чаще. 
    Счётное слово в китайском языке дословно переводится как <b>"штука"</b>,
    но при переводе на русский язык дословный перевод не редко опускается или
    переводится соответствующим счётным словом для русского языка.
  </span>

  <br/>
  <br/>

  <span type="text">
    Когда Вы говорите о количестве в китайском языке, всегда используйте счётное слово. 
    Для каждой группы существительных с характерными признаками существует своё счётное слово, 
    но если Вы забыли характерное счётное слово используйте на крайний случай универсальное счётное слово
    <span fixed="0" type="h" p="ge"> 个 </span>.
  </span>

  <br/>
  <br/>

  <span type="text">
    В русском языке большинство слов исчисляемые существительные - "два яблока" - нет нужды вставлять классификаторы.
    Есть в русском языке и неисчисляемые существительные , например, <em>люди, вода, шоколад, брюки</em>. Мы должны вставлять счётные слова: 
    <em>группа</em> людей, <em>стакан</em> воды, <em>литр</em> воды (в русском и китайском языка счётным словом может выступать мера веса), две <em>плитки</em> шоколада.
  </span>

  <br/>
  <br/>

  <span type="text">
    А вот в китайском языке существует явление переходности слов. Слово может быть и существительным и глаголом, и прилагательным 
    <span fixed="0" type="h" t="учёба, учиться, учебный" p="xué xí">学习</span>. Такая переходность слов касается и числа- практически <b>все существительные</b> в китайском языке не имеют точно числа, 
    <b>являются</b> и множественным, и единственным числом, а определить конкретное количество и число "штук" можно только с помощью специальных средств , 
    в числе которых просто указать количество с помощью конструкции "количество + классификатор + существительное".
  </span>

  <br/>
  <br/>

  <span type="warn">в китайском языке практически все существительные неисчисляемые , поэтому им всем нужны счётные слова, как для неисчисляемых слов в русском языке.</span>

  <br/>
  <br/>

  <div type="h" index="1" p="ge" t="Штука">个</div>

  <div type="example">
    <span type="h" p="yī ge rén" t="Один человек">一个人</span> <br />
    <span type="h" p="sān ge lǎo wài" t=" Три инострашки">三个老外</span> <br />
    <span type="h" p="nàge měinǚ" t="Та красавица">个美女</span> <br />  
    <span type="h" p="shí ge xué shēng" t="10 сутдентов">十个学生</span> <br />
  </div>
  <br/>
  <span type="warn">
    Счётное слово для неспецифичных существительных. Если Вы забыли именной классификатор, то можете использовать.
    Правда потом китайцы наградят вас званием <span fixed="0" type="h" t="инострашка" p="lǎo wài">老外</span>, если будете все существительные использовать только с 
    <span fixed="0" type="h" t="" p="ge">个</span>.
  </span>

  <hr/>

  <div type="h" index="2" p="wèi" t="Персона">位</div>

  <div type="example">
    <span type="h" p="yī wèi xiānshēng" t="один господин">一位先生</span> <br />
    <span type="h" p="jǐ wèi" t="Сколько персон?">几位</span> <br />
  </div>
  <br/>
  <span type="warn">Используется с уважительными персонами. Со словами друзья, учёные, с профессиями.</span>

  <hr/>

  <div type="h" index="3" p="kǒu" t="Рот">口</div>

  <div type="example">
    <span type="h" p="wǒ jiā yǒu wǔ kǒu rén" t="в моей семье пять человек (пять членов семьи)">我家有五口人</span> <br />
    <span type="h" p="yī kǒu zhū" t="одна свинья">口猪</span> <br />
    <span type="h" p="yī kǒu guō" t="одна сковорода">一口锅</span> <br />
    <span type="h" p="liǎng kǒu jǐng" t="два колодца">两口井</span> <br />
    <span type="h" p="sān kǒu gāng" t="три цилиндра">三口缸</span> <br />
    <span type="h" p="yī kǒu zhōng" t="одни часы">一口钟</span> <br />
  </div>
  <br/>
  <span type="warn">Используется с:<br/> 1. Количеством членов семьи;<br/> 2. Свиньями;<br/> 3. Сосудами, колоколами.</span>

  <hr/>

  <div type="h" index="4" p="zhī" t="Единица">只</div>

  <div type="example">
    <span type="h" p="yī zhǐ jī" t="одна курица">一只鸡</span> <br />
    <span type="h" p="liǎng zhī xiǎo niǎo" t="две маленькие птички">两只小鸟</span> <br />
    <span type="h" p="yī zhǐ shīzi" t="один лев">一只狮子</span> <br />
    <span type="h" p="liǎng zhī shǒu" t="две руки">两只手</span> <br />
    <span type="h" p="liǎng zhī ěr duǒ" t="двое ушей">两只耳朵</span> <br />
    <span type="h" p="yī zhǐ shūbāo" t="один кошелёк">一只书包</span> <br />
    <span type="h" p="yī zhǐ xiǎochuán" t="одна лодка">一只小船</span> <br />
    <span type="h" p="yī zhī shǒu" t="одна рука">一只手</span> <br />
  </div>
  <br/>
  <span type="warn">Используется с:<br/> 1. Всеми животными и птицами, кроме тех, 
  для которых традиционно употребляются <span fixed="0" type="h" t="" p="pǐ">匹</span>, 
  <span fixed="0" type="h" t="" p="tóu">头</span>, <span fixed="0" type="h" t="" p="fēng">峰</span> 
  и <span fixed="0" type="h" t="" p="tiáo">条</span> <br/>
  2. Парные предметы <br/>
  3. Предметы прямоугольной формы <br/>
  4. Корабли</span>

  <hr/>

    <div type="h" index="5" p="tiáo" t="Полоска, ветка">条</div>

  <div type="example">
    <span type="h" p="yī tiáo xiàn" t="одна полоса">一条线</span> <br />
    <span type="h" p="sān tiáo yú" t="три рыбы">三条鱼</span> <br />
    <span type="h" p="yī tiáo dàhé" t="одна большая река">一条大河</span> <br />
    <span type="h" p="yī tiáo dàjiē" t="одна улица">一条大街</span> <br />
    <span type="h" p="yī tiáo féizào" t="одно мыло">一条肥皂</span> <br />
    <span type="h" p="yī tiáo xiāngyān" t="одна сигарета">一条香烟</span> <br />
    <span type="h" p="yī tiáo miàojì" t="один превосходный план">一条妙计</span> <br />
    <span type="h" p="liǎng tiáo jiànyì" t="два предложения">两条建议</span> <br />
  </div>
  <br/>
  <span type="warn">Используется с:<br/> 
  1. Тонкими, узкими, продолговатыми предметами, для рыбы <br/>
  2. Реками, улицами <br/>
  3. Продолговатыми предметы стандартной формы, размерами <br/>
  4. Абстрактные информационные понятия <br/>
  5. О людях (редкое и очень специфическое употребление)</span>

  <hr/>

  <div type="h" index="6" p="shuāng" t="Пара двух предметов">双</div>

  <div type="example">
    <span type="h" p="yī shuāng píxié" t="одна пара кожаных ботинок">一双皮鞋</span> <br />
    <span type="h" p="yī shuāng ěrhuán" t="одна пара серёжек">一双耳环</span> <br />
    <span type="h" p="yī shuāng shŏu" t="две руки, пара рук">一双手</span> <br />
  </div>
  <br/>
  <span type="warn">Счетное слово для парных предметов, например, ботинок 
  (но не для брюк, как в русском, потому что по факту брюки - это один целостный предмет).</span>

  <hr/>

  <div type="h" index="7" p="liàng" t="Повозка, экипаж">辆</div>

  <div type="example">
    <span type="h" p="yī liàng chē" t="одна повозка (экипаж, автомашина, вагон)">一辆车</span> <br />
    <span type="h" p="yī liàng qìchē" t="один автомобиль">一辆汽车</span> <br />
    <span type="h" p="yī liàng jiàochē" t="один седан">一辆轿车</span> <br />
    <span type="h" p="yī liàng diànchē" t="один трамвай">一辆电车</span> <br />
    <span type="h" p="sān liàng tǎnkè" t="три танка">三辆坦克</span> <br />
  </div>
  <br/>
  <span type="warn">Счётное слово: пара колес; счётное слово повозок, экипажей.</span>

  <hr/>

  <div type="h" index="8" p="zhāng" t="Лист">张</div>

  <div type="example">
    <span type="h" p="yī zhāng zhǐ" t="один лист бумаги">一张纸</span> <br />
    <span type="h" p="yī zhāng dìtú" t="одна карта">一张地图</span> <br />
    <span type="h" p="yī zhāng liǎn" t="одно лицо">一张脸</span> <br />
    <span type="h" p="yī zhāngzuǐ" t="один рот">一张嘴</span> <br />
  </div>
  <br/>
  <span type="warn">Используется с: <br/>1. Листьями чего-л. <br/>
  2. плоскими предметами <br/>3. Лицом, частями лица <br/>4. Луком (оружие)</span>

  <hr/>

  <div type="h" index="9" p="běn" t="Корешёк">本</div>

  <div type="example">
    <span type="h" p="yī běn shū" t="одна книга">一本书</span> <br />
    <span type="h" p="yī běn bǐjìběn" t="один блокнот">一本笔记本</span> <br />
    <span type="h" p="yī běncídiǎn" t="один словарь"> 一本词典</span> <br />
  </div>
  <br/>
  <span type="warn">Книги, документы, т.е. то, что имеет переплет.</span>

  <hr/>

  <div type="h" index="10" p="jiā" t="Семья">家</div>

  <div type="example">
    <span type="h" p="yī jiā rénjiā" t="одна семья">一家人家</span> <br />
    <span type="h" p="liǎng jiā shāngdiàn" t="два магазина">两家商店</span> <br />
  </div>
  <br/>
  <span type="warn">Семьи, фирмы, магазины, заводы.</span>

  <hr/>

  <div type="h" index="11" p="jiàn" t="Предмет, вещь">件</div>

  <div type="example">
    <span type="h" p="yī jiàn chènshān" t="одна рубашка">一件衬衫</span> <br />
    <span type="h" p="yī jiàn dàshì" t="одно важное дело">一件大事</span> <br />
    <span type="h" p="liǎng jiàn jiājù" t="две единицы мебели">两件家具</span> <br />
  </div>
  <br/>
  <span type="warn">Предметы одежды; Дела, события; Мебель, поклажа.</span>

  <hr/>

  <div type="h" index="12" p="kuài" t="Кусок">块</div>

  <div type="example">
    <span type="h" p="yī kuài zhuōbù" t="одна скатерть">一块桌布</span> <br />
    <span type="h" p="yī kuài qiǎokèlì" t="одна плитка шоколада">一块巧克力</span> <br />
    <span type="h" p="liǎng kuài xiāngzào" t="два куска мыла">两块香皂</span> <br />
  </div>
  <br/>
  <span type="warn">Указывает на существительные, не имеющие правильной формы, в виде куска чего-либо 
  (мела, денег, ластиков, мяса), куски, отрезы.</span>

  <hr/>

  <div type="h" index="13" p="jié" t="Сегмент">节</div>

  <div type="example">
    <span type="h" p="sān jié kè" t="три урока">三节课</span> <br />
    <span type="h" p="liǎng jié chēxiāng" t="два вагона">两节车厢</span> <br />
    <span type="h" p="sān jié diànchí" t="три батарейки">三节电池</span> <br />
  </div>
  <br/>
  <span type="warn"> Уроки; Предметы, образующие комплект.</span>

  <hr/>

  <div type="h" index="14" p="tái" t="Платформа, единица">台</div>

  <div type="example">
    <span type="h" p="yī tái xì" t="один спектакль">一台戏</span> <br />
    <span type="h" p="yī tái huàjù" t="одна пьеса">一台话剧</span> <br />
    <span type="h" p="yī tái jīqì" t="одно устройство">一台机器</span> <br />
    <span type="h" p="yī táidiànnǎo" t="один компьютер">一台电脑</span> <br />
  </div>
  <br/>
  <span type="warn"> Акты, действия представлений; Приборы, механизмы.</span>

  <hr/>

  <div type="h" index="15" p="bǎ" t="Рукоятка, пучок">把</div>

  <div type="example">
    <span type="h" p="yī bǎ dāo" t="один нож">一把刀</span> <br />
    <span type="h" p="yī bǎ jiǎnzi" t="одни ножницы">一把剪子</span> <br />
    <span type="h" p="yī bǎ mǐ" t="горсть риса">一把米</span> <br />
    <span type="h" p="yī bǎ huā er" t="пучок цветов">一把花儿</span> <br />
    <span type="h" p="yī bǎ niánlíng" t="один возраст">一把年龄</span> <br />
    <span type="h" p="jiābǎjìn" t="увеличить усилия">加把劲</span> <br />
  </div>
  <br/>
  <span type="warn"> Предметы с ручками (ножи и т.д.); Горсть (как мера); Некоторые абстрактные понятия.</span>

  <hr/>

  <div type="h" index="16" p="zuò" t="Штука">座</div>

  <div type="example">
    <span type="h" p="yī zuò shān" t="одна гора">一座山</span> <br />
    <span type="h" p="yī zuò gāolóu" t="один многоэтажный дом">一座高楼</span> <br />
  </div>
  <br/>
  <span type="warn">Здания, сооружения, детали ландшафта, мосты, горы.</span>

  <hr/>

  <div type="h" index="17" p="zhǒng" t="">种</div>

  <div type="example">
    <span type="h" p="ge zhŏng shù" t="деревья различного вида">各种树</span> <br />
    <span type="h" p="liăng zhŏng rén " t="люди двух категорий">两种人</span> <br />
  </div>
  <br/>
  <span type="warn">Сорт, вид, порода.</span>

  <hr/>

  <div type="h" index="18" p="jù" t="Фраза">句</div>

  <div type="example">
    <span type="h" p="yī jù huà" t="одна фраза">一句话</span> <br />
  </div>
  <br/>
  <span type="warn"> Для счета предложений, фраз, пословиц.</span>

  <hr/>

  <div type="h" index="19" p="tào" t="Набор">套</div>

  <div type="example">
    <span type="h" p="yī tào chájù" t="один чайный сервиз">一套茶具</span> <br />
    <span type="h" p="yī tào fángzi" t="один дом">一套房子</span> <br />
  </div>
  <br/>
  <span type="warn"> Счетное слово для комплектов, наборов (например, посуды), для домов, квартир.</span>

  <hr/>

  <span type="text">Я перечислил далеко не все счетные слова Китайского языка, настоящее их количество вылилось бы в 
  многостранничный каталог. Если вы хотите еще больше углубиться в эту тему, то можете перейти вот по этому адресу:</span> <br/>
  <a href="https://wikihsk.ru/publ/grammatika/hsk_2_ehlementarnaja_grammatika_kitajskogo_jazyka/schjotnye_slova_klassifikatory/3-1-0-123">
    Link ',:)
  </a>

</div>`;

export const countingWordsGlossaryItem5: IGlossaryItem = {
  id: '5',
  url: 'countingWords',
  hsk: '2',
  icon: '1',
  title: 'Счетные слова',
  badges: ['глаголы']
};

export const countingWordsGlossary5: IGlossaryContent = {
  id: '5',
  url: 'countingWords',
  description: 'Счётные слова / Классификаторы / Нумеративы китайского языка',
  title: 'Счетные слова',
  hsk: '2',
  text,
  briefly: [
    {
      id: '1',
      hieroglyph: '个',
      pinyin: 'ge',
      translate: 'Штука',
      examples: ['<span type="h" p="yī ge rén" t="Один человек">一个人</span> <br />']
    },
    {
      id: '2',
      hieroglyph: '位',
      pinyin: 'wèi',
      translate: 'Персона',
      examples: []
    },
    {
      id: '3',
      hieroglyph: '口',
      pinyin: 'kǒu',
      translate: 'Рот',
      examples: []
    },
    {
      id: '4',
      hieroglyph: '只',
      pinyin: 'zhī',
      translate: 'Единица',
      examples: []
    },
    {
      id: '5',
      hieroglyph: '条',
      pinyin: 'tiáo',
      translate: 'Полоска, ветка',
      examples: []
    },
    {
      id: '6',
      hieroglyph: '双',
      pinyin: 'shuāng',
      translate: 'Пара двух предметов',
      examples: []
    },
    {
      id: '7',
      hieroglyph: '辆',
      pinyin: 'liàng',
      translate: 'Повозка, экипаж',
      examples: []
    },
    {
      id: '8',
      hieroglyph: '张',
      pinyin: 'zhāng',
      translate: 'Лист',
      examples: []
    },
    {
      id: '9',
      hieroglyph: '本',
      pinyin: 'běn',
      translate: 'Корешёк',
      examples: []
    },
    {
      id: '10',
      hieroglyph: '家',
      pinyin: 'jiā',
      translate: 'Семья',
      examples: []
    },
    {
      id: '11',
      hieroglyph: '件',
      pinyin: 'jiàn',
      translate: 'Предмет, вещь',
      examples: []
    },
    {
      id: '12',
      hieroglyph: '块',
      pinyin: 'kuài',
      translate: 'Кусок',
      examples: []
    },
    {
      id: '13',
      hieroglyph: '节',
      pinyin: 'jié',
      translate: 'Сегмент',
      examples: []
    },
    {
      id: '14',
      hieroglyph: '台',
      pinyin: 'tái',
      translate: 'Платформа, единица',
      examples: []
    },
    {
      id: '15',
      hieroglyph: '把',
      pinyin: 'bǎ',
      translate: 'Рукоятка, пучок',
      examples: []
    },
    {
      id: '16',
      hieroglyph: '座',
      pinyin: 'zuò',
      translate: 'Штука',
      examples: []
    },
    {
      id: '17',
      hieroglyph: '种',
      pinyin: 'zhǒng',
      translate: 'Вид',
      examples: []
    },
    {
      id: '18',
      hieroglyph: '句',
      pinyin: 'jù',
      translate: 'Фраза',
      examples: []
    },
    {
      id: '19',
      hieroglyph: '套',
      pinyin: 'tào',
      translate: 'Набор',
      examples: []
    }
  ]
};
