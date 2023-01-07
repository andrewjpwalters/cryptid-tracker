import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import CryptidList from "./CryptidList";
import SubmitNew from "./SubmitNew";
import SignUp from "./SignUp";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Hello {user} from App!</h1>
      <Switch>
        <Route exact path="/cryptid">
          <CryptidList />
        </Route>
        <Route exact path="/submit">
          <SubmitNew />
        </Route>
        <Route exact path="/signup">
          <SignUp onLogin={setUser} />
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
