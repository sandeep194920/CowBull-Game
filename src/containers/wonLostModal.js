import React, { useContext } from "react";
import { GameContext } from "../App";
import { Modal, WonLostModal } from "../components";
// import { useHistory } from "react-router-dom";

export default function WonLostModalContainer() {
  const { setShowWonLostModal, wonTheGame, gameType, hidden } = useContext(
    GameContext
  );

  return (
    <Modal>
      <Modal.Overlay
        onClick={() => {
          setShowWonLostModal(false);
        }}
      />

      <Modal.Content>
        <WonLostModal>
          {wonTheGame ? (
            <WonLostModal.MainText>
              You're awesome{" "}
              <span aria-label="cool" role="img">
                😎
              </span>{" "}
              You guess it right and won the game{" "}
              <span aria-label="smile" role="img">
                😀
              </span>
            </WonLostModal.MainText>
          ) : (
            <WonLostModal.MainText>
              You're out of attempts{" "}
              <span aria-label="cry" role="img">
                🥲
              </span>{" "}
              Better luck next time{" "}
              <span aria-label="smile" role="img">
                😀
              </span>
            </WonLostModal.MainText>
          )}
          <WonLostModal.SubText>The {gameType} is</WonLostModal.SubText>
          <WonLostModal.SubText result="true">
            {hidden.toUpperCase()}
          </WonLostModal.SubText>
          <WonLostModal.ButtonContainer>
            <WonLostModal.Button onClick={() => setShowWonLostModal(false)}>
              OK
            </WonLostModal.Button>
          </WonLostModal.ButtonContainer>
        </WonLostModal>
      </Modal.Content>
    </Modal>
  );
}
