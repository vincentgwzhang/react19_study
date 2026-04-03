import { createSlice } from "@reduxjs/toolkit"

interface StudentState {
    id: number,
    name: string,
    age: number
}

const initialState: StudentState = {
    id: 0,
    name: '',
    age: 0
}

const StudentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudent(state, action) {
            state.id = action.payload.id
            state.name = action.payload.name
            state.age = action.payload.age
        },

        increaseAge(state, action) {
            state.age += action.payload.age
        },

        updateStudentName(state, action) {
            state.name = action.payload.name
        }
    }
})

export const { setStudent, increaseAge, updateStudentName } = StudentSlice.actions

export default StudentSlice.reducer