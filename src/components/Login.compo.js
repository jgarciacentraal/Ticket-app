import React, { Component } from 'react';
import { Link } from 'react-router-dom'




import Nav from './commons/nav.compo'
import Footer from './commons/footer.compo';


const style = {
    marginTop: "200px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.10)",
    borderRadius: "8px 8px 8px 8px",
    overflow: "hidden",
    width: "400px",
    height: "320px"
}

export default class Login extends Component {
    constructor() {
        super() 
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }

    handleSubmit =  e => {
        
        e.preventDefault()
    }  



    render() {
        return (

            /* Nav */
            <div>
                <Nav/>

                <form onSubmit={this.handleSubmit}>
                    <div className="container" style={style}>
                        <div style={{margin: "25px", textAlign: "center"}}>
                            <h4 className="font-weight-bold mb-2 text-muted">Acceda con su Usuario</h4>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" 
                                   placeholder="Email" name="email" value={this.state.email} 
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" 
                                    placeholder="Password" name="password" value={this.state.password} 
                                    onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                        <Link to="/ticket">
                            <button className="btn btn-outline-primary" type="submit" >Ingresar</button>
                        </Link>
                        </div>
                    </div>

                </form>
                <Footer/>
            </div>

        )
    }

}


