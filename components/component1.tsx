'use client';

import { useState } from 'react';

interface Component1Props {
    message: string;
    onSendMessage?: (message: string) => void;
}

export default function Component1({message, onSendMessage}: Component1Props) {
    const [inputValue, setInputValue] = useState(message);

    return (
        <div className="space-y-3 rounded-lg border border-zinc-300 p-4">
            <h1 className="text-xl font-semibold">Component 1</h1>
            <p>This is a simple component. default message = {message}</p>

            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full rounded border border-zinc-400 px-3 py-2"
                placeholder="Type something and send it to parent"
            />

            <button
                type="button"
                onClick={() => onSendMessage?.(inputValue)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Send To Parent
            </button>
        </div>
    );
}