import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getToken } from "../../services/userServices";
import Auth from "../../helper/Auth";

const style = {
  marginTop: "200px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.10)",
  borderRadius: "8px 8px 8px 8px",
  overflow: "hidden",
  width: "400px",
  height: "320px",
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  authUser = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    getToken({
      email,
      password,
    }).then((data) => {
      if (data.success === false) {
        this.setState({
          error: true,
        });
      } else {
        this.setState({
          error: false,
        });
        Auth.login(data, () => {
          this.props.history.push("/ticket");
        });
      }
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      /* Nav */
      <div>
        <form>
          <div style={style}>
            <h4 style={{ margin: "25px", textAlign: "center" }}>
              Acceda con su Usuario
            </h4>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Link to="/ticket">
                <button type="submit" onClick={this.authUser}>
                  Ingresar
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
