// ./src/components/App.js
import React, { useState, useEffect } from 'react';
import Board from './Board';
import defaultColumns from './defaultColumns';
import defaultTasks from './defaultTasks';

import ColumnContext from '../context';

import './css/app.css';

const App = props => {
    const { Provider } = ColumnContext;
    const [tasks, setTasks] = useState(defaultTasks);
    const [column, setColumn] = useState(defaultColumns);

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks));
    }, [tasks]);

    const moveTask = (id, direction) => {
        const updatedTasks = tasks.map(task => {
            if (task.id == id) {
                const copyTask = { ...task };
                if (direction === 'LEFT') {
                    copyTask.idColumn -= 1;
                } else {
                    copyTask.idColumn += 1;
                }
                return copyTask;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="app">
            <Provider value={column}>
                <Board tasks={tasks} moveTask={moveTask} />
            </Provider>
        </div>
    );
};

export default App;
