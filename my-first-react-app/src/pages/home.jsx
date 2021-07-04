// import React, { Component} from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import 'bootstrap';
import
  {
    Menu
  } from '../components/dashboard.header.dropdownMenue';

/**
 * functional component working fine👍
 */
const Home = () =>
{
  const [first, setFirst] = useState([]);
  const [last, setLast] = useState([]);
  const [pic, setPic] = useState([]);

  const getDataFromOnlineSite = () => {
    axios.get('https://api.randomuser.me/').then((res) =>
    {
      console.log(res.data.results)
      setFirst(res.data.results[0].name.first);
      setLast(res.data.results[0].name.last);
      setPic(res.data.results[0].picture.large);
    }).catch((err) => {console.log(`Error: ${err}`)})
  }

  const getAllUsers = () => {
    axios.get('http://fundoonotes.incubation.bridgelabz.com/api/user')
      .then((res) => {
        console.log('res.data: ', res.data);
        console.log('res.data[0]: ',res.data[0]);
        setFirst(res.data[0].firstName);
        setLast(res.data[0].lastName);
      }).catch((err) => { console.log(`Error: ${err}`)})
  }

  const getUserById = () => {
    axios.get('http://fundoonotes.incubation.bridgelabz.com/api/user/5bbda7df60eb5e004087da75')
      .then(res => {
        console.log(`user by id: ${ res.data.firstName } -> ${ res.data.email }`);
        setFirst(res.data.firstName);
        setLast(res.data.lastName);
      }).catch((err) => { console.log(`Error: ${err}`)})
  }
  const registerUser = (data) => {
    axios.post('http://fundoonotes.incubation.bridgelabz.com/signup',data)
      .then(res => {
        console.log(`response from server: ${ res.data }`);
      }).catch((err) => { console.log(`Error: ${err}`)})
  }

  /**
   * for test checking
  */
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Using functional component</h1>
      <header>Hello</header>
      <div id='div-one'>{counter}</div>


      <div>
        <div>
          <div>
            <div>
              <div className='hello'>
                Hello Home
              </div>
            </div>
          </div>
        </div>
      </div>
      <button id='increment-btn' onClick={() => { setCounter(counter+1) }}>increment</button>
      {/* <ol> */}
        {/* {`dataFrom swagger: ${users.firstName}`} */}
      {/* </ol> */}
      {/* <div>{`First Name: ${ first }`} <br/> {`Last Name: ${last}`}</div> */}
      {/* <img src={pic} alt='pic' /> */}
      {/* <button onClick={getDataFromOnlineSite}>get data from online site</button> */}
      {/* <button onClick={getAllUsers}>get all users from swagger</button> */}
      {/* <button onClick={getUserById}>get user by id from swagger</button> */}
      {/* <Link to='/register'> */}
        {/* <button>Register</button> */}
      {/* </Link> */}



{/* Dropdown menu */}

    {/* <Menu /> */}




    </div>
  );
}


//******************************************************************************* */

/**
 * class component: working fine👍
 */
// const api = axios.create({
//   baseURL: 'http://fundoonotes.incubation.bridgelabz.com/api/'
// })

// class Home extends Component
// {
//   constructor()
//   {
//     super();

//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: ''
//     }

//     api.get('/user/').then(res =>
//     {
//       console.log(res);
//       this.setState({ firstName: res.data.firstName, lastName: res.data.lastName, email: res.data.email });
//     }).catch((err) => { console.log('Error: ', err) });

//     api.get('/user/:id').then(res => {
//       this.setState({ firstName: res.data.firstName, lastName: res.data.lastName, email: res.data.email });
//     }).catch((err) => { console.log('Error: ', err) });
//   }

//   render(){
//     return (
//       <div className='container'>
//         <h1>Using class component</h1>
//         {/* <li>{this.state.firstName}</li>
//         <li>{this.state.lastName}</li> */}
//         <Link to='/register'>
//           <button>Register</button>
//         </Link>
//       </div>
//     )
//   }
// }

export default Home;