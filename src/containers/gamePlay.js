import React, { useContext, useEffect } from "react";
import { GamePlay } from "../components";
import logo from "../logo.svg";
import { GameContext } from "../App";
import GameLogic from "../gameLogic";

export default function GamePlayContainer() {
  const {
    gameType,
    level,
    letters,
    setShowQuitRevealModal,
    setShowRevealModal,
    setShowUserInputModal,
    myChoices,
    newGame,
    hiddenWord,
  } = useContext(GameContext);

  // const res = "00";
  // const = { cow: 1, bull: 0 };
  //reload the window to clear cached words/numbers from previous game
  useEffect(() => {
    console.log("new game -> ", newGame);
    if (newGame) {
      window.location.reload();
    }
  }, [newGame]);

  // as soon as the Game Play page opens the user input choice opens
  useEffect(() => {
    if (myChoices.length === 0) {
      setShowUserInputModal(true);
    }
  }, [myChoices, setShowUserInputModal]);

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
              14
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
            const result = GameLogic(hiddenWord, myChoice);
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
                  <span style={{ color: "#cad315" }}>{result.bull}B</span>{" "}
                  &nbsp;
                  <span style={{ color: "#e4e978" }}>{result.cow}C</span>
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
        <GamePlay.Button onClick={() => setShowRevealModal(true)} reveal>
          Reveal Word
        </GamePlay.Button>
        <GamePlay.Button onClick={() => setShowUserInputModal(true)} guess>
          Guess Next Word
        </GamePlay.Button>
        <GamePlay.Button onClick={() => setShowQuitRevealModal(true)} quit>
          Quit
        </GamePlay.Button>
      </GamePlay.ButtonContainer>
    </GamePlay>
  );
}
