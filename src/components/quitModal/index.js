import React from "react";
import {
  Container,
  Frame,
  MainText,
  ButtonContainer,
  Button,
} from "./styles/quitModal";
import { QuitPageLogo as Logo } from "../../commonStyles/logo";

export default function QuitModal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

QuitModal.Frame = function QuitMoalFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

QuitModal.Logo = function QuitMoalLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

QuitModal.MainText = function QuitMoalMainText({ children, ...restProps }) {
  return <MainText {...restProps}>{children}</MainText>;
};

QuitModal.ButtonContainer = function QuitMoalButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

QuitModal.Button = function QuitMoalButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
