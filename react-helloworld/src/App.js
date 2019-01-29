import React, { Component } from 'react';
import HelloWorld from "./components/HelloWorld";

class App extends Component {
  state = {
      identificador: "5",
      texto: ""
  };


  componentDidMount() {
    this.setState({texto: "Hello World"});
  }

    render() {
    const {texto, identificador} = this.state;

    const estiloDiv = {
        position: 'absolute',
        top: '5rem',
        left:'0',
        right: '0',
        margin: 'auto',
        width: '20rem',
        boxShadow: '0.5rem 0.4rem 2rem #888888',
        padding: '3rem'
    };

    return (
        <div>
            <div style={estiloDiv}>
                <label>Introduce lo que quieres pasar al componente</label>
                <br/>
                <input type="text" />
                <h2>Texto introducido:</h2>
                <HelloWorld id={identificador} textoProp={texto} />
            </div>
        </div>
    );
  }
}

export default App;
