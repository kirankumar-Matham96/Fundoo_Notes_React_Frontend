import axios from 'axios';
require('dotenv').config();
import { BASE_URL } from 'dotenv';

class Services
{
  //to register user
  registerUser = (data) =>
  {
    axios.post(process.env.REACT_APP_BASE_URL + 'userSignUp',data)
      .then(res => {
        console.log(`response from server: ${ JSON.stringify(res.data) }`);
        // return JSON.stringify(res.data);
      }).catch((err) => { console.log(`Error: ${err}`)})
  }

  //to login
  loginUser = (data) =>
  {
    axios.post(process.env.REACT_APP_BASE_URL + 'login', data)
      .then((res) =>
      {
        console.log(`response prop data: ${JSON.stringify(res.data)}`);
      }).catch((err) =>
      {
      console.log(`Error: ${err}`)
      })
  }
}

export default Services;