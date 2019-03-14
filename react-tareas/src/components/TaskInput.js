import React, {Component} from 'react';
import FormInput from "./FormInput";

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            priority: ""
        }
    }

    updateName = (e) => this.setState({name: e});

    updateDescription = (e) => this.setState({description: e});

    updatePriority = (e) => this.setState({priority: e});

    handleOnClick = () => {
        this.props.onClick(this.state);
        this.setState({
            name: "",
            description: "",
            priority: ""
        })
    };

    render() {
        // console.log(this.state);

        return (
            <div>
                <FormInput
                    label="Titulo"
                    placeholder="Título"
                    value={this.state.name}
                    onChange={(e) => this.updateName(e.target.value)}
                />
                <FormInput
                    label="Descripción"
                    placeholder="Descripción"
                    value={this.state.description}
                    onChange={(e) => this.updateDescription(e.target.value)}
                />
                <FormInput
                    label="Prioridad"
                    placeholder="Prioridad"
                    value={this.state.priority}
                    onChange={(e) => this.updatePriority(e.target.value)}
                />
                <button onClick={this.handleOnClick}>Añadir tarea</button>
            </div>
        );
    }
}

export default TaskInput;