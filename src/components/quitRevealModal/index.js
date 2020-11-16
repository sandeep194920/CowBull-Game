import React from "react";
import {
  Container,
  Frame,
  MainText,
  ButtonContainer,
  Button,
} from "./styles/quitRevealModal";
import { QuitPageLogo as Logo } from "../../commonStyles/logo";

export default function QuitRevealModal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

QuitRevealModal.Frame = function QuitRevealModal({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

QuitRevealModal.Logo = function QuitRevealModal({ ...restProps }) {
  return <Logo {...restProps} />;
};

QuitRevealModal.MainText = function QuitRevealModalMainText({
  children,
  ...restProps
}) {
  return <MainText {...restProps}>{children}</MainText>;
};

QuitRevealModal.ButtonContainer = function QuitRevealModalButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

QuitRevealModal.Button = function QuitRevealModalButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children}</Button>;
};
