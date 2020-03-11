import React from 'react';
import Column from './Column';

const Board = props => {
    return <Column defaultTasks={props.defaultTasks} moveLeft={props.moveLeft} />;
};

export default Board;
