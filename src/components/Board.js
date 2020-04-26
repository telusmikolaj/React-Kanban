import React from 'react';
import Column from './Column';
import './css/board.css';

const Board = props => {
    return (
        <div className="board">
            <div className="board-bar">
                <p className="board-name">Board Name</p>
            </div>
            <div className="board-wrapper">
                <Column tasks={props.tasks} moveTask={props.moveTask} deleteTask={props.deleteTask} />
            </div>
        </div>
    );
};
export default Board;
