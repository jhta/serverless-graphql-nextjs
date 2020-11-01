export type TAction<T, P> = {
  type: T
  payload?: P
}

export type TReducer<T, S, P> = (state: S, action: TAction<T, P>) => S

export type TActionMap<T, S, P> = {
  [key: string]: TReducer<T, S, P>
}

export type TStore<T, S, P> = {
  dispatch: (action: TAction<T, P>) => void
  state: S
}

export type TSelector<S> = (state: S) => any

export type TSelectorMap<S> = {
  [key: string]: TSelector<S>
}
