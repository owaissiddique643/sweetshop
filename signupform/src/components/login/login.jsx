
import React from 'react';
import {BaseURL} from "../baseURL/baseURL"
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {useRef} from "react"
axios.defaults.withCredentials = true
import {UseGlobalState, UseGlobalStateUpdate} from "../../context/globalcontext"
// import {useHistory} from "react-router-dom";



function Login() {
  // let history = useHistory()
  const email = useRef(null);
  const password = useRef(null);
  

  function userlogin(event) {
    event.preventDefault();

  //  var email=  email.current.value
  //  var password= password.current.value
  // console.log(email)
  // console.log(password)
  
  axios({
    method: 'post',
    url: BaseURL + "/auth/login",
    data: {
      email: email.current.value,
      password: password.current.value,
    }
  }).then((response) => {
    console.log(response);
    alert("done",response.data.message)
    // history.push("/")
  }, (error) => {
    console.log(error);
    alert("correct your email and password")
    });

  }


    return (<>

   
        <h1>Login</h1>
        

        <form onSubmit={userlogin}>
        
          <input type="email" ref={email}/>
          
            
            <input type="password" ref={password}/>

            <button type="submit">login</button>
         
       
        </form>
      







{/* 

<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
      
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>


			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
						
			</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>

					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn"/>
					</div>
				</form>
			</div>

			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>

				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>

			</div>
		</div>
	</div>
</div> */}


    </>)
  }

  export default Login;