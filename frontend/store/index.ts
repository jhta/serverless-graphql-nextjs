import { IExperience } from 'interfaces/Experience'
import { createContext } from 'react'
import { TState, TActionMap, TStore, ACTION_NAMES, TReducer } from './types'

export const initialState: TState = {
  selectedExperience: undefined,
}

type TSetSelectedExperiencePayload = {
  selectedExperience: IExperience | undefined
}

type TPayloads = TSetSelectedExperiencePayload

const actions: TActionMap<TPayloads> = {
  [ACTION_NAMES.SET_SELECTED_EXPERIENCE]: (
    state,
    { payload: { selectedExperience } }
  ) => ({
    ...state,
    selectedExperience,
  }),
}

export type TMainStore = TStore<TPayloads>

export const reducer: TReducer<TPayloads> = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state

const Store = createContext<TStore<TPayloads>>({
  dispatch: () => {},
  state: initialState,
})

export default Store
