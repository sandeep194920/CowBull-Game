import React, { useContext } from "react";
import { GameContext } from "../App";
import { Modal, QuitRevealModal } from "../components";
import logo from "../logo.svg";
import { useHistory } from "react-router-dom";

export default function QuitRevealModalContainer() {
  const history = useHistory();
  const {
    hidden,
    showRevealModal,
    showQuitRevealModal,
    setShowQuitRevealModal,
    setShowRevealModal,
    revealIt,
    setRevealIt,
    gameType,
  } = useContext(GameContext);

  return (
    <Modal>
      <Modal.Overlay
        onClick={() => {
          setShowQuitRevealModal(false);
          setShowRevealModal(false);
          setRevealIt(false);
        }}
      />
      {/* different modal contents go here */}
      <Modal.Content>
        {/* in here, we get the actual component */}
        <QuitRevealModal>
          <QuitRevealModal.Frame>
            <QuitRevealModal.Logo src={logo} alt="Logo" />
            {(showQuitRevealModal || showRevealModal) && !revealIt && (
              <QuitRevealModal.MainText>
                Do you really want to {showQuitRevealModal && " quit"}
                {showRevealModal && "reveal"} ?
              </QuitRevealModal.MainText>
            )}
            {revealIt && (
              <>
                <QuitRevealModal.MainText>
                  Alright, the hidden {gameType} is
                  {/* <span style={{ color: "#ffa62b" }}>W H A L E</span> */}
                </QuitRevealModal.MainText>
                <QuitRevealModal.SubText>
                  {hidden.toUpperCase()}
                </QuitRevealModal.SubText>
              </>
            )}
          </QuitRevealModal.Frame>

          {revealIt ? (
            <QuitRevealModal.ButtonContainer>
              <QuitRevealModal.Button
                style={{ visibility: "hidden" }}
              ></QuitRevealModal.Button>
              <QuitRevealModal.Button
                onClick={() => {
                  setShowRevealModal(false);
                  setRevealIt(false);
                }}
              >
                OK
              </QuitRevealModal.Button>
            </QuitRevealModal.ButtonContainer>
          ) : (
            <QuitRevealModal.ButtonContainer>
              {showQuitRevealModal && (
                <QuitRevealModal.Button
                  onClick={() => {
                    // clears the local storage
                    localStorage.setObj("userInputs", []);
                    history.push("/");
                    setShowQuitRevealModal(false);
                  }}
                >
                  Quit
                </QuitRevealModal.Button>
              )}
              {showRevealModal && (
                <QuitRevealModal.Button
                  onClick={() => {
                    localStorage.setObj("userInputs", []);
                    setRevealIt(true);
                    history.push("/");
                  }}
                >
                  Reveal
                </QuitRevealModal.Button>
              )}
              <QuitRevealModal.Button
                onClick={() => {
                  setShowQuitRevealModal(false);
                  setShowRevealModal(false);
                }}
              >
                Play On
              </QuitRevealModal.Button>
            </QuitRevealModal.ButtonContainer>
          )}
        </QuitRevealModal>
      </Modal.Content>
    </Modal>
  );
}
