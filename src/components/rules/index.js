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
} from "./styles/rules";
import { RulesPageLogo } from "../../commonStyles/logo";

export default function Rules({ children, ...restProps }) {
  return ReactDOM.createPortal(
    <Container {...restProps}>{children}</Container>,
    document.body
  );
}

Rules.Overlay = function RulesOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Rules.Frame = function RulesFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Rules.Logo = function RulesLogo({ ...restProps }) {
  return <RulesPageLogo {...restProps} />;
};

Rules.Content = function RulesContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Rules.MainText = function RulesMainText({ children, ...restProps }) {
  return <MainText {...restProps}>{children}</MainText>;
};

Rules.InfoText = function RulesInfoText({ children, ...restProps }) {
  return <InfoText {...restProps}>{children}</InfoText>;
};

Rules.SubText = function RulesSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Rules.WordContainer = function RulesWordContainer({ children, ...restProps }) {
  return <WordContainer {...restProps}>{children}</WordContainer>;
};

Rules.ExampleContainer = function RulesExampleContainer({
  children,
  ...restProps
}) {
  return <ExampleContainer {...restProps}>{children}</ExampleContainer>;
};

Rules.Button = function RulesButton({ children, btnText, ...restProps }) {
  return (
    <Button btnText={btnText} {...restProps}>
      {children}
    </Button>
  );
};
