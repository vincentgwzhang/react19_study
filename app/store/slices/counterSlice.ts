import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',           // 这个 name 会成为 action type 的前缀
    initialState,
    reducers: {
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        },
    },
})

// 导出 action creators（自动生成的）
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// 导出 reducer（给 store 用）
export default counterSlice.reducer