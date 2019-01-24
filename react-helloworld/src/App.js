import React, { Component } from 'react';

class App extends Component {
  render() {
    const estaSaludando = true;
    const hello = <p>Hello World</p>;
    const adios = <p>Adiós</p>;

    return (
      <div>
        { estaSaludando ? hello : adios }
      </div>
    );
  }
}

export default App;
