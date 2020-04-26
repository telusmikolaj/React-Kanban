import React from 'react';
import './css/task.css';

const Task = props => {
    const { tasks, columnID, moveTask, canMoveLeft, canMoveRight, deleteTask } = props;
    const renderTasks = tasks.map(task => {
        if (columnID === task.idColumn) {
            return (
                <div id={task.id} className="task">
                    <div className="task-content">
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
                        <button type="button" onClick={() => deleteTask(task.id)}>
                            {'X'}
                        </button>
                    </div>
                </div>
            );
        }
    });

    return <div>{renderTasks}</div>;
};

export default Task;
