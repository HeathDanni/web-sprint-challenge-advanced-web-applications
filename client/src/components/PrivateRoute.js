import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    return ( <Route {...rest}
                render={(props) => {
                    if (localStorage.getItem('token') === "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98") {
                        return <Component {...props} />;
                    } else {
                        return <Redirect to="/"/>;
                    }
                }}
            />
        )
    };

export default PrivateRoute;