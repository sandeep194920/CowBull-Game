import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePlayContainer from "./containers/gamePlay";
import GameSelectionContainer from "./containers/gameSelection";
import HomeContainer from "./containers/home";
import QuitRevealModalContainer from "./containers/quitRevealModal";
import RulesMoalContainer from "./containers/rulesModal";
import UserInputModalContainer from "./containers/userInputModal";
import WonLostModalContainer from "./containers/wonLostModal";
import * as GAME from "./helpers/constants";

export const GameContext = createContext();

// local storage store and get arrays
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

// set in local storage and then update the state through local storage. In this way the state wont be lost
function App() {
  const [showRulesModal, setShowRulesModal] = useState(false); // modal for rules
  // word or number
  const [gameType, setGameType] = useState(
    localStorage.getItem(GAME.GAME_TYPE)
  );
  // tells easy / medium / hard
  const [level, setLevel] = useState(localStorage.getItem(GAME.LEVEL));
  // tells the selected letters (3 or 4 or 5 o 6)
  const [letters, setLetters] = useState(localStorage.getItem(GAME.LETTERS));
  const [showQuitRevealModal, setShowQuitRevealModal] = useState(false);
  const [showRevealModal, setShowRevealModal] = useState(false);
  // reveal the answer in gamePlay container
  const [revealIt, setRevealIt] = useState(false);
  const [showUserInputModal, setShowUserInputModal] = useState(false);
  // input value guessed word / number
  const [userInput, setUserInput] = useState("");
  // guessed word / number array
  const [myChoices, setMyChoices] = useState(localStorage.getObj("userInputs"));
  // const [myChoices, setMyChoices] = useState([]);
  // newGame is used to refresh the GamePlay page
  const [newGame, setNewGame] = useState(false);

  const [hidden, setHidden] = useState("sky");

  const [inputDuplicatesError, setInputDuplicateError] = useState(false);

  const [wordExistError, setWordExistError] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const [attempts, setAttempts] = useState(localStorage.getItem("attempts"));

  const [attemptsPlayed, setAttemptsPlayed] = useState(
    localStorage.getItem("attemptsPlayed")
  );

  const [showWonLostModal, setShowWonLostModal] = useState(false);
  const [wonTheGame, setWonTheGame] = useState(false); // true -> won, false -> lost . Called in

  // these context values will be passed to all the required components as props
  const contextValues = {
    attemptsPlayed,
    setAttemptsPlayed,
    gameOver,
    setGameOver,
    wonTheGame,
    setWonTheGame,
    attempts,
    setAttempts,
    wordExistError,
    setWordExistError,
    inputDuplicatesError,
    setInputDuplicateError,
    hidden,
    setHidden,
    newGame,
    setNewGame,
    myChoices,
    setMyChoices,
    userInput,
    setUserInput,
    revealIt,
    setRevealIt,
    showWonLostModal,
    setShowWonLostModal,
    showQuitRevealModal,
    showUserInputModal,
    setShowUserInputModal,
    showRulesModal,
    showRevealModal,
    setShowRulesModal,
    setShowRevealModal,
    gameType,
    setGameType,
    level,
    setLevel,
    letters,
    setLetters,
    setShowQuitRevealModal,
  };
  useEffect(() => {
    console.log(attempts);
    // console.log(showUserInputModal);
  }, [attempts]);

  return (
    // Game context provides all the contexts necessary for all the components and any of the comps can use the required context values
    <GameContext.Provider value={{ ...contextValues }}>
      {/* Routes */}
      <Router>
        {/* modals here */}
        {showRulesModal && <RulesMoalContainer />}
        {showQuitRevealModal && <QuitRevealModalContainer />}
        {showRevealModal && <QuitRevealModalContainer />}
        {showUserInputModal && <UserInputModalContainer />}
        {showWonLostModal && <WonLostModalContainer />}

        <Route path="/" exact component={HomeContainer} />
        <Route path="/select" component={GameSelectionContainer} />
        <Route path="/play" component={GamePlayContainer} />
      </Router>
    </GameContext.Provider>
  );
}

export default App;
