import React, { useContext, useEffect, useState, useRef } from "react";
import { GameContext } from "../App";
import { Modal, UserInputModal } from "../components";
import logo from "../logo.svg";
import Radium from "radium";

function UserInputModalContainer() {
  const inputStyles = {
    color: "white",
    marginLeft: "19%",
    backgroundColor: "#394867",
    width: "20em",
    outline: "none",
    padding: "14px",
    marginTop: "8%",
    borderRadius: "20px",
    border: "1px solid 394867",
    fontSize: "1.2em",
    letterSpacing: "4px",
    textTransform: "uppercase",
    "@media (max-width: 1100px)": {
      width: "9em",
      padding: "8px",
      marginLeft: "10%",
      marginTop: "20%",
    },
  };
  const {
    wordExistError,
    setWordExistError,
    gameType,
    setShowUserInputModal,
    inputDuplicatesError,
    setInputDuplicateError,
    userInput,
    setUserInput,
    letters,
    myChoices,
    setMyChoices,
  } = useContext(GameContext);

  // to focus on input field
  const inputRef = useRef();
  const [letterCount, setLetterCount] = useState(0);

  const setInputHandler = ({ target }) => {
    setUserInput(target.value);
    setInputDuplicateError(false);
    setWordExistError(false);
  };

  // this checks for duplicates in the userInput
  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }

  // add your word / number handler
  const myChoiceHandler = () => {
    // check if user input has repeatative letters
    console.log("The user Input is " + userInput);
    hasDuplicates([...userInput]);
    if (hasDuplicates([...userInput])) {
      console.log("has duplicates");
      setInputDuplicateError(true);
      return;
    }

    // if the word entered is already entered before then we should get an error
    if (myChoices.includes(userInput)) {
      setWordExistError(true);
      return;
    }

    // after confirming there are no repeatative letters, we can now store the userInputs in myChoices array
    if (myChoices) localStorage.setObj("userInputs", [...myChoices, userInput]);
    else localStorage.setObj("userInputs", [userInput]);
    setMyChoices(localStorage.getObj("userInputs"));
    setShowUserInputModal(false);
    setUserInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  useEffect(() => {
    setLetterCount(userInput.length);
  }, [userInput]);

  return (
    <Modal>
      <Modal.Overlay
        onClick={() => {
          setShowUserInputModal(false);
          setUserInput("");
        }}
      />
      <Modal.Content>
        <UserInputModal>
          <UserInputModal.Frame>
            <UserInputModal.Logo src={logo} alt="Logo" />
            <UserInputModal.MainText>
              Please input your{" "}
              <span style={{ color: "#ffa62b" }}>{gameType}</span>
            </UserInputModal.MainText>

            <UserInputModal.Subtext>
              Attempt&nbsp; <span style={{ color: "#ffa62b" }}>14</span>
            </UserInputModal.Subtext>
          </UserInputModal.Frame>
          {inputDuplicatesError && (
            <UserInputModal.Subtext error>
              Letters should not be repeated
            </UserInputModal.Subtext>
          )}
          {wordExistError && (
            <UserInputModal.Subtext error>
              {userInput.toUpperCase()} already exists
            </UserInputModal.Subtext>
          )}
          {/* <UserInputModal.Input
            type="text"
            ref={inputRef}
            value={userInput}
            onChange={({ target }) => setUserInput(target.value)}
          /> */}
          {/* this html input is directly used because, in styled components, I didnt find a good way to write inputRef */}
          <input
            ref={inputRef}
            value={userInput}
            onChange={setInputHandler}
            style={inputStyles}
            maxLength={letters}
            type={gameType === "Number" ? "number" : "text"}
          />

          <UserInputModal.Input>
            {" "}
            {letterCount}/{letters}
          </UserInputModal.Input>
          <UserInputModal.ButtonContainer>
            <UserInputModal.Button
              disabled={Number(letterCount) !== Number(letters)}
              onClick={myChoiceHandler}
            >
              {" "}
              Confirm{" "}
            </UserInputModal.Button>
            <UserInputModal.Button
              onClick={() => {
                setShowUserInputModal(false);
                setUserInput("");
              }}
            >
              {" "}
              Cancel{" "}
            </UserInputModal.Button>
          </UserInputModal.ButtonContainer>
        </UserInputModal>
      </Modal.Content>
    </Modal>
  );
}
export default Radium(UserInputModalContainer);
