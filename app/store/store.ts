import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import studentReducer from './slices/StudentSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        student: studentReducer
    },
})

// 这两行是 TypeScript 类型推导，后面 useSelector 会用到
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch