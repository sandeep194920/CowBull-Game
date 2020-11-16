import React, { useContext } from "react";
import { GameContext } from "../App";
import { Modal, UserInputModal } from "../components";
import logo from "../logo.svg";

export default function UserInputModalContainer() {
  const { gameType, setShowUserInputModal } = useContext(GameContext);
  return (
    <Modal>
      <Modal.Overlay onClick={() => setShowUserInputModal(false)} />
      <Modal.Content>
        <UserInputModal>
          <UserInputModal.Frame>
            <UserInputModal.Logo src={logo} alt="Logo" />
            <UserInputModal.MainText>
              Please input your{" "}
              <span style={{ color: "#ffa62b" }}>{gameType}</span>
            </UserInputModal.MainText>
            <UserInputModal.Subtext>
              Attempt&nbsp; <span style={{ color: "#ffa62b" }}>14</span>
            </UserInputModal.Subtext>
          </UserInputModal.Frame>
          <UserInputModal.Input type="text" value="Hello" />
          <UserInputModal.ButtonContainer>
            <UserInputModal.Button> Confirm </UserInputModal.Button>
            <UserInputModal.Button onClick={() => setShowUserInputModal(false)}>
              {" "}
              Cancel{" "}
            </UserInputModal.Button>
          </UserInputModal.ButtonContainer>
        </UserInputModal>
      </Modal.Content>
    </Modal>
  );
}
