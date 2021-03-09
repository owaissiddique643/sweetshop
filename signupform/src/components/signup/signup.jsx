import React, { useState, useEffect } from "react";
import {BaseURL} from "../baseURL/baseURL"
// import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {useHistory} from "react-router-dom";
axios.defaults.withCredentials = true







function Signup() {

  let history = useHistory()

  // const [email, setEmail] = useState('');
  // const [errmessage, setErrmessage] = useState('');
  // var history = useHistory();
  // useEffect(() => {
  //     axios({
  //         method: 'post',
  //         url: url + '/auth/validemail',
  //         data: {
  //             email: email
  //         }
  //     }).then((response) => {
  //         if (response.data.status === 200) {
  //             if (response.data.isFound) {
  //                 setErrmessage("Email Already exit")
  //             }
  //             else {
  //                 setErrmessage("Email is Available")
  //             }
  //         } else {
  //             alert(response.data.message);
  //         }
  //     }).catch((error) => {
  //         console.log(error);
  //     });
  // }, [email])
  
  function usersignup (event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: BaseURL + '/auth/signup',
      data: {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
    }).then((response) => {
      if (response.data.status === 200) {
        alert(response.data.message)
        history.push("./");
        
      } else {
        // alert(response.data.message);
        alert(response.data.message)
      }
    }).catch((error) => {
      console.log(error);
      console.log(error.message);
    });
  }

  

  return (

    <div>
      <h1>Signup</h1>
      <form onSubmit={usersignup }>
        <input type="text" id="name" />
        <input type="email" id="email" />
        <input type="password" id="password" />
        <button type="submit">DOne</button>
      </form>
    </div>
  )
}

export default Signup;