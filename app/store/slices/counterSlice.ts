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

        // 下面这三个 reducer 函数会自动生成对应的 action creator 和 action type
        // 例如 increment 的 action type 就是 'counter/increment'
        // 这里我们可以直接修改 state，因为 createSlice 内部使用了 Immer 库，它会帮我们处理不可变更新
        // action creator 的参数会被传递给 reducer 作为 action.payload，例如 incrementByAmount 的参数会成为 action.payload
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