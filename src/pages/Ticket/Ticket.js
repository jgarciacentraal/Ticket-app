import React, { Component } from "react";

//import Footer from './commons/footer.compo';

export default class Ticket extends Component {
  constructor() {
    super();
    this.state = {
      user_id: "",
      title: "",
      message: "",
      tickets: [],
      _id: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendTicket = this.sendTicket.bind(this);
  }

  sendTicket = (e) => {
    if (this.state._id) {
      fetch(`http://localhost:3005/api/tickets/${this.state._id}`, {
        method: "PUT",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({
            user_id: "",
            title: "",
            message: "",
            _id: "",
          });
          this.getTicket();
        });
    } else {
      fetch("http://localhost:3005/api/tickets", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ user_id: "", title: "", message: "" });
          this.getTicket();
        })
        .catch((err) => console.error(err));
      e.preventDefault();
    }
  };

  componentDidMount = (e) => {
    this.getTicket();
  };

  getTicket = (e) => {
    fetch("http://localhost:3005/api/tickets")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tickets: data });
        console.log(data);
      });
  };

  editTicket(id) {
    fetch(`http://localhost:3005/api/tickets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          user_id: data.user_id,
          title: data.title,
          message: data.message,
          _id: data._id,
        });
      });
  }

  deleteTicket(id) {
    fetch(`http://localhost:3005/api/tickets/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.getTicket();
      });
  }

  handleChange = (e) => {
    //console.log(e.target.name)
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Send a Ticket</h4>
                </div>
                <form className="card-body">
                  <div className="form-group">
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="User ID"
                      name="user_id"
                      onChange={this.handleChange}
                      value={this.state.user_id}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ticket Title"
                      name="title"
                      onChange={this.handleChange}
                      value={this.state.title}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className="form-control"
                      rows="8"
                      cols="80"
                      placeholder="Message.."
                      name="message"
                      onChange={this.handleChange}
                      value={this.state.message}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-outline-primary"
                      type="submit"
                      onClick={this.sendTicket}
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tickets.map((ticket) => {
                    return (
                      <tr key={ticket._id}>
                        <td>{ticket.user_id}</td>
                        <td>{ticket.title}</td>
                        <td>{ticket.message}</td>
                        <td>
                          <button
                            style={{ margin: "5px" }}
                            onClick={() => this.editTicket(ticket._id)}
                          >
                            Edit
                          </button>
                          <button onClick={() => this.deleteTicket(ticket._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}
