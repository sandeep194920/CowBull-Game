import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Rules } from "./components";
import HomeContainer from "./containers/home";
import logo from "./logo.svg";

function App() {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      {showRules && (
        <Rules>
          <Rules.Overlay />
          <Rules.Content>
            <Rules.Frame>
              <Rules.Logo src={logo} alt="Logo" />
              {/* <Rules.MainText>How to Play?</Rules.MainText> */}
            </Rules.Frame>
          </Rules.Content>
        </Rules>
      )}
      <div>
        <Router>
          <Route
            path="/"
            exact
            render={() => (
              <HomeContainer
                showRules={showRules}
                setShowRules={setShowRules}
              />
            )}
          />
        </Router>
      </div>
    </>
  );
}

export default App;
