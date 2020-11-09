import React from "react";
import ReactDOM from "react-dom";
import { Container, Overlay, Content, Frame } from "./styles/rules";
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
