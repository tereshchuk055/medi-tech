import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { news } from './slices/news'
import { users } from './slices/users'
import { auth } from './slices/auth'
import { appointments } from './slices/appoitment'

const rootReducer = combineReducers({
    news: news,
    users: users,
    auth: auth,
    appoitments: appointments
})

export const store = configureStore({
    reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
