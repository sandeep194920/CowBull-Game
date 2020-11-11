import styled from "styled-components/macro";

export const Container = styled.div`
  /* margin: auto; */
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  width: ${({ play }) => (play ? "300px" : "200px")};
  padding: 25px;
  border-radius: 50px;
  margin-left: auto;
  background-color: #394867;
  color: #fcfffc;
  font-size: ${({ play }) => play && "19px"};
  font-weight: ${({ play }) => play && "700"};
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #e6a347;
    font-weight: 500;
    letter-spacing: ${({ play }) => play && "10px"};
    transition: background-color all 0.3s;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
    width: ${({ play }) => (play ? "200px" : "100px")};
    padding: 20px;
    margin-bottom: 10px;
    margin-right: ${({ play }) => (play ? "0px" : "20px")};

    &:hover {
      font-weight: 500;
      font-size: 18px;
    }
  }
`;

export const SelectLabel = styled.label`
  width: 150px;
  /* margin-left: ${({ column }) => (column ? "30px" : null)}; */
  padding: 17px;
  text-align: center;
  border-radius: 50px;
  background-color: #394867;
  color: #fcfffc;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #e6a347;
    font-weight: 700;
    transition: background-color 0.3s;
    border: none;
  }

  @media (max-width: 1100px) {
    font-size: 13px;
    width: 120px;
    padding: 20px;
    margin-left: ${({ column }) => (column ? "30px" : null)};
    margin-bottom: ${({ column }) => (column ? "0px" : "15px")};

    /* margin-bottom: 20px; */
    &:hover {
      font-size: 16px;
      font-weight: 400;
      border: none;
      outline: none;
    }
  }
`;

export const SelectButton = styled.input`
  opacity: 0;

  &:checked + ${SelectLabel} {
    background-color: #e6a347;
  }
`;

export const ButtonContainer = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin: auto;
  padding-right: 30px;
  max-width: fit-content;

  max-width: ${({ confirm }) => (confirm ? "600px" : "fit-content")};
  margin-top: ${({ confirm }) => (confirm ? "200px" : "100px")};
  padding-right: ${({ confirm }) => confirm && "0px"};
  /* margin-top: 300px; */
  @media (max-width: 1100px) {
    /* margin-top: 470px; */
    margin-top: ${({ shrinkable }) => (shrinkable ? "10px" : "35px")};
    margin-top: ${({ confirm }) => confirm && "60px"};

    /* background-color: green; */
    flex-direction: ${({ shrinkable }) => (shrinkable ? "column" : "row")};
  }
`;

export const MainText = styled.h1`
  font-size: 2em;
  color: white;
  margin-top: 5%;
  margin-left: 31%;

  @media (max-width: 1000px) {
    font-size: 2em;
    margin-left: 20%;
    margin-top: 5%;
  }

  @media (max-width: 700px) {
    font-size: 1em;
    margin-left: 8%;
    margin-top: 8%;
  }
`;
