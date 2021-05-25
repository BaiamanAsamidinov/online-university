import axios from 'axios';
import store from '../../store'

const baseApiUrl = '/attendance-management/api/teachers';

export default class ProfessorsService {
  find(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseApiUrl}/${id}`)
        .then(res => {
          store.commit('setProfessor', res.data)
          console.log(`professor`, res.data)
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  retrieve() {
    return new Promise((resolve, reject) => {
      axios
        .get(baseApiUrl)
        // .get(baseApiUrl + `?${buildPaginationQueryOpts(paginationQuery)}`)
        .then(res => {
          store.commit('setAllProfessors', res.data)
          console.log(`res.data.professors`, res.data)
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${baseApiUrl}/${id}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  create(entity) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseApiUrl}`, entity)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  update(entity) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${baseApiUrl}`, entity)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
