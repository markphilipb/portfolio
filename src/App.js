import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
