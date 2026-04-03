'use client'
import { useAppSelector } from '../../store/hooks'


export default function Redux2 () {
    const count = useAppSelector((state) => state.counter.value)

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">这是第二个组件, 和第一个组件没有关系</h1>
            <p>Count: {count}</p>
        </div>
    )
}