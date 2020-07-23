import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NewYork from "./pages/NewYork";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Home /> */}
          <Route path="/" exact component={Home} />
          <Route path="/newyork" exact component={NewYork} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
