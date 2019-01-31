import React, {Component} from 'react';
import HelloWorld from "./components/HelloWorld";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identificador: "5",
            texto: ""
        };
        this.getInput = this.getInput.bind(this);
    }

    getInput(e) {
        const textoIntroducido = e.target.value;
        this.setState({texto: textoIntroducido});
    }

    componentDidMount() {
        this.setState({texto: "Hello World"});
    }

    render() {
        const {texto, identificador} = this.state;

        const estiloDiv = {
            position: 'absolute',
            top: '5rem',
            left: '0',
            right: '0',
            margin: 'auto',
            width: '20rem',
            boxShadow: '0.5rem 0.4rem 2rem #888888',
            borderRadius: '1rem',
            padding: '3rem'
        };

        return (
            <div>
                <div style={estiloDiv}>
                    <h1>Hello World App</h1>
                    <label>Introduce lo que quieres pasar al componente</label>
                    <br/>
                    <input onChange={this.getInput} type="text" placeholder="Introduce texto aqui"/>
                    <h2>Texto introducido:</h2>
                    <HelloWorld id={identificador} textoProp={texto}/>
                </div>
            </div>
        );
    }
}

export default App;
