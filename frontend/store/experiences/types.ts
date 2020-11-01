import { IExperience } from 'interfaces/Experience'

export enum EXPERIENCES_ACTION_NAMES {
  'SET_SELECTED_EXPERIENCE' = `experiences/SET_SELECTED_EXPERIENCE`,
}

export type TExperiencesState = {
  selectedExperience?: IExperience
}

export type TSetSelectedExperiencePayload = {
  selectedExperience: IExperience | undefined
}

export type TExperiencesPayloads = TSetSelectedExperiencePayload
