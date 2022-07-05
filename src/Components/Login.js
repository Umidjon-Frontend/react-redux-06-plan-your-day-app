import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsKeyFill } from "react-icons/bs";
import { useHttp } from "../useHttp";
import { useSelector, useDispatch } from "react-redux";
import { loadLogin, isLoggedIn } from "../Redux/action";
import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loggedIn } = useSelector((state) => state);
  const { request } = useHttp();

  const dispatch = useDispatch();

  useEffect(() => {
    request("http://localhost:3001/login").then((data) =>
      dispatch(loadLogin(data))
    );
  }, []);

  const loginSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    if (!username || !password) {
      return toast.warning("Please fill in all fields!");
    }
    for (let i = 0; i < login.length; i++) {
      if (login[i].username === username && login[i].password === password) {
        return dispatch(isLoggedIn(true));
      } else {
        toast.error("Iltimos Login va Passwordni qaytadan kiriting!");
        return dispatch(isLoggedIn(false));
      }
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 mx-auto d-flex justify-content-center align-items-center vh-100">
        <div className="shadow p-4 rounded">
          <h1 className="text-center mb-3 text-uppercase">Log in</h1>
          <form onSubmit={loginSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <BsFillPersonFill />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <BsKeyFill />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <button className="btn btn-success w-100 text-uppercase">
                Log in
              </button>
            </div>
            <div className="input-group w-100">
              <Link to="/dashboard" className="link-primary mx-auto">
                Dashboard
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
