// ./src/components/App.js
import React, { useState, useEffect } from 'react';
import Board from './Board';
import defaultColumns from './defaultColumns';
import defaultTasks from './defaultTasks';

import ColumnContext from '../context';

import './css/app.css';

const App = props => {
    const { Provider } = ColumnContext;
    const [task, setTask] = useState(defaultTasks);

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(task));
    }, [task]);

    const moveLeft = e => {
        e.preventDefault();
        console.log(task);
    };
    const [column, setColumn] = useState(defaultColumns);
    return (
        <div className="app">
            <Provider value={column}>
                <Board defaultTasks={defaultTasks} moveLeft={moveLeft} />
            </Provider>
        </div>
    );
};

export default App;
