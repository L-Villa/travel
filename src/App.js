import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NewYork from "./pages/NewYork";
import California from "./pages/California";
// import Italy from "./pages/Italy";
import Italy from "./pages/Italy";
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
          <Route path="/california" exact component={California} />
          <Route path="/italy" exact component={Italy} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
