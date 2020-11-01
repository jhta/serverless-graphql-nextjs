import { createContext } from 'react'
import { TStore, TReducer, TAction } from './types'
import { TUIPayloads, TUIState, UI_ACTION_NAMES } from './ui/types'
import {
  TExperiencesPayloads,
  TExperiencesState,
  EXPERIENCES_ACTION_NAMES,
} from './experiences/types'

import * as ui from './ui'
import * as experiences from './experiences'

export type TState = {
  experiences: TExperiencesState
  ui: TUIState
}

export const initialState: TState = {
  ui: ui.initialState,
  experiences: experiences.initialState,
}

const reducers = {
  ui: ui.reducers,
  experiences: experiences.reducers,
}

// export type TMainStore = TStore<TPayloai
type TActionNames = UI_ACTION_NAMES | EXPERIENCES_ACTION_NAMES
type TActionPayloads = TUIPayloads | TExperiencesPayloads

// type TCombinedAction = TAction<TActionNames, TActionPayloads>

const combineReducers = (reducers: any) => (state: any, action: any) =>
  Object.keys(reducers).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: reducers[prop](acc[prop], action),
    }),
    state
  )

export const reducer = combineReducers(reducers)

const Store = createContext<TStore<TActionNames, TState, TActionPayloads>>({
  dispatch: () => {},
  state: initialState,
})

export default Store
