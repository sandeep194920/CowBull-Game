import React from "react";
import {
  Container,
  Frame,
  MainText,
  ButtonContainer,
  Button,
  SubText,
} from "./styles/wonLost";

export default function WonLostModal({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
}

WonLostModal.Frame = function WonLostModalFrame({ children, ...restProps }) {
  return <Frame {...restProps}> {children} </Frame>;
};

WonLostModal.MainText = function WonLostModalMainText({
  children,
  ...restProps
}) {
  return <MainText {...restProps}> {children} </MainText>;
};

WonLostModal.ButtonContainer = function WonLostModalButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}> {children} </ButtonContainer>;
};

WonLostModal.Button = function WonLostModalButton({ children, ...restProps }) {
  return <Button {...restProps}> {children} </Button>;
};

WonLostModal.SubText = function WonLostModalSubText({
  children,
  ...restProps
}) {
  return <SubText {...restProps}> {children} </SubText>;
};
