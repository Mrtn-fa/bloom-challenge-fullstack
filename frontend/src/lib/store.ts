import brandSlice from './features/brands/brandsSlice'
import { configureStore } from "@reduxjs/toolkit";


export const makeStore = () => {
  return configureStore({
  reducer: {
    brands: brandSlice,
  }
})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']