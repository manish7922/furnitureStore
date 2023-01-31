import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          FurnitureStore
        </Link>
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/products">Products</Link>
            </li>
            {user && user.role === "admin" && (
              <li className="nav-item">
                <Link className="navbar-brand" to="/products/add">add a Products</Link>
              </li>
            )}

            {!user && (
              <li
                className="nav-item"
                style={{ marginLeft: "370px", marginTop: "3px" }}
              >
                <Link className="navbar-brand" to="/login">
                  Signin
                </Link>
              </li>
            )}
            {user && (
              <li
                className="nav-item"
                style={{ marginLeft: "370px", marginTop: "3px" }}
              >
                <Link className="navbar-brand" to="/logout">
                  Signout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar
