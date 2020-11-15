import React from "react";
import logo from "../logo.svg";

export default function QuitModalContainer() {
  return (
    <Modal style={{ color: "white" }}>
      <Modal.Overlay onClick={() => setShowModal(false)} />
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
