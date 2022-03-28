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
          <Route exact path="/scoreboard" component={Scoreboard} />
          <Route path="/play/:id" component={Game}/>
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    )
  }
}

export default Routes
