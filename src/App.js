import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home/Home.js";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
