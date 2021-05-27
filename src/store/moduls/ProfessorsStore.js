export const professorsStore = {
    state: {
        professors: [],
        professor: {}
    },
    getters: {
        professors : state => state.professors,
        professor : state => state.professor,
    },
    mutations: {
        setAllProfessors(state, professors) {
            state.professors = professors;
        },

        setProfessor(state, professor) {
            state.professor = professor;
        }
    }
}