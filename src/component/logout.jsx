import React,{Component} from "react";
import auth from "../services/authServices"
class Logout extends Component{
    state={}

    async componentDidMount() {
        auth.logout();
        this.props.history.push(`/login`);
        window.location = "/login";
      }


    render(){
        return("")
    }
}

export default Logout;