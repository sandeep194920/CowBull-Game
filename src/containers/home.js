import React, { useContext } from "react";
import { Home } from "../components";
import logo from "../logo.svg";
import { GameContext } from "../App";
import { useHistory } from "react-router-dom";
import * as GAME from "../helpers/constants";

export default function HomeContainer() {
  const { setGameType, setShowRulesModal, setNewGame } = useContext(
    GameContext
  );
  const history = useHistory();

  const gameHandler = (game) => {
    if (game === "Word") {
      window.localStorage.setItem(GAME.GAME_TYPE, "Word");
    } else {
      window.localStorage.setItem(GAME.GAME_TYPE, "Number");
    }
    setGameType(localStorage.getItem(GAME.GAME_TYPE));
    // setting newGame to true because this helps to clear the window and reload the  gamePlay if the game is new to clear the cached words/numbers from the previous game
    setNewGame(true);
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
        <Home.ButtonLink setShowRulesModal={setShowRulesModal}>
          How to Play?
        </Home.ButtonLink>
      </Home.ButtonContainer>
    </Home>
  );
}
