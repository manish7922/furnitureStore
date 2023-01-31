import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React,{Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom"
import Products from "./products";
import Login from "./login";
import Logout from "./logout"; 
import Navbar from "./navbar";
import AddProducts from "./addProducts";
import auth from "../services/authServices"
class MainComponent extends Component{
    state={}

    render(){
let user=auth.getUser();
        return(
            <div className="container">
            <Navbar user={user} />
            <Switch>
            <Route path="/logout"  component={Logout} />
              <Route path="/login"  component={Login} />
              <Route path="/products/add" render={(props)=><AddProducts {...props}  />} />
            <Route path="/products" render={(props)=><Products {...props}  />} />
         
            </Switch>
            </div>  
        )
    }
}

export default MainComponent;