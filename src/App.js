import { Route, useLocation, BrowserRouter as Router, Redirect } from "react-router-dom";

// Components
import Home from "./pages/Home/home";
import Manage from "./pages/Manage/manage";
import TopNav from "./components/topnav/topnav";
import Advertise from "./pages/Advertise";
import ManagePropertyIndex from "./pages/Advertise/manageproperty";
import CondominiumDetails from "./pages/Advertise/condominiumdetails";
import SearchByPropertyIndex from "./pages/Home/searchpropertycomponent";
import CheckoutModal from "./pages/Advertise/advertisecomponents/checkoutmodal";

// Styles
import "./App.css";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedRouteAuth } from "./ProtectedRouteAuth";
import { useEffect } from "react";
import { getUserDetails } from "./services/users";
import { useDispatch, useSelector } from "react-redux";
import { loginState, setUser } from "./redux/login";
// import notfound from "./components/NotFound/notfound";

function App() {
  const { user } = useSelector(loginState);

  const dispatch = useDispatch();

  // Handler
  const redirectToLogin = () => {
    return <Redirect to="/" />;
  };

  useEffect(() => {
    const getUserDetailsData = async () => {
      try {
        if (localStorage.getItem("accessToken")) {
          const res = await getUserDetails();
          dispatch(setUser(res?.data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetailsData();
  }, []);

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
