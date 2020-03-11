import React from 'react';
import Column from './Column';

const Board = (props) => {
    return <Column defaultTasks={props.defaultTasks} />;
};

export default Board;
