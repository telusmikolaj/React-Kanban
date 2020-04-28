import React from 'react';
import ColumnContext from '../context';
import Task from './Task';
import './css/column.css';

const Column = props => {
    const { Consumer } = ColumnContext;

    return (
        <div className="board-columns">
            <Consumer>
                {value =>
                    value.map(item => (
                        <div className="board-column" id={item.id}>
                            <div className="column-title">{item.name}</div>
                            <div className="tasks-container">
                                <Task
                                    columnID={item.id}
                                    tasks={props.tasks}
                                    canMoveLeft={item.id !== 1}
                                    canMoveRight={item.id !== 7}
                                    moveTask={props.moveTask}
                                    deleteTask={props.deleteTask}
                                    canMoveToNextColumn={props.canMoveToNextColumn}
                                    canMoveToPrevColumn={props.canMoveToPrevColumn}
                                />
                            </div>
                        </div>
                    ))
                }
            </Consumer>
        </div>
    );
};

export default Column;
