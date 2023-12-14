import { useContext, useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect, useHistory } from "react-router-dom";

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
import { fetchNotificationCount } from "./services/notification";
import { mainViewState, onNotificationCount } from "./redux/main-view";

function App() {
  const dispatch = useDispatch();
  const socketContext = useContext(SocketContext);
  const history = useHistory();

  const { user } = useSelector(loginState);
  const { screens } = useSelector(mainViewState);

  // Handler
  const redirectToLogin = () => {
    return <Redirect to="/" />;
  };

  const getNotificationCount = async (id) => {
    try {
      const { data } = await fetchNotificationCount({
        id: id,
      });
      if (data?.status) {
        dispatch(onNotificationCount(data?.count));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserDetailsData = async () => {
      try {
        if (localStorage.getItem("accessToken")) {
          const res = await getUserDetails();
          dispatch(setUser(res?.data));
          // getNotificationCount(res?.data?._id);
          socketContext.createSocketInstance(res?.data?._id);
          socketContext.setUserId(res?.data?._id);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetailsData();
  }, []);

  useEffect(() => {
    if (user) {
      getNotificationCount(user._id);
    }
  }, [user, screens.notification.isMutated]);

  return (
    <>
      <Router>
        <TopNav />
        <Route path="/" exact component={Home} />
        <Route path="/" component={redirectToLogin} exact />
        <Route path="/manage" component={Manage} exact />

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
      </Router>
    </>
  );
}

export default App;
