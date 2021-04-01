import Bashky from "@/components/BashkyBet.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { mapGetters } from "vuex";
import StudentsService from './students.service'
// import store from "../../store";

export default {
  name: "students",
  components: {
    Bashky,
    Footer,
    Header
  },
  computed: {
    ...mapGetters(["students"]),
  },
  mounted() {
    if (!this.students.length) {
      let studentsService = new StudentsService();
      studentsService.retrieve();
    }
  },
};