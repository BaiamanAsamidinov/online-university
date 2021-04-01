export const userStore = {
  state: {
    user: {},
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
};
