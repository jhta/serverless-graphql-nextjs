import { TUIPayloads, UI_ACTION_NAMES } from './types'
import { TAction } from '../types'

type TUIAction<P> = (payload?: P) => TAction<UI_ACTION_NAMES, P>

export const hideModal: TUIAction<TUIPayloads> = () => ({
  payload: undefined,
  type: UI_ACTION_NAMES.HIDE_MODAL,
})

export const showModal: TUIAction<TUIPayloads> = () => ({
  payload: undefined,
  type: UI_ACTION_NAMES.SHOW_MODAL,
})
