import React, {Component} from 'react';
import './App.css';
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import Title from "./components/Title";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    addTask = (newTask) => {
        const {tasks} = this.state;
        tasks.push(newTask);
        this.setState({tasks});
    };

    render() {

        const { tasks } = this.state;
        const mappedTasks = tasks.map(t => <Task key={t.name} task={t}/>);

        console.log(this.state);
        return (
            <div>
                <div className="contenedor">
                    <Title name="App de tareas"/>
                    <div className="input-box">
                        <TaskInput onClick={this.addTask}/>
                    </div>

                    <Title name="Tareas"/>
                    <div className="tareas-grid">
                        {mappedTasks}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
