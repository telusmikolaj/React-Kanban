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

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks));
    }, [tasks]);

    const moveLeft = id => {
        const updatedTasks = tasks.map(task => {
            if (task.id == id) {
                const copyTask = { ...task };
                copyTask.idColumn -= 1;
                return copyTask;
            }
            return task;
        });
        setTasks(updatedTasks);
    };
    const moveRight = id => {
        const updatedTasks = tasks.map(task => {
            if (task.id == id) {
                const copyTask = { ...task };
                copyTask.idColumn += 1;
                return copyTask;
            }
            return task;
        });
        setTasks(updatedTasks);
    };
    const [column, setColumn] = useState(defaultColumns);
    return (
        <div className="app">
            <Provider value={column}>
                <Board tasks={tasks} moveLeft={moveLeft} moveRight={moveRight} />
            </Provider>
        </div>
    );
};

export default App;
