export const coursesStore = {
    state: {
        courses: [],
    },
    getters: {
        courses : state => state.courses,
    },
    mutations: {
        setAllCourses(state, courses) {
            state.courses = courses;
        }
    }
}