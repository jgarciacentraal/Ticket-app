import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron" style={{marginTop: "80px" , backgroundColor: "#ADD8E6", textAlign:"center"}}>
                <h1 className="display-4">Bienvenido</h1>
                <p className="lead">Plataforma para Soporte Tecnico y Consulta</p>
                <hr className="my-4"/>
                    <p>Si eres nuestro cliente, ingresa a Login para comenzar.</p>
                    <Link to="/login">
                    <a className="btn btn-primary" href="/#" role="button">Login</a>
                    </Link>
               </div>
                )
            }
}