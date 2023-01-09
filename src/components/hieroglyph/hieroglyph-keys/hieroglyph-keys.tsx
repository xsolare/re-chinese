import type { CheckboxStore } from '#/components/xsolare';
import type { IHieroglyph } from '#/types/hieroglyph';
import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { HieroglyphKeysStore } from '#/components/hieroglyph/hieroglyph-keys/hieroglyph-keys.store';
import { Checkbox } from '#/components/xsolare';
import { useNewStore } from '#/components/xsolare/helpers';
import { HieroglyphKeysControl, HieroglyphKeysList } from './hieroglyph-keys.style';
import HieroglyphKey from './key-item/key-item';

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
