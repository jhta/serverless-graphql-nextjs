import { createContext } from 'react'
import { TStore } from './types'
import { TUIPayloads, TUIState, UI_ACTION_NAMES } from './ui/types'
import { combineReducers } from './utils'

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

export type TActionNames = UI_ACTION_NAMES | EXPERIENCES_ACTION_NAMES
export type TActionPayloads = TUIPayloads | TExperiencesPayloads | undefined

export const initialState: TState = {
  [ui.namespace]: ui.initialState,
  [experiences.namespace]: experiences.initialState,
}

const reducers = {
  [ui.namespace]: ui.reducers,
  [experiences.namespace]: experiences.reducers,
}

export const reducer = combineReducers(reducers)

const Store = createContext<TStore<TActionNames, TState, TActionPayloads>>({
  dispatch: () => {},
  state: initialState,
})

export default Store
