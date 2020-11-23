import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #14274e;
  position: fixed;
  z-index: 1000;
  top: 25%;
  left: 25%;
  right: 25%;
  bottom: 25%;
  padding: 1%;
  box-sizing: border-box;
  box-shadow: 1px 1px white;
  @media (max-width: 1100px) {
    width: 80%;
    height: 60%;
    margin: auto;
    top: 20%;
    left: 2%;
    right: 2%;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainText = styled.h1`
  font-size: 1.8em;
  color: white;
  margin-top: 8%;
  margin-left: 8%;

  @media (max-width: 1100px) {
    font-size: 1em;
    margin-left: 15%;
    margin-top: 15%;
  }
  @media (max-width: 700px) {
    font-size: 0.9em;
    letter-spacing: 0.3px;
    line-height: 2em;
    margin-right: 1%;
    margin-left: 5%;
    margin-top: 10%;
  }
  @media (max-width: 400px) {
    font-size: 0.9em;
    letter-spacing: 0.3px;
    line-height: 2em;
    margin-right: 1%;
    margin-left: 7%;
    margin-top: 15%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  margin-top: 5%;
  /* background-color: orange; */

  @media (max-width: 1100px) {
    align-items: center;
    margin-top: 11%;
    width: 90%;
  }
  @media (max-width: 1000px) {
    align-items: center;
    margin-top: 4%;
    width: 90%;
  }

  @media (max-width: 700px) {
    align-items: center;
    margin-top: 18%;
    width: 90%;
  }

  @media (max-width: 400px) {
    align-items: center;
    margin-top: 35%;
    width: 90%;
  }
`;

export const Input = styled.input`
  color: white;
  margin-left: 19%;
  background-color: #394867;
  width: 20em;
  outline: none;
  padding: 14px;
  margin-top: 8%;
  border-radius: 20px;
  border: 1px solid 394867;
  font-size: 1.2em;
  letter-spacing: 4px;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    width: 8em;
    /* background-color: black; */
  }
  @media (max-width: 1000px) {
    width: 8em;
    padding: 8px;
    margin-left: 10%;
    margin-top: 20%;
  }
`;

export const SubText = styled.p`
  font-size: 0.9em;
  color: white;
  letter-spacing: 1.5px;
  /* margin-left: 12px; */
  @media (max-width: 700px) {
    letter-spacing: 1px;
    font-size: 0.8em;
    margin-left: ${({ error }) => error && "15px"};
    margin-top: ${({ error }) => error && "5px"};
  }
  ${({ error }) =>
    error
      ? {
          marginLeft: "35%",
          marginTop: "-10px",
          color: "red",
        }
      : {
          marginLeft: "-60px",
          // background: "orange",
          // marginRight: "50px",
        }}
`;

export const Button = styled.button`
  width: 220px;
  padding: 8px;
  border-radius: 50px;
  background-color: #394867;
  color: #fcfffc;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  border: none;
  &:disabled {
    cursor: not-allowed;
    background-color: #9ba4b4;
    &:hover {
      background-color: #9ba4b4;
      font-size: 20px;
      font-weight: normal;
      letter-spacing: 1px;
    }
  }

  cursor: pointer;
  outline: none;

  margin-bottom: 6%;
  /* margin-left: 33%; */
  margin-top: 4%;
  @media (max-width: 700px) {
    width: 150px;
  }

  &:hover {
    background-color: #e6a347;
    /* font-weight: 700; */
    /* font-size: 22px; */
    /* letter-spacing: 0px; */
    transition: background-color 0.3s;
  }

  @media (max-width: 1300px) {
    padding: 10px;
    width: 130px;
    margin: auto;
    margin-bottom: 10%;
    margin-top: 8%;
    font-size: 14px;
  }

  @media (max-width: 700px) {
    padding: 10px;
    width: 150px;
    margin: auto;
    margin-bottom: 10%;
    margin-top: 8%;
    font-size: 14px;
  }
`;

export const LettersLeft = styled.p`
  border-radius: 50px;
  letter-spacing: 4px;
  border: 1px solid #394867;
  display: inline-block;
  color: white;
  margin-left: 1%;
  padding: 14px;
  background-color: #394867;
  @media (max-width: 1000px) {
    padding: 8px;
  }
`;
