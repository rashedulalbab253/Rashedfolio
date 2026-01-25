import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ResearchDetails from "./containers/researchDetails/ResearchDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyleProvider } from "./contexts/StyleContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/research-details/:id" component={ResearchDetails} />
          </Switch>
        </Router>
      </StyleProvider>
    </div>
  );
}

export default App;
