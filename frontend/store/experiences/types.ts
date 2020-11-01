import { IExperience } from 'interfaces/Experience'

export enum EXPERIENCES_ACTION_NAMES {
  'SET_SELECTED_EXPERIENCE' = `experiences/SET_SELECTED_EXPERIENCE`,
  'ADD_EXPERIENCE' = 'experiences/ADD_EXPERIENCE',
}

export type TExperiencesState = {
  selectedExperience?: IExperience
  experiences: IExperience[]
}

export type TSetSelectedExperiencePayload = {
  selectedExperience: IExperience | undefined
}

export type TAddExperiencePayload = {
  experience: IExperience
}

export type TExperiencesPayloads =
  | TSetSelectedExperiencePayload
  | TAddExperiencePayload
