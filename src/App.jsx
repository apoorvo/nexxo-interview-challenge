import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { setAuthHeaders } from "./api/axios";
import "./App.css";
import Users from "./Users";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setAuthHeaders(setIsLoading);
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Redirect to="/users" from="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
