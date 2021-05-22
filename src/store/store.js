import { configureStore } from '@reduxjs/toolkit'

import detailsReducer from './reducers/detailsSlice'

const store = configureStore({
  reducer: {
    details: detailsReducer
  }
})

export default store;