import React from 'react';
import ColumnContext from '../context';
import Task from './Task';
import './css/column.css';

const Column = (props) => {
    const { Consumer } = ColumnContext;

    return (
        <Consumer>
            {value =>
                value.map(item => (
                    <div className="column" id={item.id}>
                        <h1>{item.name}</h1>
                        <Task columnID={item.id} defaultTasks={props.defaultTasks} />
                    </div>
                ))
            }
        </Consumer>
    );
};

export default Column;
