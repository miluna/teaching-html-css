import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Terciaria extends Component {
  render() {
      console.log(this.props.match.params);
      console.log(this.props.history);
    return (
      <div>
        {/* {this.props.history.match.params} */}
      </div>
    )
  }
}

export default withRouter(Terciaria);
