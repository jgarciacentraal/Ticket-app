import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getToken } from '../../services/userServices';
import Auth from '../../helper/Auth';

import Nav from '../commons/Nav/Nav';

const style = {
  marginTop: '200px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.10)',
  borderRadius: '8px 8px 8px 8px',
  overflow: 'hidden',
  width: '400px',
  height: '320px',
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
          this.props.history.push('/ticket');
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
        <Nav />

        <form>
          <div className="container" style={style}>
            <div style={{ margin: '25px', textAlign: 'center' }}>
              <h4 className="font-weight-bold mb-2 text-muted">
                Acceda con su Usuario
              </h4>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <Link to="/ticket">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  onClick={this.authUser}
                >
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
