'use client'

import { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { setStudent, increaseAge, updateStudentName } from '../../store/slices/StudentSlice'

export default function ReduxStudent1() {
    const dispatch = useAppDispatch()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    function handleSetStudent() {
        const numAge = parseInt(age, 10)
        if (name && !isNaN(numAge)) {
            dispatch(setStudent({ id: 1, name, age: numAge }))
            setName('')
            setAge('')
        }
    }

    function handleIncreaseAge() {
        const numAge = parseInt(age, 10)
        if (!isNaN(numAge)) {
            dispatch(increaseAge({ age: numAge }))
            setAge('')
        }
    }

    function handleUpdateName() {
        if (name) {
            dispatch(updateStudentName({ name }))
            setName('')
        }
    }


    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">Redux 学生信息</h2>
            <p>Student name: <input type='text' placeholder='Enter student name' value={name} onChange={(e) => setName(e.target.value)} /></p>
            <p>Student age: <input type='text' placeholder='Enter student age' value={age} onChange={(e) => setAge(e.target.value)} /></p>

            <button onClick={handleSetStudent} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                Set Student
            </button>

            <button onClick={handleIncreaseAge} className="px-4 py-2 bg-green-500 text-white rounded mr-2">
                Increase Age
            </button>

            <button onClick={handleUpdateName} className="px-4 py-2 bg-purple-500 text-white rounded">
                Update Name
            </button>
        </div>
    )
}