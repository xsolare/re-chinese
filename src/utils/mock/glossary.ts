import type { IGlossaryItem, IGlossaryContent } from '#/types/glossary';

export const glossaryItems: IGlossaryItem[] = [
  {
    id: '1',
    hsk: '1',
    icon: '1',
    title: 'Модальные глаголы',
    badges: []
  }
];

const text = `
<div>
  <p type="tab">
    Благодаря глаголам, мы узнаем, что происходит. Благодаря модальным глаголам, мы показываем наше отношение. «Я плаваю» — не то же самое,
    что «я умею/могу плавать», «мне следует плавать». Модальные глаголы в китайском языке почти никогда не объединяются с существительными.
    Появляясь в предложении, они притягивают на себя все внимание и даже становятся сильнее грамматически, чем все остальные члены
    предложения. Так, например, модальные глаголы не удваиваются, не могут употребляться с
    <span type="h" pinyin="le">了</span><span type="h" pinyin="zhe">着</span><span type="h" pinyin="guò">过</span>. Если мы хотим задать вопрос с помощью повторения глагола,
    повторять мы будем именно модальный глагол:
  </p>
  <span type="h" p="nǐ xiǎng bù xiǎng kàn diànyǐng" t="Не хочешь посмотреть фильм?">你想不想看电影</span> <br />
  <span type="h" p="zhèér kěbùkěyǐ chōuyān" t="Можно ли здесь курить?">这儿可不可以抽烟</span> <br />

  <br />

  <div type="h" index="1" p="xiǎng" t="хотеть, собираться">想</div>

  <div type="example">
    <span type="h" p="wǒ xiǎng hē kāfēi" t="Я хочу выпить кофе.">我想喝咖啡</span> <br />
    <span type="h" p="wǒ xiǎng qù běijīng lǚyóu" t="Я хочу (собираюсь) поехать путешествовать в Пекин">我想去北京旅游</span>
    <span type="h" p="bù xiǎng" t="Не хочу">不想</span> <br />
  </div>
  <br />
  <p type="warn">
    <em>Не путайте с глаголом «думать, хотеть, скучать»:</em> <br />
    <span type="h" p="wǒ xiǎng huíjiā" t="Я хочу вернуться домой.">我想回家</span> <span type="h" p="xiǎng" t="модальный глагол, после него стоит глагол.">想</span> <br />
    <span type="h" p="wǒ xiǎng jiā" t="Я скучаю по дому.">我想家</span> <span type="h" p="xiǎng" t="глагол «скучать», после него стоит существительное.">想</span> <br />
  </p>
  <br />
  <br />
  <p>
    Кроме того <span type="h" p="xiǎng">想</span> -прекрасен тем, что перед ним могут стоять слова типа <span type="h" p="hěn">很</span> и
    <span type="h" p="zhēn">真</span> <span>(Я очень хочу)</span>
  </p>
  <span type="h" pinyin="wǒ hěn xiǎng mǎi yī jiàn piāoliàng de yīfú">我很想买一件漂亮的衣服</span> - <span type="t"> Я очень хочу купить красивой одежды.</span> <br />

  <br />
  <br />
  <br />

  <div type="h" index="2" p="yào" t="собираться, нужно">要</div>
  <p>
    Первое его значение- также «собираться». Но, в отличие от <span type="h" p="xiǎng">想</span>, говорящий не просто хочет поехать куда-то, но уже запланировал маршрут и
    купил билет.
  </p>
  <br />

  <div type="example">
    <span type="h" p="xiàtiān wǒ xiǎng qù zhōngguó huòzhě fǎguó lǚyóu" t="Летом я хочу побывать в Китае или во Франции.">夏天我想去中国或者法国旅游</span> <br />
    <span type="h" p="xià gè xīngqī wǒ yào qù běijīng，bùnéng cānjiā bǐsài" t="На следующей неделе я уеду в Пекин, не смогу участвовать в соревнованиях">下个星期我要去北京，不能参加比赛</span> <br />
  </div>

  <br />
  <p>
    Обратите внимание, что часто отрицательные и утвердительные формы модальных глаголов не совпадают по значению. Например,  <span type="h" pinyin="bùyào">不要</span>
    переводится не «не собираюсь», а жестким запретом «нельзя». Поэтому отрицание «не собираюсь» будет использовать более «мягкие» модальные
    глаголы — <span type="h" p="bù xiǎng，bù yuànyì">不想，不愿意</span> Второе значение <span type="h" p="yào">要</span> — нужно, должно. Например, «студенты должны
    учиться», «в еду надо класть соль».
  </p>
  <div type="example">
    <span type="h" p="wǒ bùnéng gēn nǐmen qù，wǒ yào huíjiā" t="не могу с вами пойти, мне надо вернуться домой.">我不能跟你们去，我要回家</span> <br />
  </div>

  <br />
  <p>Сказать «не нужно» можно двумя путями:</p>
  <div type="example">
    <span type="h" p="bùyòng" t="Нет необходимости.">不用</span> <br />
    <span type="h" p="bùyòng sòng wǒ" t="Не надо меня провожать (спасибо, я и сама дойду).">不用送我</span> <br />
    <span type="h" p="bùyào／bié" t="Запрет.">不要／别</span> <br />
    <span type="h" p="bùyào sòng wǒ" t="Не провожайте меня (я вас не люблю и вообще боюсь).">不要送我</span> <br />
  </div>

  <br />
  <p type="warn">
    <em>Не путайте с глаголом «просить, заказывать / нуждаться в чем-либо»:</em> <br />
    <span type="h" p="wǒ yào yī pán gōngbǎojī dīng" t="не одну порцию курицы Гунбао.">我要一盘宫保鸡丁</span> <span type="h" p="yào">要</span> «заказывать», после него стоит существительное. <br />
    <span type="h" p="zhè běn hàné cídiǎn wǒ huán yào，bùnéng huángěi nǐ" t="тот китайско-русский словарь мне еще нужен, не могу тебе вернуть.">这本汉俄词典我还要，不能还给你</span> <span type="h" p="yào">要</span> - «необходим», к нему относится существительное «словарь».<br />
  </p>

  <p>В этих значениях «не хочу, не нуждаюсь» будет <span type="h" p="bùyào">不要</span></p>
  <span type="h" p="wǒ bùyào kāfēi，xièxiè" t="Спасибо, мне не нужно кофе.">我不要咖啡，谢谢</span> <br />

  <br />
  <p>
    <em>Сравните с употреблением модального глагола:</em> <br />
    A: <span type="h" pinyin="nǐmen dàxuéshēng yào xuéxí shùxué mǎ" t="Вы, студенты, должны учить математику?">你们大学生要学习数学吗?</span> <br />
    B: <span type="h" pinyin="wǒ shì gè wàiyǔxì de xuéshēng，bù yòngshàng shùxué kè" t="Я студент факультета иностранных языков, мне не надо учить математику.">我是个外语系的学生，不用上数学课</span> <br />
  </p>

  <br />
  <br />
  <br />
  
  <div type="h" index="3" p="néng" t="мочь">能</div>
  <p>Этот глагол мы используем, когда говорим о возможности что-то сделать (физически или по обстоятельствам)</p>
  <br />
  <div type="example">
    <span type="h" p="wǒ néng kāichē" t="Я могу водить машину">我能开车</span> (физически — есть 18 лет, не пьяный, руки-ноги на месте) <br />
    <span type="h" p="wǒ hěn máng,bùnéng chūqù wánér" t="Я занят, не могу пойти отдохнуть.">我很忙,不能出去玩儿</span> (нет возможности, ограничивают обстоятельства) <br />
  </div>
  <p>Также мы можем использовать <span type="h" p="néng">能</span>, чтобы спросить разрешения. В таких случаях, в вопросах и отрицаниях ставится <span type="h" p="néng">能</span>, а в утверждениях — <span type="h" p="kěyǐ">可以</span></p>
  <div type="example">
    <span type="h" p="lǎoshī，wǒ néngbùnéng wèn nǐ jǐ gè wèntí?－ kěyǐ／bùnéng" t="Учитель, можно задать вам пару вопросов? Можно/ нельзя.">老师，我能不能问你几个问题?－ 可以／不能</span> <br />
  </div>

  <br />
  <br />
  <br />
  
  <div type="h" index="4" p="kěyǐ" t="мочь">可以</div>
  <p>Этот глагол используется, когда мы спрашиваем разрешения и  даем советы.</p>
  <div type="example">
    <span type="h" p="kěyǐ jìnlái mǎ" t="Можно войти?">可以进来吗?</span>  <br />
    <span type="h" p="zhè gè hànzì kěyǐ zhèyàng xiě" t="Этот иероглиф можно писать вот так.">这个汉字可以这样写</span>  <br />
  </div>
  <p>Обратите внимание, что отрицание для <span type="h" p="kěyǐ － bùnéng">可以 － 不能</span>. 
  Дело в том, что <span type="h" p="bùkěyǐ">不可以</span> - довольно редкая форма, используется для запрета (по общепринятым нормам поведения) или резкого отказа. 
  Не думаю, что человек, спросивший разрешения войти, заслужил эмоциональное <span type="h" p="bùkěyǐ">不可以</span>
  <div type="example">
    <span type="h" p="fànguǎn lǐ bùkěyǐ chōuyān" t="В кафе нельзя курить.">饭馆里不可以抽烟</span>  <br />
  </div>

  <br />
  <br />
  <br />
  
  <div type="h" index="5" p="huì" t="уметь">会</div>
  <p>Именно «уметь в результате обучения».</p>
  <div type="example">
    <span type="h" p="wǒ huì kāichē，dànshì xiànzài wǒ bùnéng kāi" t="Я умею водить машину, но сейчас не могу (устал, например).">我会开车，但是现在我不能开</span>  <br />
  </div>

  <br />
  <p>Второе значение глагола <span type="h" p="huì">会</span> - возможность какого-то события.</p>
  <div type="example">
    <span type="h" p="tā zuótiān shuì dé tàiwǎn liǎo，jīntiān bùhuì lái shàngkè" t="Вчера он так поздно лег спать, не может быть, чтобы он сегодня пришел.">他昨天睡得太晚了，今天不会来上课</span>  <br />
  </div>

  <br />
  <br />
  <br />
  
  <div type="h" index="6" p="yīnggāi" t="следует">应该</div>
  <p>Обычно используется в советах врачей, учителей, родителей.</p>
  <div type="example">
    <span type="h" p="nǐ yìnggāi duō shuìjué，duō hē rè shuǐ" t="Тебе следует побольше спать и пить горячей воды.">我会开车，但是现在我不能开</span> <br />
  </div>

  <br />
  <br />
  <br />
  
  <div type="h" index="7" p="yuànyì" t="желать">愿意</div>
  <p>Означает сильное желание или готовность что-то сделать.</p>
  <div type="example">
    <span type="h" p="rúguǒ tā yuànyì，huānyíng tā lái wǒ de gōngsī gōngzuò" t="Если он хочет, пусть приходит работать ко мне в фирму.">如果他愿意，欢迎他来我的公司工作</span> <br />
  </div>

  <br />
  <br />
  <br />
  
  <div type="h" index="8" p="gǎn" t="сметь, осмеливаться">敢</div>
  <p>Означает сильное желание или готовность что-то сделать.</p>
  <div type="example">
    <span type="h" p="wǒ bù gǎn shuō shíhuà，tā huì hěn shēngqì" t="Я не осмеливаюсь сказать правду, он так рассердится!">我不敢说实话，他会很生气!</span> <br />
    <span type="h" p="wǒ zuìjìn yá téng，bù gǎn chī tián de" t="Последнее время у меня болят зубы, не могу (не смею) есть сладкое.">我最近牙疼，不敢吃甜的</span> <br />
  </div>

  <br />
  <br />
  <br />
  
  <div type="h" index="9" p="bìxū" t="обязательно следует, необходимо">必须</div>
  <p>Означает сильное желание или готовность что-то сделать.</p>
  <div type="example">
    <span type="h" p="nà gè gōngsī de rén liǎng diǎn lái ná，nǐ bìxū zài liǎngdiǎn qián zuòhǎo" t="Из той фирмы придут забирать в два часа, тебе необходимо закончить к двум часам!">那个公司的人两点来拿，你必须在两点前做好</span> <br />
  </div>
  <p>Отрицательная форма - <span type="h" p="bùbì">不必</span> или <span type="h" p="bùyòng">不用</span> </p>
  <div type="example">
    <span type="h" p="bùbì zhejí，nǐ huán yǒu jǐ gè xiǎoshí de shíjiān" t="Не нужно волноваться, у тебя еще есть несколько часов.">不必着急，你还有几个小时的时间</span> <br />
  </div>

  <br />
  <br />
  <br />
  
  <div type="h" index="10" p="xūyào" t="требоваться, нуждаться">需要</div>
  <div type="example">
    <span type="h" p="miànbāo, shuǐ, dìtú dū zhǔnbèihǎo liǎo，wǒmen huán xūyào dài shíme" t="Я взял хлеб, воду и карту. Что еще необходимо взять с собой?">面包、水、地图都准备好了，我们还需要带什么?</span> <br />
  </div>

  <br />
  <br />
  <br />
  
  <div type="h" index="11" p="děi" t="быть должным, иметь необходимость">得</div>
  <p>Менее официальный характер, чем, например, у 必须. Он указывает, что действие надо совершить по объективным (к экзамену надо готовиться) и субъективным (нравственным) причинам.</p>
  <div type="example">
    <span type="h" p="miànbāo, shuǐ, dìtú dū zhǔnbèihǎo liǎo，wǒmen huán xūyào dài shíme" t="Я взял хлеб, воду и карту. Что еще необходимо взять с собой?">面包、水、地图都准备好了，我们还需要带什么?</span> <br />
    <span type="h" p="míngtiān yǒu kǎoshì，wǒ dé zhǔnbèi yīxià" t="Завтра экзамен, мне надо подготовиться.">明天有考试，我得准备一下</span> <br />
    <span type="h" p="lǎolǎo bìng liǎo，wǒ dé qù kànkàn tā" t="Бабушка заболела, мне надо ее проведать.">姥姥病了，我得去看看她</span> <br />
  </div>

  <p type="warn">
    Обратите внимание, что отрицательная форма здесь тоже <span type="h" p="bùbì(bùyòng)">不必(不用)</span> — нет необходимости.
  </p>

</div>
`;

export const glossary: IGlossaryContent[] = [
  {
    id: '1',
    title: 'Модальные глаголы',
    hsk: 1,
    text,
    briefly: [
      {
        id: '1',
        hieroglyph: '想',
        pinyin: 'xiǎng',
        translate: 'хотеть, собираться'
      },
      {
        id: '2',
        hieroglyph: '要',
        pinyin: 'yào',
        translate: 'собираться, нужно'
      },
      {
        id: '3',
        hieroglyph: '能',
        pinyin: 'néng',
        translate: 'мочь'
      },
      {
        id: '4',
        hieroglyph: '可以',
        pinyin: 'kěyǐ',
        translate: 'мочь'
      },
      {
        id: '5',
        hieroglyph: '会',
        pinyin: 'huì',
        translate: 'уметь'
      },
      {
        id: '6',
        hieroglyph: '应该',
        pinyin: 'yīnggāi',
        translate: 'следует'
      },
      {
        id: '7',
        hieroglyph: '愿意',
        pinyin: 'yuànyì',
        translate: 'желать'
      },
      {
        id: '8',
        hieroglyph: '敢',
        pinyin: 'gǎn',
        translate: 'сметь, осмеливаться'
      },
      {
        id: '9',
        hieroglyph: '必须',
        pinyin: 'bìxū',
        translate: 'обязательно следует, необходимо'
      },
      {
        id: '10',
        hieroglyph: '需要',
        pinyin: 'xūyào',
        translate: 'требоваться, нуждаться'
      },
      {
        id: '11',
        hieroglyph: '得',
        pinyin: 'děi',
        translate: 'быть должным, иметь необходимость'
      }
    ]
  }
];
