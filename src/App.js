// import react from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Dealer from "./components/Dealer";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Products} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/dealer" component={Dealer} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
