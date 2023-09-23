import { Route, useLocation, BrowserRouter as Router, Redirect } from "react-router-dom";

// Components
import Home from "./pages/Home/home";
import Manage from "./pages/Manage/manage";
import TopNav from "./components/topnav/topnav";
import Advertise from "./pages/Advertise/advertise";
import ManagePropertyIndex from "./pages/Advertise/manageproperty";
import CondominiumDetails from "./pages/Advertise/condominiumdetails";
import SearchByPropertyIndex from "./pages/Home/searchpropertycomponent";
import CheckoutModal from "./pages/Advertise/advertisecomponents/checkoutmodal";

// Styles
import "./App.css";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedRouteAuth } from "./ProtectedRouteAuth";
// import notfound from "./components/NotFound/notfound";

function App() {
  const redirectToLogin = () => {
    return <Redirect to="/" />;
  };
  return (
    <>
      <Router>
        <TopNav />
        <Route path="/" exact component={Home} />
        <Route path="/" component={redirectToLogin} exact />
        <Route path="/manage" component={Manage} exact />

        {/* <Switch> */}
        {/* <Route component={notfound} /> */}
        {/* <Route path="*" component={home} /> */}
        <ProtectedRoute path="/advertise" exact>
          <Advertise />
        </ProtectedRoute>
        {/* <Route path="/advertise" exact component={Advertise} /> */}
        <Route path="/condominiumdetails" exact component={CondominiumDetails} />
        <Route path="/checkoutmodal" exact component={CheckoutModal} />
        <Route path="/managepropertyindex" exact component={ManagePropertyIndex} />
        <Route path="/searchbypropertyindex" exact component={SearchByPropertyIndex} />
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
