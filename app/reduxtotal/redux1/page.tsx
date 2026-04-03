'use client'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { increment, decrement, incrementByAmount } from '../../store/slices/counterSlice'

export default function Redux1() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Redux 计数器</h1>

      <p className="text-4xl font-mono">{count}</p>

      <div className="space-x-2">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -1
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +10
        </button>
      </div>
    </div>
  )
}