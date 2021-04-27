import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
