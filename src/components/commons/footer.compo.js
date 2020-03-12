import React, { Component } from 'react'

const style = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    heigth: "60px",
    backgroundColor: "#f5f5f5",
    textAlign: "center"
}

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer" style={style}>
                <div className="container">
                    <span className="text-muted">Copyrigth 2020</span>
                </div>
            </footer>
        )
    }
}