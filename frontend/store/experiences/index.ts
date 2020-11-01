import { TActionMap, TReducer } from '../types'
import {
  EXPERIENCES_ACTION_NAMES,
  TExperiencesState,
  TExperiencesPayloads,
} from './types'

export const namespace = 'experiences'

export const initialState: TExperiencesState = {
  selectedExperience: undefined,
}

export const actions: TActionMap<
  EXPERIENCES_ACTION_NAMES,
  TExperiencesState,
  TExperiencesPayloads
> = {
  [EXPERIENCES_ACTION_NAMES.SET_SELECTED_EXPERIENCE]: (
    state,
    { payload: { selectedExperience } }
  ) => ({
    ...state,
    selectedExperience,
  }),
}

export const reducers: TReducer<
  EXPERIENCES_ACTION_NAMES,
  TExperiencesState,
  TExperiencesPayloads
> = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state
