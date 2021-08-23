import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";
import DetailsForm from "./components/DetailsForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/form/save-details">
            <DetailsForm />
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
