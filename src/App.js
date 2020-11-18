import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePlayContainer from "./containers/gamePlay";
import GameSelectionContainer from "./containers/gameSelection";
import HomeContainer from "./containers/home";
import QuitRevealModalContainer from "./containers/quitRevealModal";
import RulesMoalContainer from "./containers/rulesModal";
import UserInputModalContainer from "./containers/userInputModal";
import * as GAME from "./helpers/constants";

export const GameContext = createContext();

// set in local storage and then update the state through local storage. In this way the state wont be lost
function App() {
  const [showRulesModal, setShowRulesModal] = useState(false); // modal for rules
  const [gameType, setGameType] = useState(
    localStorage.getItem(GAME.GAME_TYPE)
  );
  const [level, setLevel] = useState(localStorage.getItem(GAME.LEVEL));
  const [letters, setLetters] = useState(localStorage.getItem(GAME.LETTERS));
  const [showQuitRevealModal, setShowQuitRevealModal] = useState(false);
  const [showRevealModal, setShowRevealModal] = useState(false);
  const [revealIt, setRevealIt] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showUserInputModal, setShowUserInputModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [myChoices, setMyChoices] = useState([]);

  // these context values will be passed to all the required components as props
  const contextValues = {
    myChoices,
    setMyChoices,
    userInput,
    setUserInput,
    showInput,
    setShowInput,
    revealIt,
    setRevealIt,
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
    console.log(myChoices);
    // console.log(showUserInputModal);
  }, [myChoices]);
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

        <Route path="/" exact component={HomeContainer} />
        <Route path="/select" component={GameSelectionContainer} />
        <Route path="/play" component={GamePlayContainer} />
      </Router>
    </GameContext.Provider>
  );
}

export default App;
