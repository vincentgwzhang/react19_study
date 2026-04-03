'use client';

import { useEffect, useMemo } from 'react';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

interface Component2Props {
    input: string;
    onInputChange: (message: string) => void;
}

export default function Component2({ input, onInputChange }: Component2Props) {
    const inputSubject$ = useMemo(() => new Subject<string>(), []);
    const debouncedInput$ = useMemo(() =>
        inputSubject$.pipe(
            debounceTime(500),  // 0.5 秒防抖
            distinctUntilChanged()  // 只有值改变才触发
        ),
        [inputSubject$]
    );

    useEffect(() => {
        const subscription = debouncedInput$.subscribe(onInputChange);
        return () => subscription.unsubscribe();
    }, [debouncedInput$, onInputChange]);

    return (
        <div className="space-y-3 rounded-lg border border-zinc-300 p-4">
            <h1 className="text-xl font-semibold">Component 2</h1>
            <p>Input message from parent: {input}</p>

            <input
                type="text"
                value={input}
                onChange={(e) => inputSubject$.next(e.target.value)}
                className="w-full rounded border border-zinc-400 px-3 py-2"
                placeholder="输入内容，停止 0.5 秒后父组件才会收到"
            />
        </div>
    );
}