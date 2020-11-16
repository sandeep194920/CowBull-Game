import styled from "styled-components/macro";

export const HomePageLogo = styled.img`
  border: 0;
  max-width: 700px;
  width: 150px;
  cursor: pointer;
  padding: 0;
  margin-left: 7em;
  margin-top: 2em;
  @media (max-width: 1100px) {
    max-width: 300px;
    width: 70px;
    margin-left: 1em;
    margin-top: 1.5em;
  }
`;

export const RulesPageLogo = styled(HomePageLogo)`
  max-width: 300px;
  width: 100px;
  margin-left: 3em;
  @media (max-width: 1100px) {
    max-width: 300px;
    width: 70px;
    margin-left: 1em;
  }
`;

export const GameSelectionPageLogo = styled(RulesPageLogo)`
  @media (max-width: 700px) {
    max-width: 300px;
    width: 70px;
    margin-left: 1em;
    margin-top: 5px;
  }
`;

export const GamePlayPageLogo = styled(GameSelectionPageLogo)`
  margin-right: 2%;
  @media (max-width: 700px) {
    margin-top: 3px;
    display: none;
  }
`;

export const QuitPageLogo = styled(GameSelectionPageLogo)``;

export const UserInputModalLogo = styled(GamePlayPageLogo)``;
