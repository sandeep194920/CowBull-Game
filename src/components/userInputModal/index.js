import React from "react";
import {
  Container,
  Frame,
  MainText,
  ButtonContainer,
  Button,
  Input,
  Subtext,
  LettersLeft,
} from "./styles/userInputModal";

import { UserInputModalLogo as Logo } from "../../commonStyles/logo";

export default function UserInputModal({ children, ...restProps }) {
  return <Container {...restProps}>{children} </Container>;
}

UserInputModal.Frame = function UserInputModalFrame({
  children,
  ...restProps
}) {
  return <Frame {...restProps}>{children}</Frame>;
};

UserInputModal.Logo = function UserInputModalLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

UserInputModal.MainText = function UserInputModalMainText({
  children,
  ...restProps
}) {
  return <MainText {...restProps}>{children} </MainText>;
};

UserInputModal.Input = function UserInputModalInput({
  children,
  ...restProps
}) {
  return (
    <>
      <Input {...restProps} />
      <LettersLeft>1/6</LettersLeft>
    </>
  );
};

UserInputModal.ButtonContainer = function UserInputModalButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children} </ButtonContainer>;
};

UserInputModal.Button = function UserInputModalButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children} </Button>;
};

UserInputModal.Subtext = function UserInputModalSubtext({
  children,
  ...restProps
}) {
  return <Subtext {...restProps}>{children} </Subtext>;
};
