import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminPanel from "./Components/AdminPanel";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const { loggedIn } = useSelector((state) => state);
  return (
    <div className="app">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <Switch>
              <Route exact path="/">
                {loggedIn ? <Redirect to="/admin" /> : (<Login /> )}
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/admin">
                <AdminPanel />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
