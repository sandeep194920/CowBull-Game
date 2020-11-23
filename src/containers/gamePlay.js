import React, { useContext, useEffect } from "react";
import { GamePlay } from "../components";
import logo from "../logo.svg";
import { GameContext } from "../App";
import GameLogic from "../gameLogic";
import { useHistory } from "react-router-dom";

export default function GamePlayContainer() {
  const {
    gameOver,
    setGameOver,
    attempts,
    attemptsPlayed,
    gameType,
    level,
    letters,
    setWonTheGame,
    setShowQuitRevealModal,
    setShowRevealModal,
    setShowUserInputModal,
    setShowWonLostModal,
    myChoices,
    newGame,
    hiddenWord,
  } = useContext(GameContext);

  const history = useHistory();
  //reload the window to clear cached words/numbers from previous game
  useEffect(() => {
    console.log("new game -> ", newGame);
    if (newGame) {
      window.location.reload();
    }
  }, [newGame]);

  // As soon as this page (gamePlay) opens, the user input modal should open for first time.
  // Checking !mychoices because, mychoices gets created in local storage only when the first word is entered. Since at this point there is no mychoices, I need to write this condition for input modal to open for first time
  useEffect(() => {
    if (!myChoices) localStorage.setObj("userInputs", []);
  }, [myChoices]);

  // as soon as the Game Play page opens the user input choice opens
  useEffect(() => {
    if (myChoices !== null && myChoices.length === 0) {
      setShowUserInputModal(true);
    }
  }, [myChoices, setShowUserInputModal]);

  // check for win
  useEffect(() => {
    console.log(`The hidden word is ${hiddenWord}`);
    if (myChoices !== null && myChoices.length > 0) {
      const checkAgainst = myChoices[myChoices.length - 1];
      const checkForWin = GameLogic(
        hiddenWord.toUpperCase(),
        checkAgainst.toUpperCase()
      );
      if (checkForWin.bull === 3) {
        setWonTheGame(true);
        setShowWonLostModal(true);
        setGameOver(true);
      }
      if (attempts === attemptsPlayed) {
        setWonTheGame(false);
        setShowWonLostModal(true);
        setGameOver(true);
      }
    }
  }, [
    myChoices,
    hiddenWord,
    setGameOver,
    setShowWonLostModal,
    setWonTheGame,
    attempts,
    attemptsPlayed,
  ]);

  const gameOverHandler = () => {
    history.push("/");
    localStorage.setObj("userInputs", []);
    setGameOver(false);
  };

  return (
    <GamePlay>
      <GamePlay.Frame>
        <GamePlay.Logo
          src={logo}
          alt="Logo"
          onClick={() => setShowQuitRevealModal(true)}
        />
        <GamePlay.WordContainer extraWidthRight>
          <GamePlay.SubText>
            Attempts Left &nbsp;
            <span
              style={{
                color: "#ffa62b",
                fontWeight: "bold",
              }}
            >
              {attempts - attemptsPlayed}
            </span>
          </GamePlay.SubText>
          <GamePlay.SubText>
            Hidden &nbsp;{" "}
            <span
              style={{
                color: "transparent",
                background: "#eeeded",
                opacity: 0.3,
                borderRadius: "20%",
                userSelect: "none",
                textShadow: "0 0 5px rgba(0,0,0,0.5)",
              }}
            >
              0000
            </span>
          </GamePlay.SubText>
        </GamePlay.WordContainer>
        <GamePlay.MainText>
          <span style={{ color: "#ffa62b" }}>{letters} </span> Letter{" "}
          <span style={{ color: "#ffa62b" }}>{gameType} </span>
        </GamePlay.MainText>
        {gameOver && (
          <GamePlay.SubText gameOver>
            The {gameType} is {hiddenWord.toUpperCase()}
          </GamePlay.SubText>
        )}
        <GamePlay.WordContainer difficulty>
          <GamePlay.SubText difficulty>
            <span style={{ color: "#ffa62b", fontWeight: "bold" }}>
              {level}
            </span>
          </GamePlay.SubText>
        </GamePlay.WordContainer>
      </GamePlay.Frame>

      <GamePlay.AttemptsContainer>
        {myChoices &&
          myChoices.map((myChoice, index) => {
            // word match logic here to give cows and bulls
            const result = GameLogic(
              hiddenWord.toUpperCase(),
              myChoice.toUpperCase()
            );

            const letters = [...myChoice];
            return (
              <GamePlay.AttemptWrapper key={index + myChoice}>
                <GamePlay.AttemptNumber>{index + 1}.</GamePlay.AttemptNumber>

                <GamePlay.LettersContainer>
                  {letters.map((letter, index) => (
                    <GamePlay.LetterContainer key={letter + index}>
                      {letter}
                    </GamePlay.LetterContainer>
                  ))}

                  {/* <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
                <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
                <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
                <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
                  N
                </GamePlay.LetterContainer>
                <GamePlay.LetterContainer>G</GamePlay.LetterContainer> */}
                </GamePlay.LettersContainer>

                {/* <GamePlay.AttemptResult>2B,3C</GamePlay.AttemptResult> */}
                <GamePlay.AttemptResult>
                  {/* <span style={{ color: "#cad315" }}>{result.bull}B</span>
                  <span style={{ color: "#e4e978" }}>{result.cow}C</span> */}
                  <GamePlay.SubText bull>{result.bull}B</GamePlay.SubText>
                  <GamePlay.SubText cow>{result.cow}C</GamePlay.SubText>
                </GamePlay.AttemptResult>
              </GamePlay.AttemptWrapper>
            );
          })}
        {/* <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper> */}
      </GamePlay.AttemptsContainer>

      <GamePlay.ButtonContainer>
        {gameOver ? (
          <GamePlay.Button onClick={gameOverHandler} reveal>
            New Game
          </GamePlay.Button>
        ) : (
          <GamePlay.Button onClick={() => setShowRevealModal(true)} reveal>
            Reveal Word
          </GamePlay.Button>
        )}
        <GamePlay.Button
          disabled={gameOver}
          onClick={() => setShowUserInputModal(true)}
          guess
        >
          Guess Next Word
        </GamePlay.Button>
        <GamePlay.Button onClick={() => setShowQuitRevealModal(true)} quit>
          Quit
        </GamePlay.Button>
      </GamePlay.ButtonContainer>
    </GamePlay>
  );
}
