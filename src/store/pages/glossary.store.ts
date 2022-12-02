import type { IGlossaryBase } from '#/types/glossary';
import { action, makeObservable, observable } from 'mobx';

export enum Sections {
  Main = '',
  Briefly = 'briefly',
  Tester = 'tester'
}

interface IGlossaryStoreState {
  section: Sections;
  glossaryBase: IGlossaryBase;
}

//* --- Store --------------------------------------------------------------------------------- *//
export default class GlossaryStore {
  state = {
    section: '',
    glossaryBase: {} as IGlossaryBase
  } as IGlossaryStoreState;

  constructor() {
    makeObservable(this, {
      // ~ action
      setOnceGlossaryBase: action,
      setSection: action
    });

    makeObservable(this.state, {
      // ~ observable
      glossaryBase: observable,
      section: observable
    });
  }

  setSection = (section: Sections) => (this.state.section = section);

  setOnceGlossaryBase = (glossaryBase: IGlossaryBase, url: Sections) => {
    if (!this.state.glossaryBase?.id) {
      this.state.glossaryBase = glossaryBase;
      this.setSection(url);
    }
  };
}
