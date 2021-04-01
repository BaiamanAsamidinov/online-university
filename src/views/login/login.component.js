import axios from 'axios'

export default {
    components: {},
    data() {
      return {
        username: '',
        password: '',
        rememberMe: false,
        authenticationError: false
      }
    },
    methods: {
        doLogin() {
            const data = { email: this.username, password: this.password };
            axios
              .post('/attendance-management/api/auth/login/', data)
              .then(result => {
                  console.log(`token`, result.data.access)
                const bearerToken = result.data.access;
                if (bearerToken) {
                  const jwt = bearerToken;
                  if (this.rememberMe) {
                    localStorage.setItem('authenticationToken', jwt);
                  } else {
                    sessionStorage.setItem('authenticationToken', jwt);
                  }
                }
                this.authenticationError = false;
                this.$router.push(this.$route.query.redirectFrom || { name: 'Home' })
              })
              .catch(() => {
                this.authenticationError = true;
              });
          }
    }
  }