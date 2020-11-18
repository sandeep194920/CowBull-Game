import React, { useContext } from "react";
import { GamePlay } from "../components";
import logo from "../logo.svg";
import { GameContext } from "../App";

export default function GamePlayContainer() {
  const {
    gameType,
    level,
    letters,
    setShowQuitRevealModal,
    setShowRevealModal,
    setShowUserInputModal,
  } = useContext(GameContext);

  const res = "00";

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
        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>
        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>2.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>3.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult
            style={{
              color: res.includes("C")
                ? "red"
                : res.includes("B")
                ? "blue"
                : "orange",
            }}
          >
            {res}
          </GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>
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
