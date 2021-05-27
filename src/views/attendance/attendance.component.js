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
        Header,

    },
    data () {
        return {
            loading:      false,
            error:        null,
            selectedDate: Date.now(),
            datePick: false,
            modal: false,
            students:     stubStudents,
            items: ['Programlama Teknolojisi', 'History', 'English', 'Russian'],
            selected: [],
            headers: [
                {
                    text: 'Student ID',
                    align: 'start',
                    sortable: false,
                    value: 'ID',
                },
                { text: 'Firstname', value: 'name' },
                { text: 'Lastname', value: 'name' },
                { text: 'Register', value: 'carbs' },
                { text: 'Status', value: 'carbs' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    ID: 1,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                },
                {
                    name: 'Ice cream sandwich',
                    ID: 2,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                },
                {
                    name: 'Eclair',
                    ID: 3,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                },
                {
                    name: 'Cupcake',
                    ID: 4,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                },
                {
                    name: 'Gingerbread',
                    ID: 5,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                },
                {
                    name: 'Jelly bean',
                    ID: 6,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                },
                {
                    name: 'Lollipop',
                    ID: 7,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                },
                {
                    name: 'Honeycomb',
                    ID: 8,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                },
                {
                    name: 'Donut',
                    ID: 9,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                },
                {
                    name: 'KitKat',
                    ID: 10,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                },
            ],
            search: '',
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