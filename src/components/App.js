// ./src/components/App.js
import React,{useState} from 'react';
import Board from './Board';
import defaultColumns from './defaultColumns';
import defaultTasks from './defaultTasks';


import ColumnContext from '../context';

import './css/app.css';

const App = (props) => {
    const { Provider } = ColumnContext;

    const [task, setTask] = useState(defaultTasks);
    const [column, setColumn] = useState(defaultColumns);
    return (
        <div className="app">
            <Provider value={column}>
                <Board defaultTasks={defaultTasks} />
            </Provider>
        </div>
    );
};

export default App;
