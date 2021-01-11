import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { Context } from "./Context/GlobalState";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  const { user } = useContext(Context);

  return user === null ? (
    <Login />
  ) : (
    <div className="app">
      <Router>
        <Sidebar />
        <Switch>
          <PrivateRoute path="/rooms/:id" component={Chat} user={user} />
          <PrivateRoute path="/" exact component={HomeScreen} user={user} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
