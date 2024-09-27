import React from "react";
import gsap from "gsap";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import How from "./pages/How";
import NewYork from "./pages/NewYork";
import California from "./pages/California";
import Italy from "./pages/Italy";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  gsap.to("body", 0, { css: { visibility: "visible" } });
  return (
    <Router basename="/">
      <div className="App">
        <Nav />
        <Switch>
          {/* <Home /> */}
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/how" exact component={How} />
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
