import React, { useContext } from "react";
import { GameContext } from "../App";
import { Rules } from "../components";
import logo from "../logo.svg";

export default function RulesContainer() {
  const { setShowRules } = useContext(GameContext);
  return (
    <Rules>
      <Rules.Overlay onClick={() => setShowRules(false)} />
      <Rules.Content>
        <Rules.Frame>
          <Rules.Logo src={logo} alt="Logo" />
          <Rules.MainText>How to Play?</Rules.MainText>
        </Rules.Frame>
        <Rules.InfoText>
          You need to guess the
          <span style={{ fontWeight: "bold" }}> hidden word or number </span>
          in specific number of attempts. The number of attempts depends on the
          difficulty level selected. The number or word can be of length 3 to 7
          based on your game selection.
          <span style={{ fontWeight: "bold" }}>
            &nbsp;A letter can’t be repeated in a Word or Number combination
          </span>
          .
        </Rules.InfoText>
        <Rules.WordContainer>
          <Rules.SubText>
            Examples shown below for 4 letter word - CAKE
          </Rules.SubText>
          <Rules.SubText>
            <span style={{ color: "red" }}>NOT ALLOWED TYPES </span>
          </Rules.SubText>
          <Rules.SubText>
            <span
              style={{ textDecoration: "line-through", fontWeight: "bold" }}
            >
              E <span style={{ color: "red" }}>G G</span> S
            </span>
          </Rules.SubText>
          <Rules.SubText>
            <span
              style={{ textDecoration: "line-through", fontWeight: "bold" }}
            >
              1 3 <span style={{ color: "red" }}>2 2</span>
            </span>
          </Rules.SubText>
        </Rules.WordContainer>
        <Rules.WordContainer>
          <Rules.ExampleContainer>
            <Rules.SubText style={{ fontWeight: "bold" }}>
              Example 1
            </Rules.SubText>
            <Rules.SubText>
              Hidden Word &nbsp; &nbsp;&nbsp;
              <span style={{ color: "#ffa62b" }}>C A</span> K E
            </Rules.SubText>
            <Rules.SubText>
              Guessed Word &nbsp;&nbsp;
              <span style={{ color: "#ffa62b" }}>C A</span> L F &nbsp; &nbsp;{" "}
              <span style={{ color: "#ffa62b", fontWeight: "bold" }}>2 B</span>
            </Rules.SubText>
            <Rules.SubText style={{ fontSize: "0.8em" }}>
              Two letters matched here in exact positions, so&nbsp;&nbsp;
              <span style={{ color: "#ffa62b", fontWeight: "bold" }}>
                2 BULLS
              </span>
            </Rules.SubText>
          </Rules.ExampleContainer>
          <Rules.ExampleContainer>
            <Rules.SubText style={{ fontWeight: "bold" }}>
              Example 2
            </Rules.SubText>
            <Rules.SubText>
              Hidden Word &nbsp; &nbsp;&nbsp;C A{" "}
              <span style={{ color: "#ffa62b" }}>K</span> E
            </Rules.SubText>
            <Rules.SubText>
              Guessed Word &nbsp;&nbsp;
              <span style={{ color: "#ffa62b" }}>K</span> I N G &nbsp; &nbsp;{" "}
              <span style={{ color: "#ffa62b", fontWeight: "bold" }}>1 C</span>
            </Rules.SubText>
            <Rules.SubText style={{ fontSize: "0.8em" }}>
              One letter matched here, but in different position, so{" "}
              <span style={{ color: "#ffa62b", fontWeight: "bold" }}>
                1 Cow
              </span>
            </Rules.SubText>
          </Rules.ExampleContainer>
        </Rules.WordContainer>
        <Rules.Button onClick={() => setShowRules(false)}>OK</Rules.Button>
      </Rules.Content>
    </Rules>
  );
}
