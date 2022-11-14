// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { IHieroglyph } from '#/types/hieroglyph';
import { randomNum } from '#/utils/helpers';
import { action, makeObservable, observable, computed } from 'mobx';

interface IKeysTesterState {
  answers: IHieroglyphAnswer[];
  answersOptions: IHieroglyph[];
  question: IHieroglyph;
  isAnswered: boolean;
}

interface IHieroglyphAnswer {
  question: IHieroglyph;
  answer: IHieroglyph;
  options: IHieroglyph[];
  isCorrect: boolean;
}

export class KeysTesterStore {
  hieroglyphKeys: IHieroglyph[] = [];

  state = {
    answers: [],
    answersOptions: [],
    question: {} as IHieroglyph,
    isAnswered: false
  } as IKeysTesterState;

  constructor(hieroglyphKeys: IHieroglyph[]) {
    this.hieroglyphKeys = hieroglyphKeys;

    this.reloadQuestion();

    makeObservable(this.state, {
      answers: observable,
      answersOptions: observable,
      question: observable,
      isAnswered: observable
    });

    makeObservable(this, {
      handleAnswer: action,
      reloadQuestion: action,
      score: computed,
      lastAnswer: computed
    });
  }

  reloadQuestion = () => {
    console.log('reloadQuestion');
    this.state.answersOptions = [];

    for (let i = 0; i < 4; i += 1) {
      let indexAnswer = randomNum(0, this.hieroglyphKeys.length - 1);

      // eslint-disable-next-line @typescript-eslint/no-loop-func
      while (this.state.answersOptions.find((a) => a.id === this.hieroglyphKeys[indexAnswer].id)) {
        indexAnswer = randomNum(0, this.hieroglyphKeys.length - 1);
      }
      this.state.answersOptions.push(this.hieroglyphKeys[indexAnswer]);
      this.state.question = this.state.answersOptions[randomNum(0, 4)];
    }

    this.state.isAnswered = false;
  };

  handleAnswer = (givenAnswer: IHieroglyph) => {
    console.log('handleAnswer');
    if (this.state.isAnswered) return;

    this.state.isAnswered = true;

    const answer: IHieroglyphAnswer = {
      answer: givenAnswer,
      question: this.state.question,
      options: this.state.answersOptions,
      isCorrect: givenAnswer.id === this.state.question.id
    };
    this.state.answers.push(answer);

    setTimeout(() => {
      this.reloadQuestion();
    }, 1000);
  };

  get score() {
    return this.state.answers.reduce(
      (acc, a) => {
        if (a.isCorrect) acc.correct += 1;
        else acc.wrong += 1;
        return acc;
      },
      { correct: 0, wrong: 0 }
    );
  }

  get lastAnswer(): IHieroglyphAnswer {
    return this.state.answers[this.state.answers.length - 1];
  }
}
