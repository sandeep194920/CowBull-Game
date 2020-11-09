import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./containers/home";
import RulesContainer from "./containers/rules";
export const RulesContext = createContext();

function App() {
  const [showRules, setShowRules] = useState(false);

  return (
    <RulesContext.Provider value={setShowRules}>
      {showRules && <RulesContainer />}
      <Router>
        <Route
          path="/"
          exact
          render={() => (
            <HomeContainer showRules={showRules} setShowRules={setShowRules} />
          )}
        />
      </Router>
    </RulesContext.Provider>
  );
}

export default App;
