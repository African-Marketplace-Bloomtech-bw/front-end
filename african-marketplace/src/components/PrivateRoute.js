import React, { Component } from "react";;
import { route, Redirect } from 'react-router-dom';
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
        {...rest}
        render={(props) => {
            if(localStorage.getItem('token')) {
                return <Component {...props} />;
            }
        }}
    )
}