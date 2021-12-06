import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";

const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
};

export default Routes;
