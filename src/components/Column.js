import React from 'react';
import ColumnContext from '../context';

const Column = () => {
    const { Consumer } = ColumnContext;

    return (
        <Consumer>
            {value =>
                value.map(item => {
                    return item;
                })
            }
        </Consumer>
    );
};

export default Column;
