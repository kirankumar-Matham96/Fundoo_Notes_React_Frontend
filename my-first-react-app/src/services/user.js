import axios from 'axios';
require('dotenv').config();
import { BASE_URL } from 'dotenv';

class Services
{
  //to register user
  registerUser = (data) => {
    axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data)
    // axios.post(process.env.BASE_URL + 'userSignUp',data)
    // axios.post(BASE_URL + 'userSignUp',data)
      .then(res => {
        console.log(`response from server: ${ JSON.stringify(res.data) }`);
        // return JSON.stringify(res.data);
      }).catch((err) => { console.log(`Error: ${err}`)})
  }

  //to login
  loginUser = (data) =>
  {
    axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', data)
      .then((res) =>
      {
        console.log(`response data:\nprop data: ${JSON.stringify(res.data)}`);
      }).catch((err) =>
      {
      console.log(`Error: ${err}`)
      })
  }
}

export default Services;