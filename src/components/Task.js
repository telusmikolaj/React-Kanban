import React from 'react';
import './css/task.css';

const Task = props => {
    const { defaultTasks, canMoveLeft, canMoveRight, columnID, moveLeft } = props;
    const renderTasks = defaultTasks.map(task => {
        if (columnID === task.idColumn) {
            return (
                <div id={task.id} className="task">
                    {canMoveLeft && (
                        <button type="button" onClick={moveLeft}>
                            {'<'}
                        </button>
                    )}
                    <span className="taskName">{task.name}</span>
                    {canMoveRight && <button type="button">{'>'}</button>}
                </div>
            );
        }
    });

    return <div>{renderTasks}</div>;
};

export default Task;
