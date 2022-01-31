import React, { useState } from "react";
import * as yup from "yup";
import loginSchema from "../../validation/loginSchema";
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import '../Login/login.css';



const initialUserValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

export default function Login() {
  const [userValues, setUserValues] = useState(initialUserValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setUserValues({ ...userValues, [name]: value });
  };

  const validate = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    axiosWithAuth()
        .post('/login', evt.target.value)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userID', res.data.id);
          history.push('/productlist');
        })
        .catch(err => console.log('Oh-oh, something wrong', err))
        .finally(history.push('/productlist'));

  };

  const history = useHistory();




  return (
    <form className="login-container" onSubmit={onSubmit}>

      <header className="loginHeader">Log In</header>

      <div id="loginForm" className="form">
        <div className="row">
          <label>
            Username</label>
            <input
              name="username"
              placeholder="Enter your username"
              type="text"
              value={userValues.username}
              handleChange={handleChange}
            />
           </div>
          <div className="error">{formErrors.username}</div>

        <div className="row">
          <label>
            Password</label>
            <input
              name="password"
              placeholder="Enter your password"
              type="password"
              value={userValues.password}
              handleChange={handleChange}
            />
           </div>
          <div className="error">{formErrors.password}</div>
        
        <div className="row">
          <button id="loginBtn" type="submit">
            Log In
          </button>
          <div className="row-end">New seller? <Link to="/signup">Create a new account.</Link></div>
        </div>
      </div>
    </form>
  );
}
