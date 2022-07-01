import { Button, Modal } from "antd";
import { FC } from "react";

import { useUserActionsDispatch } from "../../common/hooks/useActions";

import { metamaskProps } from "./types/metamaskTypes";

import "antd/dist/antd.css";
import "./Metamask.scss";

const Metamask: FC<metamaskProps> = ({ locked }) => {
  const { logInUser } = useUserActionsDispatch();

  //login with Metamask
  const handleLogin = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const account = accounts[0];

    if (account) {
      logInUser(account);
    }
  };

  return (
    <Modal
      title="Log In with Metamask"
      visible={locked}
      footer={[
        <Button key="submit" type="primary" onClick={handleLogin}>
          Login
        </Button>,
      ]}
    >
      <p>Please Log In with your Metamask wallet first.</p>
    </Modal>
  );
};

export default Metamask;
