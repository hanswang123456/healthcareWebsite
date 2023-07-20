import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "../App.css";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <header>
      <div id="logo">
        <h2>Azure Healthcare App</h2>
      </div>
      {user != null ? (
        <nav>
          <a href="/doctor">Doctor Search</a>
          <a href="/locate">Facility Locator</a>
          <a href="/">Symptom Checker</a>
        </nav>
      ) : (
        ""
      )}

      {user == null ? (
        <button
          id="login"
          onClick={() => {
            window.location = "/login";
          }}
        >
          Sign in
        </button>
      ) : (
        <div id="greet">Hi there, {user.details.name}</div>
      )}
    </header>
  );
};

export default Header;
