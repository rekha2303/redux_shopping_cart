import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="about" component={About} />
      </Provider>
    </Router>
  );
}

export default App;
