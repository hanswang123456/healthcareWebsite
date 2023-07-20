import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import "./mfa.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Mfa = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    code: undefined,
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
        "https://healthcare-api.azurewebsites.net/api/auth/authenticate",
        //"http://localhost:8080/api/auth/authenticate",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
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
          Input 2FA Code Found in Associated Email
        </span>
        <input
          type="text"
          onChange={handleChange}
          className="lInput"
          placeholder="username"
          id="username"
        />
        <input
          type="text"
          onChange={handleChange}
          className="lInput"
          placeholder="code"
          id="code"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Verify
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Mfa;
