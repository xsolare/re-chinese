import { FormStore } from '#/components/xsolare/components/form/form.store';
import { setupFormStores } from '#/components/xsolare/helpers';
import { makeObservable, observable, action } from 'mobx';
import { CheckboxStore } from '../../xsolare/components/checkbox/checkbox.store';

interface IHieroglyphKeysStoreForm {
  isPinyin: boolean;
  isTranslate: boolean;
}

export class HieroglyphKeysStore {
  formStore = new FormStore({ name: 'control' });

  state = {
    isPinyin: false,
    isTranslate: false
  } as IHieroglyphKeysStoreForm;

  constructor() {
    const formStores = [
      new CheckboxStore({
        name: 'isPinyin',
        label: 'Показать пиньин',
        labelActive: 'Скрыть пиньин',
        onClick: () => this.setValues()
      }),
      new CheckboxStore({
        name: 'isTranslate',
        label: 'Показать перевод',
        labelActive: 'Скрыть перевод',
        onClick: () => this.setValues()
      })
    ];

    setupFormStores(formStores, this.formStore);

    makeObservable(this, {
      setValues: action
    });

    makeObservable(this.state, {
      isPinyin: observable,
      isTranslate: observable
    });
  }

  setValues = () => {
    this.state = this.formStore.getValues<IHieroglyphKeysStoreForm>();
  };
}
