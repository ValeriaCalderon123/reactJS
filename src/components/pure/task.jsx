import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripcion: {task.description}
            </h3>
            <h4>
                Nivel: {task.level}
            </h4>
            <h5>
                Esta tarea esta: { task.completed ? 'COMPLETADA' : 'PENDIENTE' }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    //Se trata de una task
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
