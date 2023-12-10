import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { news } from './slices/news'
import { employees } from './slices/employees'

const rootReducer = combineReducers({
    news: news,
    employees: employees
})

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
