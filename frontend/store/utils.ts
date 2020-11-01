export const combineReducers = (reducers: any) => (state: any, action: any) =>
  Object.keys(reducers).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: reducers[prop](acc[prop], action),
    }),
    state
  )
