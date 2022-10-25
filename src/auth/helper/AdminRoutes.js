import React from "react";
import { Route,Navigate } from "react-router-dom";
import { isAutheticated } from "./index";


const AdminRoute = ({component:Component, ...rest})=>{
    return(
       <Route
        {...rest}
        render={props=>
        isAutheticated() && isAutheticated().user.role == 1 ? (
            <Component {...props}/>
        ) : (
            <Navigate
            to={{
                pathname:"signin",
                state:{from:props.location}
            }}
            />
        )
            }
       />
    )
}

export default AdminRoute;