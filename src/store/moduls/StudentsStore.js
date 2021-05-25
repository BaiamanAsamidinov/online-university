export const studentsStore = {
    state: {
        students: [],
    },
    getters: {
        students : state => state.students,
    },
    mutations: {
        setAllStudents(state, students) {
            state.students = students;
        }
    }
}