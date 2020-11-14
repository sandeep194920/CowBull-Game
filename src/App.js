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

  return (
    <RulesContext.Provider value={setShowRules}>
      <GameContext.Provider
        value={{ gameType, setGameType, level, setLevel, letters, setLetters }}
      >
        {showRules && <RulesContainer />}
        <Router>
          <Route
            path="/"
            exact
            render={() => (
              <HomeContainer
                showRules={showRules}
                setShowRules={setShowRules}
                setGameType={setGameType}
              />
            )}
          />
          <Route path="/select" component={GameSelectionContainer} />
          <Route path="/play" component={GamePlayContainer} />
        </Router>
      </GameContext.Provider>
    </RulesContext.Provider>
  );
}

export default App;
