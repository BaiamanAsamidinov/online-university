import Bashky from "@/components/BashkyBet.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";
import ProfessorsService from './professors.service'
// import store from "../../store";

export default {
  name: "professors",
  components: {
    Bashky,
    Footer,
    Header
  },
  computed: {
    ...mapGetters(["professors"]),
  },
  mounted() {
    if (!this.professors.length) {
      let professorsService = new ProfessorsService();
      professorsService.retrieve();
    }
  },
};

