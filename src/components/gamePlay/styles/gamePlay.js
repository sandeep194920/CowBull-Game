import styled from "styled-components/macro";

export const Container = styled.div``;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: yellow; */
`;

export const MainText = styled.h1`
  font-size: 2em;
  color: white;
  margin-top: 3%;
  margin-left: 20%;

  @media (max-width: 1000px) {
    font-size: 2em;
    margin-left: 20%;
    margin-top: 5%;
  }

  @media (max-width: 700px) {
    margin-top: 3em;
    font-size: 1em;
    margin-left: 2%;
    letter-spacing: 1px;
  }
`;

export const WordContainer = styled.div`
  margin-top: 2%;
  /* background-color: green; */
  ${({ difficulty }) =>
    difficulty && {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      alignItems: "right",
      justifyContent: "center",
      // height: "50px",
    }}

  // 

  @media (max-width: 700px) {
    margin-top: 0%;
    /* width: 80%; */
    width: ${({ extraWidthRight }) => extraWidthRight && "32%"};
  }
`;

export const AttemptsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  /* background: green; */
  margin: auto;
  margin-top: 1%;
  margin-left: 4%;
  width: 95%;
  box-sizing: border-box;
  height: 60vh;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    /* height: auto; */
    flex-wrap: nowrap;
    overflow: scroll;
    border-right: 1px solid white;
    margin-top: 2%;
  }
`;

export const AttemptWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* background-color: orange; */
  align-items: center;
  width: 25%;
  /* width: fit-content; */
  margin-top: 2%;
`;
export const AttemptNumber = styled.p`
  margin-right: 4%;
  font-weight: 700;
  font-size: 1.4em;
  @media (max-width: 700px) {
    font-size: 1em;
    margin-right: 2%;
  }
`;

export const AttemptResult = styled.h2`
  display: flex;
  justify-content: space-around;
  width: 4em;
  /* background-color: yellow; */
  color: #ffe05d;
  /* color: #b8de6f; */
  font-weight: 700;
  margin-left: 2%;
  font-weight: 700;
  font-size: 1.1em;
  letter-spacing: 3px;
  /* background-color: orange; */
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

export const LettersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: white; */
  /* margin-left: 2%; */

  /* position: fixed; */
  @media (max-width: 700px) {
    margin-right: 3px;
    margin-left: 2%;
  }
`;

export const LetterContainer = styled.p`
  color: #fcfffc;
  border: 0px solid black;
  padding: 10px;
  font-size: 1.3em;
  border-radius: 20%;
  margin: 0 4%;
  height: 40%;
  width: 40px;
  text-align: center;
  background-color: #394867;
  text-transform: uppercase;
  /* background-color: #9ba4b4; */
  font-weight: 700;
  @media (max-width: 700px) {
    margin: 0 3%;
    font-size: 1em;
    padding: 6px;
    width: 35px;
  }
`;

export const SubText = styled.p`
  margin-top: ${({ gameOver }) => gameOver && "7em"};
  margin-left: ${({ gameOver }) => gameOver && "-12em"};
  color: ${({ gameOver }) => (gameOver ? "#ffa62b" : "white")};
  color: ${({ cow }) => cow && "#b8de6f"};
  color: ${({ bull }) => bull && "#ffe05d"};
  font-size: 0.9em;

  /* font-size: ${({ bull }) => bull && "1.1em"};
  font-size: ${({ cow }) => cow && "1.1em"}; */
  /* 
  color: #ffe05d;
  color: #b8de6f; */

  letter-spacing: 1px;
  &:before {
    content: "Difficulty ";
    display: ${({ difficulty }) => (difficulty ? "visible " : "none")};
  }

  @media (max-width: 1100px) {
    font-size: 0.8em;
    margin-left: 5%;
    margin-right: 7%;
    line-height: 1.9;
  }
  @media (max-width: 700px) {
    font-size: 0.6em;
    line-height: normal;
    /* margin-right: 10%; */
    ${({ difficulty }) =>
      difficulty && {
        lineHeight: "2em",
        marginTop: "0.3em",
        fontSize: "0.6em",
      }}/* &:before {
      content: "";
      font-size: 0.2em;
      display: ${({ difficulty }) => (difficulty ? "visible " : "none")};
    } */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* background-color: orange; */
  width: 50%;
  margin: auto;
  margin-top: 2%;
  @media (max-width: 700px) {
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-top: 40px;
    width: 100%;
  }
`;

export const Button = styled.button`
  width: ${({ reveal }) => reveal && "200px"};
  width: ${({ quit }) => quit && "100px"};
  width: ${({ guess }) => guess && "400px"};
  padding: 20px;
  border-radius: 50px;
  background-color: ${({ reveal }) => reveal && "#B8DE6F"};
  background-color: ${({ quit }) => quit && "#D7385E"};
  background-color: ${({ guess }) => guess && "#394867"};
  color: ${({ reveal }) => reveal && "black"};
  color: ${({ quit }) => quit && "#FCFFFC"};
  color: ${({ guess }) => guess && "#ffa62b"};
  border: none;
  font-size: 1.1em;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  &:disabled {
    background-color: #9ba4b4;
    color: white;
    &:hover {
      background-color: #9ba4b4;
      cursor: not-allowed;
    }
  }
  @media (max-width: 1300px) {
    width: ${({ reveal }) => reveal && "150px"};
    width: ${({ quit }) => quit && "100px"};
    width: ${({ guess }) => guess && "400px"};
    /* display: none; */
    padding: 10px;
    margin-bottom: 30px;
    margin-right: 30px;
    font-size: 0.8em;
  }

  @media (max-width: 700px) {
    width: ${({ reveal }) => reveal && "150px"};
    width: ${({ quit }) => quit && "100px"};
    width: ${({ guess }) => guess && "400px"};
    /* display: none; */
    padding: 10px;
    margin-bottom: 30px;
    font-size: 0.8em;
  }
  &:hover {
    background-color: ${({ guess }) => guess && "#FFA62B"};
    color: ${({ guess }) => guess && "#FCFFFC"};
  }
`;
