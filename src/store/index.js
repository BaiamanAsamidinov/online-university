import Vue from 'vue'
import Vuex from 'vuex'
import {coursesStore, 
        professorsStore,
        studentsStore,
        departmentsStore}
from './moduls';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    coursesStore,
    professorsStore,
    studentsStore,
    departmentsStore
  }
})
