import React from "react";
import {
  Container,
  WordContainer,
  ButtonContainer,
  Frame,
  MainText,
  Subtitle,
  Button,
  ButtonLink,
} from "./styles/home";

import { HomePageLogo as Logo } from "../../commonStyles/logo";

export default function Home({ children, setShowRules, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Frame = function HomeFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Home.WordContainer = function HomeWordContainer({ children, ...restProps }) {
  return <WordContainer {...restProps}>{children}</WordContainer>;
};

Home.ButtonContainer = function HomeButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

Home.Logo = function HomeLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Home.MainText = function HomeMainText({ children, ...restProps }) {
  return <MainText {...restProps}>{children}</MainText>;
};

Home.Subtitle = function HomeSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Home.Button = function HomeButton({ children, btnText, ...restProps }) {
  return (
    <Button btnText={btnText} {...restProps}>
      {children}
    </Button>
  );
};

Home.ButtonLink = function HomeButtonLink({
  children,
  showRules,
  setShowRules,
  path,
  btnText,
  ...restProps
}) {
  return (
    <ButtonLink onClick={() => setShowRules(true)} path={path} {...restProps}>
      {children}
    </ButtonLink>
  );
};
