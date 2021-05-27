export const userStore = {
  state: {
    user: {},
    authenticated: false,
  },
  getters: {
    user: (state) => state.user,
    authenticated: (state) => state.authenticated,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
    },
    logout(state) {
      state.user = null;
      state.authenticated = false;
    },
  },
};
