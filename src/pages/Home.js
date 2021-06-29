import React, { Component } from 'react';

import Nav from '../components/commons/Nav/Nav';
import Jumbotron from '../components/commons/Jumbotron/jumbotron';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />

        <Jumbotron />
      </div>
    );
  }
}
