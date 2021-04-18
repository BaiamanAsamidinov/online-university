import axios from "axios";
import store from "../../store";

export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
      rememberMe: false,
      authenticationError: false,
    };
  },
  methods: {
    doLogin() {
      const data = { email: this.username, password: this.password };
      axios
        .post("/attendance-management/api/auth/login/", data)
        .then((result) => {
          console.log(`token`, result.data.access);
          console.log(`authorities`, result.data.authenticatedUser.role);
          const bearerToken = result.data.access;
          if (bearerToken) {
            const jwt = bearerToken;
            if (this.rememberMe) {
              localStorage.setItem("authenticationToken", jwt);
            } else {
              sessionStorage.setItem("authenticationToken", jwt);
            }
          }
          this.authenticationError = false;
          store.commit("setUser", {
            username: this.username,
            authorities: result.data.authenticatedUser.role,
          });
          console.log(`store.userStore.state.user`, store.state);
          store.commit("setAuthenticated", true);
          this.$router.push(this.$route.query.redirectFrom || { name: "Home" });
        })
        .catch(() => {
          this.authenticationError = true;
        });
    },
  },
};
