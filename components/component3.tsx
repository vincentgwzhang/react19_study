import { useEffect, useMemo } from "react";
import { Subject } from "rxjs";

interface Component3Props {
    title: string;
    onSelection: (value: string) => void;
}

export default function Component3({ title, onSelection }: Component3Props) {
    const userSelectSubject$ = useMemo(() => new Subject<string>(), []);
    const observable$ = useMemo(() => userSelectSubject$.asObservable(), [userSelectSubject$]);

    useEffect(() => {
        const subscription = observable$.subscribe(onSelection);
        return () => subscription.unsubscribe();
    }, [observable$, onSelection]);

    return (
        <div className="space-y-3 rounded-lg border border-zinc-300 p-4">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p>This is Component 3. It can send selected value back to parent.</p>
            
            <select onChange={(e) => userSelectSubject$.next(e.target.value)} className="w-full rounded border border-zinc-400 px-3 py-2">
                <option value="">请选择一个选项</option>
                <option value="Option 1">选项 1</option>
                <option value="Option 2">选项 2</option>
                <option value="Option 3">选项 3</option>
            </select>
        </div>
    );
}