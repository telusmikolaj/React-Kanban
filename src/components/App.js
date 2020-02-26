// ./src/components/App.js
import React, { useState } from 'react';
import Board from './Board';
import defaultColumns from './defaultColumns';

const ColumnsContext = React.createContext(defaultColumns);

const App = () => {
    // const [tasks, setTask] = useState({});
    const [columns, setColumn] = useState(defaultColumns);
    console.log(columns);
    return (
        <div>
            <ColumnsContext.Provider>
                <Board />
            </ColumnsContext.Provider>
        </div>
    );
};

export default App;
