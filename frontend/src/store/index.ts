// import { systemReducer } from './system/reducers'
// import { chatReducer } from './chat/reducers'

// const rootReducer = combineReducers({
//   system: systemReducer,
//   chat: chatReducer
// })

// export type RootState = ReturnType<typeof rootReducer>
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { viewReducer } from './views/reducers'

const rootReducer = combineReducers({viewReducer});
export type RootState  = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: {
    view: viewReducer,

  }
})

