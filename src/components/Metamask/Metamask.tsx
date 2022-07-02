import { Button, Modal } from "antd";
import { FC, useState } from "react";

import { useUserActionsDispatch } from "../../common/hooks/useActions";

import { metamaskProps } from "./types/metamaskTypes";

import "antd/dist/antd.css";
import "./Metamask.scss";

const Metamask: FC<metamaskProps> = ({ locked }) => {
  const { logInUser } = useUserActionsDispatch();
  const [error, setError] = useState(false);

  //login with Metamask
  const handleLogin = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const account = accounts[0];

      if (account) {
        logInUser(account);
      }
    } catch (error) {
      setError(true);
    }
  };

  const errorModal = () => {
    Modal.error({
      title: "Something went wrong",
      content: "Check if your Metamask wallet is on",
      onOk() {
        setError(false);
      },
    });
  };

  return (
    <>
      {!error ? (
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
      ) : (
        errorModal()
      )}
    </>
  );
};

export default Metamask;
