import { useSelector } from "../../store/store";
import { Outlet } from "react-router-dom";
import Home from "../../components/Home/Home";

//check if there is logged in user in state and redirect accordingly
const AuthRouteGuard = () => {
  const loggedIn = useSelector((state) => state.user.value.loggedIn);

  if (!loggedIn) {
    return <Home locked={true} />;
  } else {
    return <Outlet />;
  }
};

export default AuthRouteGuard;
