import Bashky from "@/components/BashkyBet.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { mapGetters } from "vuex";
import DepartmentsService from './departments.service'
// import store from "../../store";

export default {
  name: "departments",
  components: {
    Bashky,
    Footer,
    Header
  },
  computed: {
    ...mapGetters(["departments"]),
  },
  mounted() {
    if (!this.departments.length) {
      let departmentsService = new DepartmentsService();
      departmentsService.retrieve();
    }
  },
};