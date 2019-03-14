import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router";
import Principal from './layout/Principal';
import Secundaria from './layout/Secundaria';
import Terciaria from './layout/Terciaria';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/principal" component={Principal} />
          <Route exact path="/secundaria" component={Secundaria} />
          <Route path="/terciaria/:id" component={Terciaria} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
