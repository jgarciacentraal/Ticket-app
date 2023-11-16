import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  container,
  formStyled,
  fieldsStyles,
  titleStyled,
  buttonStyled,
  errorFormStyled,
} from "./styles";
import { authPromise } from "services/authService";

export default function Login() {
  const navigate = useNavigate();
  const [errorForm, setErrorForm] = React.useState("");

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = async () => {
    if (!form.email && !form.password) {
      alert("Fill the fields!!");
      return;
    }

    try {
      const { response } = await authPromise(form);
      navigate(response?.path);
      setErrorForm("");
    } catch (err) {
      setErrorForm(err?.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div style={container}>
      <div style={formStyled}>
        <h1 style={titleStyled}>Acceda con su Usuario</h1>
        <div style={fieldsStyles}>
          <input
            type="email"
            placeholder="Usuario"
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
          <button
            type="submit"
            style={buttonStyled}
            onClick={handleSubmitLogin}
          >
            Ingresar
          </button>

          <div>
            <span style={errorFormStyled}>{errorForm}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
