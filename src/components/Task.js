import React from 'react';
import TaskContext from './TaskContext';

const Task = () => {
    const { TaskConsumer } = TaskContext;

    return (
        <TaskConsumer>
            {tasks =>
                tasks.map(task => (
                    <div className="task">
                        <h1>{task.name}</h1>
                    </div>
                ))
            }
        </TaskConsumer>
    );
};

export default Task;
