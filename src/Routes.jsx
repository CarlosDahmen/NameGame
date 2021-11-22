import { Component } from "react";
import Homepage from "./components/Homepage";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import { Route, Switch } from "react-router-dom"

class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/play" component={Game} />
          <Route exact path="/scoreboard" component={Scoreboard} />
        </Switch>
      </div>
    )
  }
}

export default Routes
