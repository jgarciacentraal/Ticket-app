import React, { Component } from 'react'


import Nav from '../components/commons/nav.compo'
import Foooter from '../components/commons/footer.compo'
import Jumbotron from '../components/commons/jumbotron.compo'



export default class Home extends Component {
    render () {
        return (
            <div>
                <Nav/>

                <Jumbotron/>


                <Foooter/>
            </div>
          
                
                
        )
    }
}