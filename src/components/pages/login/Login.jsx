import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    withCredentials: true,
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        //"http://localhost:8080/api/auth/login",
        "https://healthcare-api.azurewebsites.net/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/authenticate");
    } catch (err) {
      alert(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <div className="login">
      <div className="lContainer">
        <button
          className="lButton"
          onClick={() => {
            window.location = "/";
          }}
        >
          Back Home
        </button>
        <span
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "bolder",
            fontSize: "30px",
          }}
        >
          Input Login Information
        </span>
        <input
          type="text"
          onChange={handleChange}
          className="lInput"
          placeholder="username"
          id="username"
        />
        <input
          type="password"
          onChange={handleChange}
          className="lInput"
          placeholder="password"
          id="password"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <button
          className="lButton"
          onClick={() => {
            window.location = "/register";
          }}
        >
          Register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
