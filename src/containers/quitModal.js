import React, { useContext } from "react";
import { GameContext } from "../App";
import { Modal, QuitModal } from "../components";
import logo from "../logo.svg";
import { useHistory } from "react-router-dom";

export default function QuitModalContainer() {
  const history = useHistory();
  const {
    showRevealModal,
    showQuitModal,
    setShowQuitModal,
    setShowRevealModal,
    revealIt,
    setRevealIt,
  } = useContext(GameContext);

  return (
    <Modal style={{ color: "white" }}>
      <Modal.Overlay
        onClick={() => {
          setShowQuitModal(false);
          setShowRevealModal(false);
          setRevealIt(false);
        }}
      />
      {/* different modal contents go here */}
      <Modal.Content>
        {/* in here, we get the actual component */}
        <QuitModal>
          <QuitModal.Frame>
            <QuitModal.Logo src={logo} alt="Logo" />
            {(showQuitModal || showRevealModal) && !revealIt && (
              <QuitModal.MainText>
                Do you really want to {showQuitModal && " quit"}
                {showRevealModal && "reveal"} ?
              </QuitModal.MainText>
            )}
            {revealIt && (
              <QuitModal.MainText>
                Alright, the word is{" "}
                <span style={{ color: "#ffa62b" }}>W H A L E</span>
              </QuitModal.MainText>
            )}
          </QuitModal.Frame>

          {revealIt ? (
            <QuitModal.ButtonContainer>
              <QuitModal.Button
                style={{ visibility: "hidden" }}
              ></QuitModal.Button>
              <QuitModal.Button
                onClick={() => {
                  setShowRevealModal(false);
                  setRevealIt(false);
                }}
              >
                OK
              </QuitModal.Button>
            </QuitModal.ButtonContainer>
          ) : (
            <QuitModal.ButtonContainer>
              {showQuitModal && <QuitModal.Button>Quit</QuitModal.Button>}
              {showRevealModal && (
                <QuitModal.Button
                  onClick={() => {
                    setRevealIt(true);
                    history.push("/");
                  }}
                >
                  Reveal
                </QuitModal.Button>
              )}
              <QuitModal.Button
                onClick={() => {
                  setShowQuitModal(false);
                  setShowRevealModal(false);
                }}
              >
                Play On
              </QuitModal.Button>
            </QuitModal.ButtonContainer>
          )}
        </QuitModal>
      </Modal.Content>
    </Modal>
  );
}
