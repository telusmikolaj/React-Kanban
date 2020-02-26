// ./src/components/App.js
import React, { useState } from 'react';
import Board from './Board';

const App = () => {
    const [task, setTask] = useState({});
    const [column, setColumn] = useState({});
    return (
        <div>
            <Board />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Task Name
                        <input id="name" type="text" name="name" onChange={handleChange} value={name} />
                    </label>
                </div>
                <div>
                    <label htmlFor="user">
                        User
                        <input id="user" type="text" name="user" onChange={handleChange} value={user} />
                    </label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default App;
