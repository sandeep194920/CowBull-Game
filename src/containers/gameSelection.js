import React, { useContext, useEffect, useState } from "react";
import { GameSelection } from "../components";
import logo from "../logo.svg";
import { GameContext } from "../App";
import { useHistory } from "react-router-dom";
import * as GAME from "../helpers/constants";
import { gameTypes as attemptsGetter } from "../helpers/gameTypes";

export default function GameSelectionContainer() {
  const {
    gameType,
    level,
    setLevel,
    letters,
    setLetters,
    setAttempts,
    setAttemptsPlayed,
    setHiddenWord,
  } = useContext(GameContext);
  const history = useHistory();
  const [levelSelected, setLevelSelected] = useState(null);
  const [lettersSelected, setLettersSelected] = useState(null);

  useEffect(() => {
    const randomWords = require("random-words");
    const noRepeatedLetters = require("no-repeated-letters");

    if (gameType === "Word") {
      let word = randomWords();
      while (word.length !== Number(letters) || !noRepeatedLetters(word)) {
        // the word shoild not exceed the length selected and it should not have repeated characters
        word = randomWords();
      }
      // console.log("I got my word and it is " + word);
      localStorage.setItem("hiddenWord", word);
      setHiddenWord(localStorage.getItem("hiddenWord"));
    } else if (gameType === "Number") {
      const numberSet = "0123456789";
      var stringLength = Number(letters);

      function pickRandom() {
        return numberSet[Math.floor(Math.random() * numberSet.length)];
      }

      let numbers = Array.apply(null, Array(stringLength))
        .map(pickRandom)
        .join("");

      while (
        numbers.length !== Number(letters) ||
        !noRepeatedLetters(numbers)
      ) {
        // the word shoild not exceed the length selected and it should not have repeated characters
        numbers = Array.apply(null, Array(stringLength))
          .map(pickRandom)
          .join("");
      }

      console.log(`The random numbers ${numbers}`);
      localStorage.setItem("hiddenWord", numbers);
      setHiddenWord(localStorage.getItem("hiddenWord"));
    }
  }, [gameType, setHiddenWord, letters]);

  const gamePlayHandler = () => {
    console.log(
      `The game type is ${gameType}, the level is ${level} and the length is ${letters}`
    );
    // get the attempts based on selection of difficulty level and letters
    // const attempts = attemptsGetter[`${letters}`][`${level}`];
    const attempts =
      attemptsGetter[`${Number(letters)}`][`${level.toLowerCase()}`][
        "attempts"
      ];
    console.log(attempts);

    setAttempts(localStorage.setItem("attempts", Number(attempts)));
    localStorage.setItem("attemptsPlayed", Number(0));
    setAttemptsPlayed(localStorage.getItem("attemptsPlayed"));

    history.push("/play");
  };

  const setLevelHandler = ({ target }) => {
    console.log(`The target value is ${target.value}`);
    localStorage.setItem(GAME.LEVEL, target.value);
    setLevel(localStorage.getItem(GAME.LEVEL));
  };

  const setLettersHandler = ({ target }) => {
    console.log(`The target value is ${target.value}`);
    localStorage.setItem(GAME.LETTERS, target.value);
    setLetters(localStorage.getItem(GAME.LETTERS));
  };
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
        onChange={setLevelHandler}
        flexDirection="row"
      >
        <GameSelection.SelectButton
          type="radio"
          id="easy"
          value="Easy"
          name="level"
        />
        <GameSelection.SelectLabel
          onClick={() => setLevelSelected(true)}
          htmlFor="easy"
        >
          Easy
        </GameSelection.SelectLabel>
        <GameSelection.SelectButton
          type="radio"
          id="medium"
          value="Medium"
          name="level"
        />
        <GameSelection.SelectLabel
          htmlFor="medium"
          onClick={() => setLevelSelected(true)}
        >
          Medium
        </GameSelection.SelectLabel>

        <GameSelection.SelectButton
          type="radio"
          id="hard"
          value="Hard"
          name="level"
        />
        <GameSelection.SelectLabel
          onClick={() => setLevelSelected(true)}
          htmlFor="hard"
        >
          Hard
        </GameSelection.SelectLabel>
      </GameSelection.ButtonContainer>

      <GameSelection.ButtonContainer
        onChange={setLettersHandler}
        flexDirection="row"
        shrinkable
      >
        <GameSelection.SelectButton
          type="radio"
          id="3letters"
          value="3"
          name="letters"
        />
        <GameSelection.SelectLabel
          onClick={() => setLettersSelected(true)}
          column
          htmlFor="3letters"
        >
          3 Letters
        </GameSelection.SelectLabel>
        <GameSelection.SelectButton
          type="radio"
          id="4letters"
          value="4"
          name="letters"
        />
        <GameSelection.SelectLabel
          onClick={() => setLettersSelected(true)}
          column
          htmlFor="4letters"
        >
          4 Letters
        </GameSelection.SelectLabel>
        <GameSelection.SelectButton
          type="radio"
          id="5letters"
          value="5"
          name="letters"
        />
        <GameSelection.SelectLabel
          onClick={() => setLettersSelected(true)}
          column
          htmlFor="5letters"
        >
          5 Letters
        </GameSelection.SelectLabel>
        <GameSelection.SelectButton
          type="radio"
          id="6letters"
          value="6"
          name="letters"
        />
        <GameSelection.SelectLabel
          onClick={() => setLettersSelected(true)}
          column
          htmlFor="6letters"
        >
          6 Letters
        </GameSelection.SelectLabel>
      </GameSelection.ButtonContainer>
      <GameSelection.ButtonContainer confirm>
        <GameSelection.Button
          play
          onClick={gamePlayHandler}
          disabled={levelSelected === null || lettersSelected === null}
        >
          PLAY
        </GameSelection.Button>
        <GameSelection.Button onClick={history.goBack}>
          BACK
        </GameSelection.Button>
      </GameSelection.ButtonContainer>
    </GameSelection>
  );
}
