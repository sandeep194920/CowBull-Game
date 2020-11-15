import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePlayContainer from "./containers/gamePlay";
import GameSelectionContainer from "./containers/gameSelection";
import HomeContainer from "./containers/home";
import RulesContainer from "./containers/rules";
import * as GAME from "./helpers/constants";

export const RulesContext = createContext();
export const GameContext = createContext();

// set in local storage and then update the state through local storage. In this way the state wont be lost

function App() {
  const [showRules, setShowRules] = useState(false); // modal for rules
  const [gameType, setGameType] = useState(
    localStorage.getItem(GAME.GAME_TYPE)
  );
  const [level, setLevel] = useState(localStorage.getItem(GAME.LEVEL));
  const [letters, setLetters] = useState(localStorage.getItem(GAME.LETTERS));
  const [showModal, setShowModal] = useState(false);

  // these context values will be passed to all the required components as props
  const contextValues = {
    setShowRules,
    gameType,
    setGameType,
    level,
    setLevel,
    letters,
    setLetters,
    showModal,
    setShowModal,
  };

  return (
    // Game context provides all the contexts necessary for all the components and any of the comps can use the required context values
    <GameContext.Provider value={{ ...contextValues }}>
      {showRules && <RulesContainer />}

      <Router>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/select" component={GameSelectionContainer} />
        <Route path="/play" component={GamePlayContainer} />
      </Router>
    </GameContext.Provider>
  );
}

export default App;
