import "./App.css";

import Footer from "./component/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feed from "./pages/Feed";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App relative min-h-screen pb-10 bg-gray-100">
      <Router>
        <Route exact path="/">
          <Home />
          <Feed />
          <Footer />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
