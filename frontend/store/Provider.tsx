import { useReducer } from 'react'
import Store, { reducer, initialState } from './index' 
import { TState } from './types'

type TStoreProviderProps = {
  children: any 
  initialState?: TState 
}

const StoreProvider = ({ children, initialState: pageInitialState }: TStoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, pageInitialState || initialState)
  const store = { state, dispatch }
  return (
    <Store.Provider value={store}>
      {children}
    </Store.Provider>
  )
}

export default StoreProvider
