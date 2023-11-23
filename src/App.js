import { useContext, useEffect } from "react";
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
import BillingHistory from "./pages/BillingHistory";

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
import ChatIndex from "./pages/Chat";

// import "primereact/resources/themes/saga-blue/theme.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { SocketContext } from "./context/socket";
import AllProperties from "./pages/Properties";
import SingleProperty from "./pages/Properties/SingleProperty";

function App() {
  const dispatch = useDispatch();
  const socketContext = useContext(SocketContext);

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
          socketContext.createSocketInstance(res?.data?._id);
          socketContext.setUserId(res?.data?._id);
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
        <ProtectedRoute path="/condominiumdetails" exact>
          <CondominiumDetails />
        </ProtectedRoute>
        <ProtectedRoute path="/checkoutmodal" exact>
          <CheckoutModal />
        </ProtectedRoute>
        <ProtectedRoute path="/accounts" exact>
          <AccountsIndex />
        </ProtectedRoute>
        <ProtectedRoute path="/billinghistory" exact>
          <BillingHistory />
        </ProtectedRoute>
        <ProtectedRoute path="/manageproperty" exact>
          <ManagePropertyIndex />
        </ProtectedRoute>
        <ProtectedRoute path="/savedproperties" exact>
          <ManagePropertyIndex />
        </ProtectedRoute>
        <ProtectedRoute path="/searchbypropertyindex" exact>
          <SearchByPropertyIndex />
        </ProtectedRoute>
        <ProtectedRoute path="/chatindex" exact>
          <ChatIndex />
        </ProtectedRoute>
        <ProtectedRoute path="/allproperties" exact>
          <AllProperties />
        </ProtectedRoute>
        <ProtectedRoute path="/propertyById" exact>
          <SingleProperty />
        </ProtectedRoute>

        {/* <Route path="/advertise" exact component={Advertise} /> */}
        {/* <Route path="/condominiumdetails" exact component={CondominiumDetails} /> */}
        {/* <Route path="/checkoutmodal" exact component={CheckoutModal} /> */}
        {/* <Route path="/managepropertyindex" exact component={ManagePropertyIndex} /> */}
        {/* <Route path="/searchbypropertyindex" exact component={SearchByPropertyIndex} /> */}
        {/* <Route path="/accounts" exact component={AccountsIndex} /> */}
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
