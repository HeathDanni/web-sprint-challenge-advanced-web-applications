import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    return ( <Route {...rest}
                render={(props) => {
                    if (localStorage.getItem('token')) {
                        return <Component {...props} />;
                    } else {
                        return <Redirect to="/"/>;
                    }
                }}
            />
        )
    };

export default PrivateRoute;

//creates a private route only allowing access to components with this route if a token exists and redirecting
//to the login page if it doesn't