import React from 'react';
import ColumnContext from '../context';
import Task from './Task';
import './css/column.css';

const Column = props => {
    const { Consumer } = ColumnContext;

    return (
        <Consumer>
            {value =>
                value.map(item => (
                    <div className="column" id={item.id}>
                        <h1>{item.name}</h1>
                        <Task
                            columnID={item.id}
                            tasks={props.tasks}
                            canMoveLeft={item.id !== 1}
                            canMoveRight={item.id !== 7}
                            moveTask={props.moveTask}
                        />
                    </div>
                ))
            }
        </Consumer>
    );
};

export default Column;
