import "./App.css";
import TopNav from "./components/topnav/topnav";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home";
import home from "./pages/Home/home";
// import Reports from "./pages/Reports";
// import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Switch>
          <Route path="/" exact component={home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
