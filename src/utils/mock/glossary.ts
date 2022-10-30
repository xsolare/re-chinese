import type { IGlossaryItem, IGlossaryContent } from '#/types/glossary';

export const glossaryItems: IGlossaryItem[] = [
  { id: '1', hsk: '1', icon: '1', text: 'text' },
  { id: '2', hsk: '2', icon: '2', text: 'text' },
  { id: '3', hsk: '3', icon: '3', text: 'text' }
];

const text = `
       <div>
            <p type='tab'>
              Благодаря глаголам, мы узнаем, что происходит. Благодаря модальным глаголам, мы
              показываем наше отношение. «Я плаваю» — не то же самое, что «я умею/могу плавать»,
              «мне следует плавать». Модальные глаголы в китайском языке почти никогда не
              объединяются с существительными. Появляясь в предложении, они притягивают на себя все
              внимание и даже становятся сильнее грамматически, чем все остальные члены предложения.
              Так, например, модальные глаголы не удваиваются, не могут употребляться с
              <span type="h">了</span> <span type="h">着</span> <span type="h">过</span>. Если мы хотим
              задать вопрос с помощью повторения глагола, повторять мы будем именно модальный
              глагол:
            </p>
            <span type="h">你想不想看电影</span> <span type="t">Не хочешь посмотреть фильм?</span> <br/>
            <span type="h">这儿可不可以抽烟</span> <span type="t">Можно ли здесь курить?</span> <br/>

            <br/>
            <p>Давайте рассмотрим их подробнее.</p>
            1. <br/>
            <span type="h">想</span> <span type="p">xiǎng</span> — <span type="t">хотеть, собираться</span> <br/>
            <span type="h">我想喝咖啡</span> - <span type="t">Я хочу выпить кофе.</span> <br/>
            <span type="h">我想去北京旅游</span> - <span type="t">Я хочу (собираюсь) поехать путешествовать в Пекин.</span> <br/>
            <span type="h">不想</span> - <span type="t">Не хочу.</span> <br/>

            <br/>
            <p> • Не путайте с глаголом «думать, хотеть, скучать»:</p>
            <span type="h">我想回家</span> - <span type="t"> Я хочу вернуться домой.</span> <br/>
            <span type="h">想</span> - <span type="t"> модальный глагол, после него стоит глагол.</span> <br/>
            <span type="h">我想家</span> - <span type="t"> Я скучаю по дому.</span> <br/>
            <span type="h">想</span> - <span type="t"> глагол «скучать», после него стоит существительное.</span> <br/>

            <br/>
            <p>
              Кроме того <span type="h">想</span> -прекрасен тем, что перед ним могут стоять слова
              типа <span type="h">很</span> и <span type="h">真</span>
              <span type="t">(Я очень хочу)</span>
            </p>
            <span type="h">我很想买一件漂亮的衣服</span> - <span type="t"> Я очень хочу купить красивой одежды.</span> <br/>
          </div>
`;

// const text = `;
// <div>
// Благодаря глаголам, мы узнаем, что происходит. Благодаря модальным глаголам, мы показываем наше отношение.  «Я плаваю» — не то же самое, что «я умею/могу плавать», «мне следует плавать».

// Модальные глаголы в китайском языке почти никогда не объединяются с существительными. Появляясь в предложении, они притягивают на себя все внимание и даже становятся сильнее грамматически, чем все остальные члены предложения.

// Так, например, модальные глаголы не удваиваются, не могут употребляться с 了, 着 и 过. Если мы хотим задать вопрос с помощью повторения глагола, повторять мы будем именно модальный глагол:

// <span type='h'>你想不想看电影<span/><span t>Не хочешь посмотреть фильм?<span/>

// 这儿可不可以抽烟？Можно ли здесь курить?

// Давайте рассмотрим их подробнее.

// 1. <span h>想</span>  <span p>xiǎng</span> — <span t>хотеть, собираться<span/>

// 我想喝咖啡。Я хочу выпить кофе.
// 我想去北京旅游。 Я хочу (собираюсь) поехать путешествовать в Пекин.
// «Не хочу» — 不想
// Не путайте с глаголом «думать, хотеть, скучать»:

// 我想回家。 Я хочу вернуться домой. 想 — модальный глагол, после него стоит глагол.
// 我想家。 Я скучаю по дому. 想 — глагол «скучать», после него стоит существительное.
// Кроме того, 想 прекрасен тем, что перед ним могут стоять слова типа 很 и 真 (Я очень хочу).

// 我很想买一件漂亮的衣服。 Я очень хочу купить красивой одежды.

// 2. 要 yào — «собираться, нужно»
// Первое его значение- также «собираться». Но, в отличие от 想, говорящий не просто хочет поехать куда-то, но уже запланировал маршрут и купил билет.

// 夏天我想去中国或者法国旅游。 Летом я хочу побывать в Китае или во Франции.
// 下个星期我要去北京，不能参加比赛。 На следующей неделе я уеду в Пекин, не смогу участвовать в соревнованиях.
// Обратите внимание, что часто отрицательные и утвердительные формы модальных глаголов не совпадают по значению. Например, 不要 переводится не «не собираюсь», а жестким запретом «нельзя».

// Поэтому отрицание «не собираюсь» будет использовать более «мягкие» модальные глаголы — 不想，不愿意。

// Второе значение 要 — нужно, должно. Например, «студенты должны учиться», «в еду надо класть соль».

// 我不能跟你们去，我要回家。 Я не могу с вами пойти, мне надо вернуться домой.

// Сказать «не нужно» можно двумя путями:

// 不用 — «нет необходимости».
// 不用送我。 Не надо меня провожать (спасибо, я и сама дойду)
// 不要／别 — запрет
// 不要送我。 Не провожайте меня (я вас не люблю и вообще боюсь).
// Не путайте с глаголом «просить, заказывать / нуждаться в чем-либо».

// 我要一盘宫保鸡丁。- Мне одну порцию курицы Гунбао. 要 — «заказывать», после него стоит существительное.

// 这本汉俄词典我还要，不能还给你。- Этот китайско-русский словарь мне еще нужен, не могу тебе вернуть. 要 — «необходим», к нему относится существительное «словарь».

// В этих значениях «не хочу, не нуждаюсь» будет 不要.

// 我不要咖啡，谢谢。- Спасибо, мне не нужно кофе.

// Сравните с употреблением модального глагола:

// A: 你们大学生要学习数学吗？Вы, студенты, должны учить математику?
// В: 我是个外语系的学生，不用上数学课。Я студент факультета иностранных языков, мне не надо учить математику.

// 3. 能 néng — «мочь». Этот глагол мы используем, когда говорим о возможности что-то сделать (физически или по обстоятельствам)
// 我能开车。  Я могу водить машину (физически — есть 18 лет, не пьяный, руки-ноги на месте).
// 我很忙,不能出去玩儿 。 Я занят, не могу пойти отдохнуть. (нет возможности, ограничивают обстоятельства)

// Также мы можем использовать 能, чтобы спросить разрешения. В таких случаях, в вопросах и отрицаниях ставится 能, а в утверждениях — 可以.

// 老师，我能不能问你几个问题？－ 可以／不能。Учитель, можно задать вам пару вопросов? Можно/ нельзя.

// 4. 可以 kěyǐ  — «можно». Этот глагол используется, когда мы спрашиваем разрешения и  даем советы.

// 可以进来吗？ Можно войти?

// 这个汉字可以这样写。Этот иероглиф можно писать вот так.

// Обратите внимание, что отрицание для 可以 － 不能. Дело в том, что «不可以» — довольно редкая форма, используется для запрета (по общепринятым нормам поведения) или резкого отказа. Не думаю, что человек, спросивший разрешения войти, заслужил эмоциональное «不可以».

// 饭馆里不可以抽烟。 В кафе нельзя курить.

// 5. 会 huì — «уметь». Именно «уметь в результате обучения».

// 我会开车，但是现在我不能开。- Я умею водить машину, но сейчас не могу (устал, например)

// Второе значение глагола 会 — возможность какого-то события.

// 他昨天睡得太晚了，今天不会来上课。- Вчера он так поздно лег спать, не может быть, чтобы он сегодня пришел.

// 6. 应该 yīnggāi — «следует». Обычно используется в советах врачей, учителей, родителей.

// 你应该多睡觉，多喝热水。- Тебе следует побольше спать и пить горячей воды.

// 7. 愿意 yuànyì — «желать».

// Означает сильное желание или готовность что-то сделать.

// 如果他愿意，欢迎他来我的公司工作。- Если он хочет, пусть приходит работать ко мне в фирму.

// 8. 敢 gǎn — «сметь, осмеливаться»

// 我不敢说实话，他会很生气！- Я не осмеливаюсь сказать правду, он так рассердится!

// 我最近牙疼，不敢吃甜的。- Последнее время у меня болят зубы, не могу (не смею) есть сладкое.

// 9. 必须 bìxū — «обязательно следует, необходимо».

// 那个公司的人两点来拿，你必须在两点前做好。- Из той фирмы придут забирать в два часа, тебе необходимо закончить к двум часам!

// Отрицательная форма- 不必 ( или 不用)
// 不必着急，你还有几个小时的时间。- Не нужно волноваться, у тебя еще есть несколько часов.

// 10. 需要 xūyào — «требоваться, нуждаться».

// 面包、水、地图都准备好了，我们还需要带什么？- Я взял хлеб, воду и карту. Что еще необходимо взять с собой?

// 11. 得 děi — «быть должным, иметь необходимость». Менее официальный характер, чем, например, у 必须. Он указывает, что действие надо совершить по объективным (к экзамену надо готовиться) и субъективным (нравственным) причинам.

// 明天有考试，我得准备一下。Завтра экзамен, мне надо подготовиться.

// 姥姥病了，我得去看看她。Бабушка заболела, мне надо ее проведать.

// Обратите внимание, что отрицательная форма здесь тоже 不必(不用) — нет необходимости.

// Вот, собственно, и все, что нужно знать про модальные глаголы. Надеюсь, вы выучите их и сможете использовать в жизни.
// </div>
// `;

export const glossary: IGlossaryContent[] = [{ id: '1', text }];