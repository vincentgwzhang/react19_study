'use client'

import { useAppSelector } from "@/app/store/hooks"

export default function ReduxStudent2() {
    const student = useAppSelector((state) => state.student)


    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">Redux 学生信息 - 组件2</h2>
            <p>Student name: {student.name}</p>
            <p>Student age: {student.age}</p>
        </div>
    )
}