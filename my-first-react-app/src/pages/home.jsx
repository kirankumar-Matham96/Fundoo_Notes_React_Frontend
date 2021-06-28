// import React, { Component} from 'react';
import React, { useState, useEffect } from 'react';
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

  const getData = async () => {
    await axios.get('https://api.randomuser.me/').then((res) =>
    {
      console.log(res.data);
      setFirst(res.data.results[0].name.first);
      setLast(res.data.results[0].name.last);
      setPic(res.data.results[0].picture.large);
      console.log('user: ',first);
    })
  }

  return (
    <div>
      <h1>Using functional component</h1>
      {<div>{`First Name: ${ first }`} <br/> {`Last Name: ${last}`}</div> }
      <img src={pic} alt='pic' />
      <button onClick={getData}>get data</button>
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
//   // baseURL: 'http://fundoonotes.incubation.bridgelabz.com/explorer/#/'
//   baseURL: 'https://api.randomuser.me/'
//   // baseURL: 'http://localhost:3001'
// })

// class Home extends Component
// {
//   constructor(){
//   super();

//   this.state = {
//     firstName: '',
//     lastName: '',
//     picture:''
//     }

//     // api.get('/').then(res =>
//     api.get('/users/').then(res =>
//     {
//       this.setState({ firstName: res.data.results[0].name.first, lastName: res.data.results[0].name.last, picture: res.data.results[0].picture.large });
//     }).catch((err) => { console.log('Error: ', err) });
//   }

//   render(){
//     return (
//       <div className='container'>
//         <h1>Using class component</h1>
//         <li>{this.state.firstName}</li>
//         <li>{this.state.lastName}</li>
//         <img src={this.state.picture} />
//       </div>
//     )
//   }
// }


export default Home;