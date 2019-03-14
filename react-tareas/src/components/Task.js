import React from 'react';
import './Task.css';


const Task = (props) => {
    const { task } = props;

    return (
        <div className="task">
            <p>Nombre: {task.name}</p>
            <p>Descripcion: {task.description}</p>
            <p>Prioridad: {task.priority}</p>
        </div>
    );
};

export default Task;
