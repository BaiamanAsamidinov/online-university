import axios from 'axios';
import store from '../../store'

const baseApiUrl = '/attendance-management/api/students';

export default class StudentsService {
  find(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseApiUrl}/${id}`)
        .then(res => {
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
        .then(res => {
          store.commit('setAllStudents', res.data)
          console.log(`students`, res.data)
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
