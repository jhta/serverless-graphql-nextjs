import {
  EXPERIENCES_ACTION_NAMES,
  TAddExperiencePayload,
  TSetSelectedExperiencePayload,
} from './types'
import { TAction } from '../types'

type TExperienceAction<P> = (payload: P) => TAction<EXPERIENCES_ACTION_NAMES, P>

export const setExperience: TExperienceAction<TSetSelectedExperiencePayload> = (
  payload
) => ({
  payload,
  type: EXPERIENCES_ACTION_NAMES.SET_SELECTED_EXPERIENCE,
})

export const addExperience: TExperienceAction<TAddExperiencePayload> = (
  payload
) => ({
  payload,
  type: EXPERIENCES_ACTION_NAMES.ADD_EXPERIENCE,
})
