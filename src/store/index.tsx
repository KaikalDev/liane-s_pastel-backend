import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'

export const Store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export type RootRecducer = ReturnType<typeof Store.getState>
