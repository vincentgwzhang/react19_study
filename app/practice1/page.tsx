'use client';

import { useState } from "react";
import Component1 from "@/components/component1";
import Component2 from "@/components/component2";
import Component3 from "@/components/component3";
import Component5 from "@/components/component5";
import Component6 from "@/components/component6";
import { Student } from "@/models/student";

export default function Practice1() {
    const [childMessage, setChildMessage] = useState("还没有收到子组件消息");
    const [secondMessage, setSecondMessage] = useState("");

    function handleSecondMessage(message: string) {
        setSecondMessage(message);
    }

    return (
        <div className="space-y-4 p-6">
            <h1 className="text-2xl font-bold">Practice 1</h1>
            <p>This page shows how a child component can send data back to its parent.</p>

            <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3">
                <strong>Parent received:</strong> {childMessage}
            </div>

            <Component1
                message="Hello from Practice 1"
                onSendMessage={(message) => {
                    console.log("子组件传回来的内容:", message);
                    setChildMessage(message);
                }}
            />

            <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3">
                <strong>Parent received:</strong> {secondMessage}
            </div>

            <Component2
                input="Another instance of Component 1"
                onInputChange={handleSecondMessage}
            />

            <p>This is the third component</p>
            <Component3 title='this is a selection component' onSelection={(value) => setChildMessage(`You selected: ${value}`)} />

            <p>This is the 5th component</p>

            <Component5 onSelectStudent={(student: Student) => setChildMessage(`You selected: ${student.name}`)} />

            <p>This is the 6th component</p>

            <Component6 />
        </div>
    );
}