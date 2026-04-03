import { useState, useRef } from 'react';


export default function Component4() {
    const [message, setMessage] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <div className="space-y-3 rounded-lg border border-zinc-300 p-4">
            <h1 className="text-xl font-semibold">Component 4</h1>
            <p>This is Component 4. It does not have any interaction with parent.</p>
            <p>This is a message from input: {message}</p>

            <input type="text" value="" ref={inputRef} className="w-full rounded border border-zinc-400 px-3 py-2" placeholder="输入内容，这个组件不会把内容传回父组件" />
            <button type="button" onClick={() => setMessage(inputRef.current?.value || '')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Set Message
            </button>
        </div>
    );
}