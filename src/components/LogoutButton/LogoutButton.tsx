import { useUserActionsDispatch } from "../../common/hooks/useActions";

import "./LogoutButton.scss";

const LogoutButton = () => {
  const { logOutUser } = useUserActionsDispatch();

  //disconnect wallet
  const handleLogout = () => {
    logOutUser();
  };

  return (
    <button className="logoutButton" onClick={handleLogout}>
      Disconnect Wallet
    </button>
  );
};

export default LogoutButton;
