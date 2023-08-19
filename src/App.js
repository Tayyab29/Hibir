import "./App.css";
import TopNav from "./components/topnav/topnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/Home/home";
import manage from "./pages/Manage/manage";
// import notfound from "./components/NotFound/notfound";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Switch>
          {/* <Route component={notfound} /> */}
          {/* <Route path="*" component={home} /> */}
          <Route path="/" exact component={home} />
          <Route path="/manage" exact component={manage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
