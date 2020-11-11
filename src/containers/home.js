import React, { useContext } from "react";
import { Home } from "../components";
import logo from "../logo.svg";
import { GameContext } from "../App";
import { useHistory } from "react-router-dom";

export default function HomeContainer({ setShowRules }) {
  const { setGameType } = useContext(GameContext);
  const history = useHistory();

  const gameHandler = (game) => {
    if (game === "Word") {
      setGameType("Word");
    } else {
      setGameType("Number");
    }
    history.push("/select");
  };
  return (
    <Home>
      <Home.Frame>
        <Home.Logo src={logo} alt="Logo" />
        <Home.WordContainer>
          <Home.MainText> Bull</Home.MainText>
          <Home.Subtitle> Guess me if you can</Home.Subtitle>
        </Home.WordContainer>
      </Home.Frame>
      <Home.ButtonContainer>
        <Home.Button onClick={() => gameHandler("Word")}>
          Let's Play Word
        </Home.Button>
        <Home.Button onClick={() => gameHandler("Number")}>
          Let's Play Number
        </Home.Button>
        <Home.ButtonLink setShowRules={setShowRules}>
          How to Play?
        </Home.ButtonLink>
      </Home.ButtonContainer>
    </Home>
  );
}
