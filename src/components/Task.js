import React from 'react';
import './css/task.css';

const Task = props => {
    const { tasks, canMoveLeft, canMoveRight, columnID, moveTask } = props;
    const renderTasks = tasks.map(task => {
        if (columnID === task.idColumn) {
            return (
                <div id={task.id} className="task">
                    {canMoveLeft && (
                        <button type="button" onClick={() => moveTask(task.id, 'LEFT')}>
                            {'<'}
                        </button>
                    )}
                    <span className="taskName">{task.name}</span>
                    {canMoveRight && (
                        <button type="button" onClick={() => moveTask(task.id, 'RIGHT')}>
                            {'>'}
                        </button>
                    )}
                </div>
            );
        }
    });

    return <div>{renderTasks}</div>;
};

export default Task;
