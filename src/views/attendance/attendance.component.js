import Bashky from "@/components/BashkyBet.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";
// import AttendanceService from "./attendance.service";
// import ProfessorsService from "../professors/professors.service";
//import Attendance from "@/views/attendance/Attendance";
// import store from "../../store";

const stubStudents = [
    {
        id:        1,
        fullName:  'Самат Курманбек уулу',
        isPresent: false
    },
    {
        id:        2,
        fullName:  'Максатбек Болушов',
        isPresent: false
    },
    {
        id:        3,
        fullName:  'Баяман Асамидинов',
        isPresent: false
    },
    {
        id:        4,
        fullName:  'Жениш Жондаров',
        isPresent: false
    },
    {
        id:        5,
        fullName:  'Усон Асанов',
        isPresent: false
    },
    {
        id:        6,
        fullName:  'Алберт Ейнштейн',
        isPresent: false
    },
    {
        id:        7,
        fullName:  'Жейм Хопкин',
        isPresent: false
    },
    {
        id:        8,
        fullName:  'Шерим ЖУмгал',
        isPresent: false
    },
    {
        id:        9,
        fullName:  'Валда Жамгыр',
        isPresent: false
    },
    {
        id:        10,
        fullName:  'Денис Жамгыр',
        isPresent: false
    },
    {
        id:        11,
        fullName:  'Рамис Турдубаев',
        isPresent: false
    },
    {
        id:        12,
        fullName:  'Роке Кулаке',
        isPresent: false
    },

];

export default {
    name: "Attendance",
    components: {
        Bashky,
        Footer,
        Header
    },
    data () {
        return {
            loading:      false,
            error:        null,
            selectedDate: Date.now(),
            students:     stubStudents
        };
    },
    computed: {
        ...mapGetters(["courses","attendance","students"]),
    },
    methods: {
        daysInMonth () {
            const currentDate = new Date();
            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
                .getDate();
            return [...new Array(daysInMonth)]
                .map((item, index) => index + 1);
        }
    },
    mounted() {

    },
};