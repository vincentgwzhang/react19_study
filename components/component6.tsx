import { useCounter } from "@/hooks/counter";

export default function Component6() {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div className="space-y-3 rounded-lg border border-zinc-300 p-4">
            <h1 className="text-xl font-semibold">Component 6</h1>
            <p>Count = {count}</p>

            <div className="flex gap-2">
                <button type="button" onClick={increment} className="rounded bg-blue-500 px-3 py-2 text-white">
                    increment
                </button>
                <button type="button" onClick={decrement} className="rounded bg-orange-500 px-3 py-2 text-white">
                    decrement
                </button>
                <button type="button" onClick={reset} className="rounded bg-zinc-600 px-3 py-2 text-white">
                    reset
                </button>
            </div>
        </div>
    );
}