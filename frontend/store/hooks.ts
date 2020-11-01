import React from 'react'
import Store, { TState, TActionNames, TActionPayloads } from './index'
import { TSelector, TAction } from './types'

export function useSelect(selector: TSelector<TState>) {
  const { state } = React.useContext(Store)
  return selector(state)
}

export const useDispatch = (action: TAction<TActionNames, TActionPayloads>) => {
  const { dispatch } = React.useContext(Store)

  return () => dispatch(action)
}
