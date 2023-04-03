import type {
  IBaseParams,
  IBaseStoreParams,
  IBaseValidator
} from '#/components/xsolare/components/base.store'
import { BaseStore } from '#/components/xsolare/components/base.store'
import { ControlStore } from '#/components/xsolare/components/control.store'

export interface IFormValidatorExtended extends IBaseValidator {
  func?: (store: FormStore) => boolean
}

interface IFormStoreParamsExtended {
  validators?: IFormValidatorExtended[]
}

export interface IFormStoreParams
  extends Omit<IBaseParams, 'isVisible'>,
    IFormStoreParamsExtended {}

export class FormStore extends BaseStore {
  constructor(props: IFormStoreParams) {
    super(props as IBaseStoreParams)
  }

  setValues = <T>(values: T): void => {
    Array.from(this._childStores.values()).forEach((_store) => {
      const store = _store as ControlStore<unknown>
      store.setValue?.(values[store.name])
    })
  }

  getValues = <T>(): T => {
    const values = {}
    this._childStores.forEach((value, key) => {
      if (value instanceof ControlStore) {
        const storeValue = (value as ControlStore<unknown>).getValue()
        if (storeValue !== undefined) {
          values[key] = storeValue
        }
      }
    })
    return values as T
  }

  getControlStores = (): BaseStore[] =>
    Array.from(this._childStores.values()).filter((store) => store instanceof ControlStore)
}
