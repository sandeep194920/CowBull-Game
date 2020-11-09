import styled from "styled-components/macro";

export const Container = styled.div`
  /* background-color: #14274e; */
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
`;

// the black shade that falls when modal opens
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Content = styled.div`
  width: 70%;
  height: 70%;
  background-color: #14274e;
  z-index: 1000;
  position: fixed;
  top: 10%;
  left: 15%;
  right: 20%;
  bottom: 20%;
  box-sizing: border-box;
  box-shadow: 1px 1px white;
`;

export const MainText = styled.h1`
  font-size: 2em;
  color: white;
  margin-top: 5%;
  margin-left: 28%;
`;

export const InfoText = styled.p`
  color: white;
  letter-spacing: 1px;
  margin-left: 4%;
  font-size: 1em;
  line-height: 1.6;
`;

export const SubText = styled.p`
  color: white;
  letter-spacing: 1px;
  /* margin-left: 4%; */
  font-size: 1em;
`;
export const WordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 4%;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  border-radius: 50px;
  margin-top: 2%;
  margin-left: 45%;
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
`;
