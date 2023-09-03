import "./App.css";
import TopNav from "./components/topnav/topnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Manage from "./pages/Manage/manage";
import Advertise from "./pages/Advertise/advertise";
import CondominiumDetails from "./pages/Advertise/condominiumdetails";
import CheckoutModal from "./pages/Advertise/advertisecomponents/checkoutmodal";
import ManagePropertyIndex from "./pages/Advertise/manageproperty";
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
          <Route
            path="/condominiumdetails"
            exact
            component={CondominiumDetails}
          />
          <Route path="/checkoutmodal" exact component={CheckoutModal} />
          <Route
            path="/managepropertyindex"
            exact
            component={ManagePropertyIndex}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
