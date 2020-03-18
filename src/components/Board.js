import React from 'react';
import Column from './Column';

const Board = props => {
    return <Column tasks={props.tasks} moveLeft={props.moveLeft} moveRight={props.moveRight} />;
};

export default Board;
