import { Route } from "react-router-dom";

import Ballot from "./components/Ballot";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route to="/vote">
        <Ballot />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
