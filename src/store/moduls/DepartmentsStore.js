export const departmentsStore = {
    state: {
        departments: [],
    },
    getters: {
        departments : state => state.departments,
    },
    mutations: {
        setAllDepartments(state, departments) {
            state.departments = departments;
        }
    }
}