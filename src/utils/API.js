import axios from 'axios';

const results = 20;

export default {
  getEmployees: function () {
    return axios.get(`https://randomuser.me/api/?results=${results}&nat=us`);
  },
};