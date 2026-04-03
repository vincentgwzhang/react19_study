import { Student } from "@/models/student";

interface Component5Props {
    onSelectStudent: (student: Student) => void;
}

export default function Component5({ onSelectStudent }: Component5Props) {

    const students: Student[] = [
        { id: 1, name: 'Alice', age: 20 },
        { id: 2, name: 'Bob', age: 22 },
        { id: 3, name: 'Charlie', age: 21 },
    ];

    function handleSelectStudent(studentId: number) {
        const selectedStudent = students.find(student => student.id === studentId);
        if (selectedStudent) {
            onSelectStudent(selectedStudent);
        }
    }


    return (
        <div className="space-y-3 rounded-lg border border-zinc-300 p-4">
            <h1 className="text-xl font-semibold">Component 5</h1>
            <p>This is Component 5. It does not have any interaction with parent.</p>

            <select onChange={(e) => handleSelectStudent(Number(e.target.value))} className="w-full rounded border border-zinc-400 px-3 py-2">
                {
                    students.map(student => (
                        <option key={student.id} value={student.id}>
                            {student.name} - {student.age}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}