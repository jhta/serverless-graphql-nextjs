import {
  EXPERIENCES_ACTION_NAMES,
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
