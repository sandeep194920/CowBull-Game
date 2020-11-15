import React, { useContext } from "react";
import { GameContext } from "../App";
import { Modal, QuitModal } from "../components";
import logo from "../logo.svg";

export default function QuitModalContainer() {
  const { setShowQuitModal } = useContext(GameContext);
  return (
    <Modal style={{ color: "white" }}>
      <Modal.Overlay onClick={() => setShowQuitModal(false)} />
      {/* different modal contents go here */}
      <Modal.Content>
        {/* in here, we get the actual component */}
        <QuitModal>
          <QuitModal.Frame>
            <QuitModal.Logo src={logo} alt="Logo" />
            <QuitModal.MainText>Do you really want to quit?</QuitModal.MainText>
          </QuitModal.Frame>
          <QuitModal.ButtonContainer>
            <QuitModal.Button>Quit</QuitModal.Button>
            <QuitModal.Button>Play On</QuitModal.Button>
          </QuitModal.ButtonContainer>
        </QuitModal>
      </Modal.Content>
    </Modal>
  );
}
