// ./src/components/App.js
import React, { useState, useEffect } from 'react';
import Board from './Board';
import Form from './Form';
import defaultColumns from './defaultColumns';
import defaultTasks from './defaultTasks';

import ColumnContext from '../context';

import './css/app.css';

//const TaskContext = React.createContext();

const App = props => {
    const [tasks, setTasks] = useState(defaultTasks);
    const [column, setColumn] = useState(defaultColumns);
    const { Provider } = ColumnContext;

    useEffect(() => {
        const currentTask = JSON.parse(localStorage.getItem('task'));
        setTasks(currentTask);
    }, []);

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks));
    }, [tasks]);

    const onSubmit = data => {
        const { name, user } = data;
        const newTask = {
            id: 20,
            name,
            idColumn: 1,
            user,
        };

        const updatedTasks = [...tasks];
        console.log(updatedTasks);
        updatedTasks.push(newTask);

        setTasks(updatedTasks);
        console.log(tasks);
    };

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
            <Form onSubmit={onSubmit} />
        </div>
    );
};

export default App;
