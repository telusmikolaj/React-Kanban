import React from 'react';
import './css/task.css';

const Task = props => {
    const { tasks, canMoveLeft, canMoveRight, columnID, moveLeft, moveRight } = props;
    const renderTasks = tasks.map(task => {
        if (columnID === task.idColumn) {
            return (
                <div id={task.id} className="task">
                    {canMoveLeft && (
                        <button type="button" onClick={() => moveLeft(task.id)}>
                            {'<'}
                        </button>
                    )}
                    <span className="taskName">{task.name}</span>
                    {canMoveRight && (
                        <button type="button" onClick={() => moveRight(task.id)}>
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
