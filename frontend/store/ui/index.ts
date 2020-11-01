import { TActionMap, TReducer } from '../types'
import { TUIState, TUIPayloads, UI_ACTION_NAMES } from './types'

export const initialState: TUIState = {
  modalIsOpen: false,
}

export const actions: TActionMap<UI_ACTION_NAMES, TUIState, TUIPayloads> = {
  [UI_ACTION_NAMES.SHOW_MODAL]: () => ({
    modalIsOpen: true,
  }),
  [UI_ACTION_NAMES.HIDE_MODAL]: () => ({
    modalIsOpen: false,
  }),
}

export const reducers: TReducer<UI_ACTION_NAMES, TUIState, TUIPayloads> = (
  state = initialState,
  action
) => (actions[action.type] ? actions[action.type](state, action) : state)

export const namespace = 'ui'
