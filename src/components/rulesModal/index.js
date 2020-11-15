import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Overlay,
  Content,
  Frame,
  MainText,
  InfoText,
  SubText,
  WordContainer,
  ExampleContainer,
  Button,
} from "./styles/rulesModal";
import { RulesPageLogo } from "../../commonStyles/logo";

export default function RulesModal({ children, ...restProps }) {
  return ReactDOM.createPortal(
    <Container {...restProps}>{children}</Container>,
    document.body
  );
}

RulesModal.Overlay = function RulesModalOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

RulesModal.Frame = function RulesModalFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

RulesModal.Logo = function RulesModalLogo({ ...restProps }) {
  return <RulesPageLogo {...restProps} />;
};

RulesModal.Content = function RulesModalContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

RulesModal.MainText = function RulesModalMainText({ children, ...restProps }) {
  return <MainText {...restProps}>{children}</MainText>;
};

RulesModal.InfoText = function RulesIModalnfoText({ children, ...restProps }) {
  return <InfoText {...restProps}>{children}</InfoText>;
};

RulesModal.SubText = function RulesModalSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

RulesModal.WordContainer = function RulesModalWordContainer({
  children,
  ...restProps
}) {
  return <WordContainer {...restProps}>{children}</WordContainer>;
};

RulesModal.ExampleContainer = function RulesModalExampleContainer({
  children,
  ...restProps
}) {
  return <ExampleContainer {...restProps}>{children}</ExampleContainer>;
};

RulesModal.Button = function RulesModalButton({
  children,
  btnText,
  ...restProps
}) {
  return (
    <Button btnText={btnText} {...restProps}>
      {children}
    </Button>
  );
};
