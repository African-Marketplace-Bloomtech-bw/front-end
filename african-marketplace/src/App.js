import React, { useState, useEffect } from "react";
import './App.css';
import {BrowserRouter, Link, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { useHistory } from 'react-router';
import Login from './components/Login/Login'




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Link to='/login'>Log In</Link>
      <Link to='/signUp'>Sign Up</Link>
      <Switch>
          <Route>
            <Login path='/login'/>
          </Route>
          <Route>
            
          </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
