import styled from "styled-components/macro";

export const Container = styled.div`
  margin: auto;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WordContainer = styled.div`
  margin-top: 2%;
  margin-left: 28%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 400px;
  margin-top: 200px;
  @media (max-width: 1100px) {
    margin-top: 150px;
  }
`;

export const Button = styled.button`
  width: 400px;
  padding: 30px;
  border-radius: 50px;
  margin: auto;
  margin-bottom: 80px;
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
    font-size: 15px;
    width: 200px;
    padding: 20px;
    margin-bottom: 50px;
    &:hover {
      font-weight: 500;
      font-size: 18px;
    }
  }
`;
export const ButtonLink = styled.a`
  color: #fcfffc;
  margin: auto;
  text-transform: uppercase;
  /* background-color: transparent; */
  cursor: pointer;
  &:hover {
    font-weight: 700;
    color: #e6a347;
    font-size: 19px;
  }
  @media (max-width: 1100px) {
    font-size: 14px;
  }
`;
export const MainText = styled.h1`
  font-size: 3em;
  color: white;
  &:before {
    content: "Cow";
    color: #ffa62b;
  }
  @media (max-width: 1100px) {
    font-size: 2em;
    margin-left: -70px;
    margin-top: 30px;
  }
`;
export const Subtitle = styled.p`
  color: white;
  margin-left: 15%;
  margin-top: -20px;
  font-style: italic;
  @media (max-width: 1100px) {
    margin-top: -15px;
    margin-left: -70px;
  }
`;
