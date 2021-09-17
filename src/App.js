import { createContext, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forgotpass from "./components/auth/Forgotpass";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Resetpass from "./components/auth/Resetpass";
import Index from "./components/home";
import "./css/App.css";
import { loadUser } from "./redux/actions/auth";
import store from "./store";

export const userContext = createContext();
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div className="genFont">
      <Provider store={store}>
        <Router>
          <Switch>    
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgotpass" component={Forgotpass} />
              <Route
                exact
                path="/resetPassword/:resettoken"
                component={Resetpass}
              />
              <Route path="/" component={Index} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
