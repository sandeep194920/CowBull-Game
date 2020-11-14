import React from "react";
import {
  Container,
  Frame,
  MainText,
  SubText,
  WordContainer,
  AttemptsContainer,
  AttemptWrapper,
  AttemptNumber,
  LettersContainer,
  LetterContainer,
  AttemptResult,
  ButtonContainer,
  Button,
} from "./styles/gamePlay";
import { GamePlayPageLogo as Logo } from "../../commonStyles/logo";

export default function GamePlay({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

GamePlay.Frame = function GamePlayFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children} </Frame>;
};

GamePlay.WordContainer = function GamePlayWordContainer({
  children,
  ...restProps
}) {
  return <WordContainer {...restProps}>{children} </WordContainer>;
};

GamePlay.MainText = function GamePlayMainText({ children, ...restProps }) {
  return <MainText {...restProps}>{children} </MainText>;
};

GamePlay.SubText = function GamePlaySubText({ children, ...restProps }) {
  console.log({ ...restProps });
  return <SubText {...restProps}>{children}</SubText>;
};

GamePlay.Logo = function GamePlayLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

GamePlay.AttemptsContainer = function GamePlayAttemptsContainer({
  children,
  ...restProps
}) {
  return <AttemptsContainer {...restProps}>{children} </AttemptsContainer>;
};

GamePlay.AttemptWrapper = function GamePlayAttemptWrapper({
  children,
  ...restProps
}) {
  return <AttemptWrapper {...restProps}>{children} </AttemptWrapper>;
};

GamePlay.AttemptNumber = function GamePlayAttemptNumber({
  children,
  ...restProps
}) {
  return <AttemptNumber {...restProps}>{children} </AttemptNumber>;
};

GamePlay.LettersContainer = function GamePlayLettersContainer({
  children,
  ...restProps
}) {
  return <LettersContainer {...restProps}>{children} </LettersContainer>;
};

GamePlay.LetterContainer = function GamePlayLetterContainer({
  children,
  ...restProps
}) {
  return <LetterContainer {...restProps}>{children} </LetterContainer>;
};

GamePlay.AttemptResult = function GamePlayAttemptResult({
  children,
  ...restProps
}) {
  return <AttemptResult {...restProps}>{children} </AttemptResult>;
};

GamePlay.ButtonContainer = function GamePlayButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

GamePlay.Button = function GamePlayButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
