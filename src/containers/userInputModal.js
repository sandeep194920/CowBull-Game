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
    "@media (max-width: 1400px)": {
      width: "14em",
      padding: "8px",
      marginLeft: "15%",
      marginTop: "10%",
    },
    "@media (max-width: 1100px)": {
      width: "13em",
      padding: "8px",
      marginLeft: "20%",
      marginTop: "15%",
    },

    "@media (max-width: 800px)": {
      width: "9em",
      padding: "8px",
      marginLeft: "15%",
      marginTop: "13%",
    },
  };
  const {
    attempts,
    // attemptsPlayed,
    setAttemptsPlayed,
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
    setUserInput(target.value.toUpperCase());
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
    if (myChoices && myChoices.includes(userInput)) {
      console.log("Here is the error");
      setWordExistError(true);
      return;
    }

    // after confirming there are no repeatative letters, we can now store the userInputs in myChoices array
    if (myChoices) localStorage.setObj("userInputs", [...myChoices, userInput]);
    else localStorage.setObj("userInputs", [userInput]);
    setMyChoices(localStorage.getObj("userInputs"));
    setShowUserInputModal(false);
    setUserInput("");
    localStorage.setItem(
      "attemptsPlayed",
      Number(localStorage.getItem("attemptsPlayed")) + 1
    );
    setAttemptsPlayed(localStorage.getItem("attemptsPlayed"));
  };

  // word is input and enter clicked
  const enterPressedHandler = (event) => {
    const code = event.keyCode || event.which;
    if (code === 13 && event.target.value.length === Number(letters)) {
      //13 is the enter keycode
      // console.log("Confirm can be entered now");
      myChoiceHandler();
    }
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
          setInputDuplicateError(false);
          setWordExistError(false);
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

            <UserInputModal.SubText>
              Attempt&nbsp;{" "}
              <span style={{ color: "#ffa62b" }}>
                {myChoices && myChoices.length + 1}{" "}
              </span>
              /&nbsp;
              {attempts}
            </UserInputModal.SubText>
          </UserInputModal.Frame>
          {inputDuplicatesError && (
            <UserInputModal.SubText error>
              Letters should not be repeated
            </UserInputModal.SubText>
          )}
          {wordExistError && (
            <UserInputModal.SubText error>
              {userInput.toUpperCase()} already exists
            </UserInputModal.SubText>
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
            onKeyPress={enterPressedHandler} // if enter is clicked then confirm will be clicked
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
                setInputDuplicateError(false);
                setWordExistError(false);
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
