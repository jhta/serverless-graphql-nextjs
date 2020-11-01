import { TState } from 'store'
import { TSelector } from './types'

export const getSelectedExperience: TSelector<TState> = (state) =>
  state.experiences.selectedExperience

export const isOpenModal: TSelector<TState> = (state) => state.ui.modalIsOpen

export const isSelectedCreator = (createdAt: string): TSelector<TState> => (
  state
) => getSelectedExperience(state).createdAt === createdAt