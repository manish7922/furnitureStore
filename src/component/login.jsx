import React, { Component } from "react";
import auth from "../services/authServices"
import http from "../services/httpServices"
class Login extends Component {
  state = {
    form: { email: "", password: "" },
  };

  handleChange=(e)=>{
    let {currentTarget:input}=e
    let s1={...this.state}
    s1.form[input.name]=input.value;
    this.setState(s1)
  }
  async postData(url,obj){
    try{
        let response=await http.post(url,obj);
      const {data}=response
      auth.login(data);
      console.log(response);
      window.location = "/products";
    }
    catch(ex){
        if (ex.response && ex.response.status === 401) {
            let errors = {};
            errors.email = ex.response.data;
            this.setState({ errors: errors });
          }
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.form);
        this.postData("/login", this.state.form);
  }

  render() {
    const { email, password } = this.state.form;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    placeholder="enter the email"
                    onChange={this.handleChange}
                  />
               
        
                <div className="form-group">
                  <label>PassWord</label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={password}
                    placeholder="enter the password"
                    onChange={this.handleChange}
                  />
                </div>
        
              <div >
                <button className="btn btn-primary btn-sm mt-3" onClick={this.handleSubmit}>submit</button>
             
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default Login;
