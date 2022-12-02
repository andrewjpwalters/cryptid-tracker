import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cryptid from "./Cryptid";
import SubmitNew from "./SubmitNew";

function App() {
  return (
    <div>
      <h1>Hello from App!</h1>
      <Switch>
        <Route exact path="/cryptid">
          <Cryptid />
        </Route>
        <Route exact path="/submit">
          <SubmitNew />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 NOT FOUND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
