import axios from 'axios';

class services
{
  //to register user
  registerUser = (data) => {
    axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data)
      .then(res => {
        console.log(`response from server: ${ res.data }`);
      }).catch((err) => { console.log(`Error: ${err}`)})
  }

  //to login
  loginUser = (data) =>
  {
    axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', data)
      .then((res) =>
      {
        console.log(`response data:\nprop data: ${res.data}`);
        console.log(`prop1: ${res.data.id}`);
        console.log(`prop2: ${res.data.price}`);
      }).catch((err) =>
      {
      console.log(`Error: ${err}`)
      })
  }
}

export default services;