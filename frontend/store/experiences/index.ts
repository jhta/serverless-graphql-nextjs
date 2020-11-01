import { TActionMap, TReducer } from '../types'
import {
  EXPERIENCES_ACTION_NAMES,
  TExperiencesState,
  TExperiencesPayloads,
  // TSetSelectedExperiencePayload,
} from './types'

export const namespace = 'experiences'

export const initialState: TExperiencesState = {
  selectedExperience: undefined,
  experiences: [],
}

type TActions = TActionMap<
  EXPERIENCES_ACTION_NAMES,
  TExperiencesState,
  TExperiencesPayloads
>

export const actions: TActions = {
  [EXPERIENCES_ACTION_NAMES.SET_SELECTED_EXPERIENCE]: (
    state,
    { payload: { selectedExperience } }
  ) => ({
    ...state,
    selectedExperience,
  }),
  [EXPERIENCES_ACTION_NAMES.ADD_EXPERIENCE]: (
    state,
    { payload: { experience } }
  ) => ({
    ...state,
    experiences: [experience, ...state.experiences],
  }),
}

type TExperienceReducer = TReducer<
  EXPERIENCES_ACTION_NAMES,
  TExperiencesState,
  TExperiencesPayloads
>

export const reducers: TExperienceReducer = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state
