import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameSelectionContainer from "./containers/gameSelection";
import HomeContainer from "./containers/home";
import RulesContainer from "./containers/rules";
export const RulesContext = createContext();
export const GameContext = createContext();

function App() {
  const [showRules, setShowRules] = useState(false);
  const [gameType, setGameType] = useState("Word");

  return (
    <RulesContext.Provider value={setShowRules}>
      <GameContext.Provider value={{ gameType, setGameType }}>
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
        </Router>
      </GameContext.Provider>
    </RulesContext.Provider>
  );
}

export default App;
