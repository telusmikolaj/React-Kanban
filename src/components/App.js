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
    const [columns, setColumn] = useState(defaultColumns);
    const [isEmpty, setIsEmpty] = useState(true);
    const [lastColumnID, setLastColumnID] = useState(0);
    const { Provider } = ColumnContext;

    useEffect(() => {
        const currentTask = JSON.parse(localStorage.getItem('task'));
        setTasks(currentTask);
    }, []);

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks));
        //console.log(tasks);
    }, [tasks]);
    useEffect(() => {
        console.log(columns);
    }, [columns]);

    const onSubmit = data => {
        const { name, user } = data;
        let lastItemID = 0;
        setIsEmpty(false);
        if (!isEmpty) {
            lastItemID = getLastItemID();
        }
        const newTask = {
            id: lastItemID + 1,
            name,
            idColumn: 1,
            user,
        };

        const updatedTasks = [...tasks];
        updatedTasks.push(newTask);

        setTasks(updatedTasks);
        increseNumOfTasks(newTask.idColumn);
    };

    const increseNumOfTasks = columndID => {
        const updatedColumns = columns.map(column => {
            if (columndID == column.id) {
                console.log('INcrese num of taskk');

                const columnCopy = { ...column };
                columnCopy.activeTasks += 1;
                return columnCopy;
            }

            return column;
        });
        setColumn(updatedColumns);
    };
    const decreseNumOfTasks = columndID => {
        const updatedColumns = columns.map(column => {
            if (columndID == column.id) {
                const columnCopy = { ...column };

                columnCopy.activeTasks -= 1;

                return columnCopy;
            }

            return column;
        });
        console.log(updatedColumns);
        setColumn(updatedColumns);
    };

    const getLastItemID = () => {
        const [lastItem] = [...tasks].slice(-1);

        return lastItem.id;
    };

    const deleteTask = id => {
        const updatedTasks = tasks.filter(item => item.id !== id);
        setTasks(updatedTasks);
    };

    const canMoveToNextColumn = task => {
        const isNextColumn = task.idColumn !== 7;
        let isLimitReached = false;
        if (isNextColumn) {
            const nextColumnID = task.idColumn + 1;
            const nextColumn = columns.find(item => item.id == nextColumnID);
            isLimitReached = nextColumn.activeTasks == nextColumn.limit;
            console.log(nextColumn);
            console.log(isLimitReached);
            console.log(isNextColumn);
        }

        return !isLimitReached && isNextColumn;
    };

    const getNextColumnID = task => {
        let nextColumnID = task.idColumn + 1;
        while (!isFreeSpaceInColumn(nextColumnID) || nextColumnID < 8) {
            nextColumnID++;
        }

        return nextColumnID;
    };

    const isFreeSpaceInColumn = columnID => {
        const column = columns.find(item => item.id == nextColumnID);
        return column.activeTasks < column.limit;
    };

    const canMoveToPrevColumn = task => {
        const isPrevColumn = task.idColumn !== 1;
        let isLimitReached = false;
        if (isPrevColumn) {
            const prevColumnID = task.idColumn - 1;
            const prevColumn = columns.find(item => item.id == prevColumnID);
            isLimitReached = prevColumn.activeTasks == prevColumn.limit;
            console.log(prevColumn);
            console.log(isLimitReached);
            console.log(isPrevColumn);
        }

        return !isLimitReached && isPrevColumn;
    };
    const moveTask = (id, direction) => {
        const updatedTasks = tasks.map(task => {
            if (task.id == id) {
                const copyTask = { ...task };
                if (direction === 'LEFT') {
                    copyTask.idColumn -= 1;
                    increseNumOfTasks(copyTask.idColumn);
                    decreseNumOfTasks(copyTask.idColumn + 1);
                } else {
                    copyTask.idColumn += 1;
                    increseNumOfTasks(copyTask.idColumn);
                    decreseNumOfTasks(copyTask.idColumn - 1);
                }
                return copyTask;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="app">
            <h1 class="app-name has-gradient-text">kanban</h1>
            <Provider value={columns}>
                <Board
                    tasks={tasks}
                    moveTask={moveTask}
                    deleteTask={deleteTask}
                    canMoveToNextColumn={canMoveToNextColumn}
                    canMoveToPrevColumn={canMoveToPrevColumn}
                />
                <Form onSubmit={onSubmit} />
            </Provider>
        </div>
    );
};

export default App;
