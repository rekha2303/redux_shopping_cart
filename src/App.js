import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
      </Provider>
    </Router>
  );
}

export default App;
