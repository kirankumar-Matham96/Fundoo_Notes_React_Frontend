// import React, { Component} from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Using fetch and backend in the same directory as react app.
 */
const Home = () =>
{
  const [users, setUsers] = useState([]);

  useEffect(() =>
  {
    fetch('/users/').then(res =>
    {
      return (res.ok) ? res.json() : res.send({ message: 'Something went wrong!' });
    }).then(jsonRes => setUsers(jsonRes.usersList)).catch((err) => {console.log(`error: ${err}`)})
  })

  return (
    <div className='home'>
      <h1>React integration with backend</h1>
      { users.map(user => <li>{user}</li>)}
    </div>
  )
}

/**
 * functional components
 */

// const Home = () =>
// {
//   const getData = () => {
//     axios.get('http://localhost:3000/').then((res) =>
//     {
//       console.log(res);
//     })
//   }

//   return (
//     <div>
//       <h1>Using functional component</h1>
//       <button onClick={getData}>get data</button>
//     </div>
//   );
// }


//******************************************************************************* */

/**
 * class component
 */
// const api = axios.create({
//   baseURL: 'http://localhost:3000/'
// })

// class Home extends Component
// {
//   constructor(props){
//     super(props);

//     api.get('/').then(res => {
//       console.log(res);
//     })
//   }

//   render(){
//     return (
//       <div className='container'>
//         <h1>Using class component</h1>
//       </div>
//     )
//   }
// }

export default Home;