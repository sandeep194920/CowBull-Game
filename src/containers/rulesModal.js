import React, { useContext } from "react";
import { GameContext } from "../App";
import { Modal, RulesModal } from "../components";
import logo from "../logo.svg";

export default function RulesModalContainer() {
  const { setShowRulesModal } = useContext(GameContext);

  return (
    <Modal>
      <Modal.Overlay onClick={() => setShowRulesModal(false)} />
      {/* different modal contents go here */}
      <Modal.Content>
        {/* in here, we get the actual component */}
        <RulesModal>
          <RulesModal.Frame>
            <RulesModal.Logo src={logo} alt="Logo" />
            <RulesModal.MainText>How to Play?</RulesModal.MainText>
          </RulesModal.Frame>
          <RulesModal.InfoText>
            You need to guess the
            <span style={{ fontWeight: "bold" }}> hidden word or number </span>
            in specific number of attempts. The number of attempts depends on
            the difficulty level selected. The number or word can be of length 3
            to 7 based on your game selection.
            <span style={{ fontWeight: "bold" }}>
              &nbsp;A letter can’t be repeated in a Word or Number combination
            </span>
            .
          </RulesModal.InfoText>
          <RulesModal.WordContainer>
            <RulesModal.SubText>
              Examples shown below for 4 letter word - CAKE
            </RulesModal.SubText>
            <RulesModal.SubText>
              <span style={{ color: "red" }}>NOT ALLOWED TYPES </span>
            </RulesModal.SubText>
            <RulesModal.SubText>
              <span
                style={{ textDecoration: "line-through", fontWeight: "bold" }}
              >
                E <span style={{ color: "red" }}>G G</span> S
              </span>
            </RulesModal.SubText>
            <RulesModal.SubText>
              <span
                style={{ textDecoration: "line-through", fontWeight: "bold" }}
              >
                1 3 <span style={{ color: "red" }}>2 2</span>
              </span>
            </RulesModal.SubText>
          </RulesModal.WordContainer>
          <RulesModal.WordContainer>
            <RulesModal.ExampleContainer>
              <RulesModal.SubText style={{ fontWeight: "bold" }}>
                Example 1
              </RulesModal.SubText>
              <RulesModal.SubText>
                Hidden Word &nbsp; &nbsp;&nbsp;
                <span style={{ color: "#ffa62b" }}>C A</span> K E
              </RulesModal.SubText>
              <RulesModal.SubText>
                Guessed Word &nbsp;&nbsp;
                <span style={{ color: "#ffa62b" }}>C A</span> L F &nbsp; &nbsp;{" "}
                <span style={{ color: "#ffa62b", fontWeight: "bold" }}>
                  2 B
                </span>
              </RulesModal.SubText>
              <RulesModal.SubText style={{ fontSize: "0.8em" }}>
                Two letters matched here in exact positions, so&nbsp;&nbsp;
                <span style={{ color: "#ffa62b", fontWeight: "bold" }}>
                  2 BULLS
                </span>
              </RulesModal.SubText>
            </RulesModal.ExampleContainer>
            <RulesModal.ExampleContainer>
              <RulesModal.SubText style={{ fontWeight: "bold" }}>
                Example 2
              </RulesModal.SubText>
              <RulesModal.SubText>
                Hidden Word &nbsp; &nbsp;&nbsp;C A{" "}
                <span style={{ color: "#ffa62b" }}>K</span> E
              </RulesModal.SubText>
              <RulesModal.SubText>
                Guessed Word &nbsp;&nbsp;
                <span style={{ color: "#ffa62b" }}>K</span> I N G &nbsp; &nbsp;{" "}
                <span style={{ color: "#ffa62b", fontWeight: "bold" }}>
                  1 C
                </span>
              </RulesModal.SubText>
              <RulesModal.SubText style={{ fontSize: "0.8em" }}>
                One letter matched here, but in different position, so{" "}
                <span style={{ color: "#ffa62b", fontWeight: "bold" }}>
                  1 Cow
                </span>
              </RulesModal.SubText>
            </RulesModal.ExampleContainer>
          </RulesModal.WordContainer>
          <RulesModal.Button onClick={() => setShowRulesModal(false)}>
            OK
          </RulesModal.Button>
        </RulesModal>
      </Modal.Content>
    </Modal>
  );
}
