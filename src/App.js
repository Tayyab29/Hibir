import { useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

// Components
import Home from "./pages/Home/home";
import Advertise from "./pages/Advertise";
import Manage from "./pages/Manage/manage";
import TopNav from "./components/topnav/topnav";
import AccountsIndex from "./pages/Accounts/accounts";
import ManagePropertyIndex from "./pages/Advertise/manageproperty";
import CondominiumDetails from "./pages/Advertise/condominiumdetails";
import SearchByPropertyIndex from "./pages/Home/searchpropertycomponent";
import CheckoutModal from "./pages/Advertise/advertisecomponents/checkoutmodal";

// Redux
import { loginState, setUser } from "./redux/login";
import { useDispatch, useSelector } from "react-redux";

// Routes
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedRouteAuth } from "./ProtectedRouteAuth";

// Services
import { getUserDetails } from "./services/users";

// Styles
import "./App.css";

function App() {
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
        <ProtectedRoute path="/accounts" exact>
          <AccountsIndex />
        </ProtectedRoute>
        {/* <Route path="/advertise" exact component={Advertise} /> */}
        <Route path="/condominiumdetails" exact component={CondominiumDetails} />
        <Route path="/checkoutmodal" exact component={CheckoutModal} />
        <Route path="/managepropertyindex" exact component={ManagePropertyIndex} />
        <Route path="/searchbypropertyindex" exact component={SearchByPropertyIndex} />
        {/* <Route path="/accounts" exact component={AccountsIndex} /> */}
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
