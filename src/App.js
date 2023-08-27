import "./App.css";
import TopNav from "./components/topnav/topnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Manage from "./pages/Manage/manage";
import Advertise from "./pages/Advertise/advertise";
// import notfound from "./components/NotFound/notfound";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Switch>
          {/* <Route component={notfound} /> */}
          {/* <Route path="*" component={home} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/manage" exact component={Manage} />
          <Route path="/advertise" exact component={Advertise} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
