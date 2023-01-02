import * as React from "react";

const box_style = {
  display: 'flex',
  justifyContent: 'center'
}

const style = {
  marginTop: "200px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.10)",
  borderRadius: "8px 8px 8px 8px",
  overflow: "hidden",
  width: "400px",
  height: "320px",
};

const fields_styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',

}

export default function Login() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    error: false,
  })


  /* authUser = (e) => {
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
  }; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      [name]: value,
    });
  };


    return (
      <div style={box_style}>
        <form>
          <div style={style}>
            <h4 style={{ margin: "25px", textAlign: "center" }}>
              Acceda con su Usuario
            </h4>
            <div style={fields_styles}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              <button type="submit" onClick={() => {}}>
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}
