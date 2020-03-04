// ./src/components/App.js
import React from 'react';
import Board from './Board';
import defaultColumns from './defaultColumns';
import ColumnContext from '../context';
import './css/app.css';

const App = () => {
    const { Provider } = ColumnContext;
    // const [task, setTask] = useState({});
    // const [column, setColumn] = useState({});
    return (
        <div className="app">
            <Provider value={defaultColumns}>
                <Board />
            </Provider>
        </div>
    );
};

export default App;
