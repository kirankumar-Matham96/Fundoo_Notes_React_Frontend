import axios from 'axios';
require('dotenv').config();

class Services
{
  //to register user
  registerUser = (data) =>
  {
    return axios.post(`${process.env.REACT_APP_BASE_URL}userSignUp`,data)
      .then(res =>
      {
        return res;
      }).catch((err) =>
      {
        return err;
      })
  }

  //to login
  loginUser = (data) =>
  {
    return axios.post(`${process.env.REACT_APP_BASE_URL}login`, data)
      .then((res) =>
      {
        return res;
      }).catch((err) =>
      {
        return err;
      })
  }
}

export default Services;