import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Router>
        <Switch>
          <Route path="/rooms/:id">
            <Chat />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
