import { setupFormStores } from '#/components/xsolare/helpers';
import { isWindowExists } from '#/utils/helpers';
import { makeObservable, observable } from 'mobx';
import { CheckboxStore, FormStore } from '#/components/xsolare';

interface IHieroglyphKeysStoreForm {
  isPinyin: boolean;
  isTranslate: boolean;
}

export class GlossaryBrieflyStore {
  formStore = new FormStore({ name: 'control' });

  state = {
    isPinyin: false,
    isTranslate: false
  } as IHieroglyphKeysStoreForm;

  constructor() {
    const isPinyinDefault = isWindowExists()
      ? localStorage?.getItem('__isPinyin__') !== 'false'
      : false;
    const isTranslateDefault = isWindowExists()
      ? localStorage?.getItem('__isTranslate__') !== 'false'
      : false;

    this.state = {
      isPinyin: isPinyinDefault,
      isTranslate: isTranslateDefault
    };

    const formStores = [
      new CheckboxStore({
        name: 'isPinyin',
        label: 'Показать пиньин',
        labelActive: 'Скрыть пиньин',
        defaultValue: isPinyinDefault,
        onClick: () => {
          this.state.isPinyin = !this.state.isPinyin;
          localStorage.setItem('__isPinyin__', this.state.isPinyin.toString());
        }
      }),
      new CheckboxStore({
        name: 'isTranslate',
        label: 'Показать перевод',
        labelActive: 'Скрыть перевод',
        defaultValue: isTranslateDefault,
        onClick: () => {
          this.state.isTranslate = !this.state.isTranslate;
          localStorage.setItem('__isTranslate__', this.state.isTranslate.toString());
        }
      })
    ];

    setupFormStores(formStores, this.formStore);

    makeObservable(this.state, {
      isPinyin: observable,
      isTranslate: observable
    });
  }
}
