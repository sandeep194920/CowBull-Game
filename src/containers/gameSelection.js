import React, { useContext } from "react";
import { GameSelection } from "../components";
import logo from "../logo.svg";
import { GameContext } from "../App";
import { useHistory } from "react-router-dom";

export default function GameSelectionContainer() {
  const { gameType } = useContext(GameContext);
  const history = useHistory();

  return (
    <GameSelection>
      <GameSelection.Frame>
        <GameSelection.Logo
          onClick={() => history.push("/")}
          src={logo}
          alt="Logo"
        />
        <GameSelection.MainText>
          Select <span style={{ color: "#ffa62b" }}>{gameType} </span>Game Type
        </GameSelection.MainText>
      </GameSelection.Frame>

      <GameSelection.ButtonContainer
        // onChange={({ target }) => setLevel(target.value)}
        flexDirection="row"
      >
        <GameSelection.SelectButton
          type="radio"
          id="easy"
          value="Easy"
          name="level"
        />
        <GameSelection.SelectLabel htmlFor="easy">
          Easy
        </GameSelection.SelectLabel>
        <GameSelection.SelectButton
          type="radio"
          id="medium"
          value="Medium"
          name="level"
        />
        <GameSelection.SelectLabel htmlFor="medium">
          Medium
        </GameSelection.SelectLabel>

        <GameSelection.SelectButton
          type="radio"
          id="hard"
          value="Hard"
          name="level"
        />
        <GameSelection.SelectLabel htmlFor="hard">
          Hard
        </GameSelection.SelectLabel>
      </GameSelection.ButtonContainer>

      <GameSelection.ButtonContainer
        // onChange={({ target }) => setLevel(target.value)}
        flexDirection="row"
        shrinkable
      >
        <GameSelection.SelectButton
          type="radio"
          id="3letters"
          value="3 Letters"
          name="letters"
        />
        <GameSelection.SelectLabel column htmlFor="3letters">
          3 Letters
        </GameSelection.SelectLabel>
        <GameSelection.SelectButton
          type="radio"
          id="4letters"
          value="4 Letters"
          name="letters"
        />
        <GameSelection.SelectLabel column htmlFor="4letters">
          4 Letters
        </GameSelection.SelectLabel>
        <GameSelection.SelectButton
          type="radio"
          id="5letters"
          value="5 Letters"
          name="letters"
        />
        <GameSelection.SelectLabel column htmlFor="5letters">
          5 Letters
        </GameSelection.SelectLabel>
        <GameSelection.SelectButton
          type="radio"
          id="6letters"
          value="6 Letters"
          name="letters"
        />
        <GameSelection.SelectLabel column htmlFor="6letters">
          6 Letters
        </GameSelection.SelectLabel>
      </GameSelection.ButtonContainer>
      <GameSelection.ButtonContainer confirm>
        <GameSelection.Button play>PLAY</GameSelection.Button>
        <GameSelection.Button onClick={history.goBack}>
          BACK
        </GameSelection.Button>
      </GameSelection.ButtonContainer>
    </GameSelection>
  );
}
