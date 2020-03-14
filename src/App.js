import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import Login from './components/Login.compo';
import Ticket from './components/Ticket.compo'
import Home from './pages/Home.page';

export default class App extends Component {
  render() {
    return (
         <Router>
           <div>
             <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/login" component={Login} />
               <Route path="/ticket" component={Ticket}/>
               <Route exact path="*" component={() => "404 NOT FOUND"} />
             </Switch>
           </div>
         </Router>
    )
  }

}


