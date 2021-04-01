import Bashky from "@/components/BashkyBet.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";
import CoursesService from "./courses.service";
import ProfessorsService from "../professors/professors.service";
// import store from "../../store";

export default {
  name: "Courses",
  components: {
    Bashky,
    Footer,
    Header
  },
  computed: {
    ...mapGetters(["courses", "professor"]),
  },
  mounted() {
    if (!this.courses.length) {
      let coursesService = new CoursesService();
      let professorsService = new ProfessorsService();
      coursesService.retrieve()
        .then(() => {
          this.courses.map((course) => {
            professorsService.find(course.teacher)
              .then(() => {course.teacher = `${this.professor.first_name} ${this.professor.last_name}`;})
          })
        })
      console.log(`this.courses`, this.courses)
    }
  },
};