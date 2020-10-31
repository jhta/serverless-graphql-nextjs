import { IExperience } from 'interfaces/Experience'

export enum ACTION_NAMES {
  'SET_SELECTED_EXPERIENCE' = 'SET_SELECTED_EXPERIENCE',
}

export type TState = {
  selectedExperience?: IExperience
}

export type TAction<T> = {
  type: ACTION_NAMES
  payload: T
}

export type TReducer<T> = (state: TState, action: TAction<T>) => TState

export type TActionMap<T> = {
  [key: string]: TReducer<T>
}

export type TStore<T> = {
  dispatch: (action: TAction<T>) => void
  state: TState
}
