import React from "react";
import { GameSelectionPageLogo } from "../../commonStyles/logo";
import {
  Container,
  Frame,
  MainText,
  SelectButton,
  SelectLabel,
  ButtonContainer,
  Button,
} from "./styles/gameSelection";

export default function GameSelection({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

GameSelection.Logo = function GameSelectionLogo({ ...restProps }) {
  return <GameSelectionPageLogo {...restProps} />;
};

GameSelection.Frame = function GamSelectionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

GameSelection.MainText = function GameSelectionMainText({
  children,
  ...restProps
}) {
  return <MainText {...restProps}>{children}</MainText>;
};

GameSelection.Button = function GameSelectionButton({ btnText, ...restProps }) {
  return <Button btnText={btnText} {...restProps} />;
};

// selectButton is the radio button
//select lanel is the label

GameSelection.SelectButton = function GameSelectionSelectButton({
  children,
  ...restProps
}) {
  return (
    <>
      <SelectButton {...restProps} />
    </>
  );
};

GameSelection.SelectLabel = function GameSelectionSelectLabel({
  children,
  ...restProps
}) {
  return <SelectLabel {...restProps}>{children}</SelectLabel>;
};

GameSelection.ButtonContainer = function HomeButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};
