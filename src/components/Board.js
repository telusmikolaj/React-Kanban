import React from 'react';
import Column from './Column';

const Board = props => {
    return <Column tasks={props.tasks} moveTask={props.moveTask} />;
};

export default Board;
