import { Component } from "react";
import Homepage from "./components/Homepage";
import { Route, Switch } from "react-router-dom"

class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
        </Switch>
      </div>
    )
  }
}

export default Routes
