import React from "react";
import { Home } from "../components/index.js";
import logo from "../logo.svg";

export default function HomeContainer({ setShowRules, showRules }) {
  return (
    <Home>
      <Home.Frame>
        <Home.Logo src={logo} alt="Logo" />
        <Home.WordContainer>
          <Home.MainText> Bull</Home.MainText>
          <Home.Subtitle> Guess me if you can</Home.Subtitle>
        </Home.WordContainer>
      </Home.Frame>
      <Home.ButtonContainer>
        <Home.Button>Let's Play Word</Home.Button>
        <Home.Button>Let's Play Number</Home.Button>
        <Home.ButtonLink setShowRules={setShowRules}>
          How to Play?
        </Home.ButtonLink>
      </Home.ButtonContainer>
    </Home>
  );
}
