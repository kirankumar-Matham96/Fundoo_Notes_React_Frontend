// import React, { Component} from 'react';
// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
// import axios from '../components/axios';
import axios from 'axios';
import { Link } from 'react-router-dom';

/**
 * Using fetch and backend in the same directory as react app.
 */
// const Home = () =>
// {
//   const [users, setUsers] = useState([]);

//   useEffect(() =>
//   {
//     fetch('/users/').then(res =>
//     {
//       return (res.ok) ? res.json() : res.send({ message: 'Something went wrong!' });
//     }).then(jsonRes => setUsers(jsonRes.usersList)).catch((err) => {console.log(`error: ${err}`)})
//   })

//   return (
//     <div className='home'>
//       <h1>React integration with backend</h1>
//       {users.map(user => <li>{user}</li>)}
//       <Link to='/register'>
//         <button>Register page</button>
//       </Link>
//     </div>
//   )
// }

/**
 * functional component working fine👍
 */
const Home = () =>
{
  const [first, setFirst] = useState([]);
  const [last, setLast] = useState([]);
  const [pic, setPic] = useState([]);

  const getDataFromOnlineSite = async () => {
    await axios.get('https://api.randomuser.me/').then((res) =>
    {
      console.log(res.data.results)
      setFirst(res.data.results[0].name.first);
      setLast(res.data.results[0].name.last);
      setPic(res.data.results[0].picture.large);
    })
  }

  const getAllUsers = async () => {
    await axios.get('http://fundoonotes.incubation.bridgelabz.com/api/user')
      .then((res) => {
        console.log('res.data: ', res.data);
        console.log('res.data[0]: ',res.data[0]);
        setFirst(res.data[0].firstName);
        setLast(res.data[0].lastName);
    })
  }

  const getUserById = async () => {
    await axios.get('http://fundoonotes.incubation.bridgelabz.com/api/user/5bbda7df60eb5e004087da75')
      .then(res => {
        console.log(`user by id: ${ res.data.firstName } -> ${ res.data.email }`);
        setFirst(res.data.firstName);
        setLast(res.data.lastName);
      })
  }

  return (
    <div>
      <h1>Using functional component</h1>
      <ol>
        {/* {`dataFrom swagger: ${users.firstName}`} */}
      </ol>
      <div>{`First Name: ${ first }`} <br/> {`Last Name: ${last}`}</div>
      <img src={pic} alt='pic' />
      <button onClick={getDataFromOnlineSite}>get data from online site</button>
      <button onClick={getAllUsers}>get all users from swagger</button>
      <button onClick={getUserById}>get user by id from swagger</button>
      <Link to='/register'>
        <button>Register</button>
      </Link>
    </div>
  );
}


//******************************************************************************* */

/**
 * class component: working fine👍
 */
// const api = axios.create({
//   // baseURL: 'http://localhost:3000/'
//   baseURL: 'http://fundoonotes.incubation.bridgelabz.com/api/'
//   // baseURL: 'https://api.randomuser.me/'
//   // baseURL: 'http://localhost:3001'
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
//         <li>{this.state.firstName}</li>
//         <li>{this.state.lastName}</li>
//         <Link to='/register'>
//           <button>Register</button>
//         </Link>
//       </div>
//     )
//   }
// }

export default Home;