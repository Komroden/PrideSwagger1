import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const loadJSON=key=>
    JSON.parse(sessionStorage.getItem(key));

export function PrivateRoute({auth, ...rest}) {
    return (auth.token!=null||loadJSON('keySwagger')) ? <Route {...rest}/> : <Redirect to={{
        pathname: '/login',
    }}/>
}