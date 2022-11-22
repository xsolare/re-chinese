import type { IHieroglyph } from '#/types/hieroglyph';
import type { FC } from 'react';
import type { CheckboxStore } from '#/components/xsolare';
import { observer } from 'mobx-react-lite';
import { HieroglyphKeysStore } from '#/components/hieroglyph/hieroglyph-keys/hieroglyph-keys.store';
import { HieroglyphKeysControl, HieroglyphKeysList } from './hieroglyph-keys.style';
import { useNewStore } from '#/components/xsolare/helpers';
import HieroglyphKey from './key-item/key-item';
import React from 'react';
import { Checkbox } from '#/components/xsolare';

//* Components

//* Styles

interface IHieroglyphKeyProps {
  hieroglyphKeys: IHieroglyph[];
}

// HieroglyphKeys component
//* ------------------------------------------------------------------------------------------ *//
const HieroglyphKeys: FC<IHieroglyphKeyProps> = (props) => {
  const { hieroglyphKeys } = props;

  const store = useNewStore(HieroglyphKeysStore);
  const { formStore, state } = store;

  return (
    <>
      <HieroglyphKeysControl>
        <Checkbox store={formStore.getStore<CheckboxStore>('isPinyin')} />
        <Checkbox store={formStore.getStore<CheckboxStore>('isTranslate')} />
      </HieroglyphKeysControl>
      <HieroglyphKeysList>
        {hieroglyphKeys.map((h) => (
          <HieroglyphKey key={h.id} hieroglyph={h} {...state} />
        ))}
      </HieroglyphKeysList>
    </>
  );
};

export default observer(HieroglyphKeys);
