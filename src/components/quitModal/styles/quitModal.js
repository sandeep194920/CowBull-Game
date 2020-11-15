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
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainText = styled.h1`
  font-size: 1.8em;
  color: white;
  margin-top: 8%;
  margin-left: 10%;

  @media (max-width: 1100px) {
    font-size: 1em;
    margin-left: 15%;
    margin-top: 15%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: orange; */
  /* width: 50%; */
  margin: auto;
  margin-top: 9%;
  /* justify-content: center; */
  align-items: center;
  @media (max-width: 700px) {
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-top: 40px;
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 220px;
  padding: 8px;
  border-radius: 50px;
  /* margin-top: 2%; */
  /* margin-left: 45%; */
  margin-bottom: 6%;
  background-color: #394867;
  color: #fcfffc;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  border: none;

  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #e6a347;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0px;
    transition: background-color 0.3s;
  }
  @media (max-width: 1100px) {
    margin-bottom: 10%;
    margin-left: 33%;
    margin-top: 8%;
  }
`;
