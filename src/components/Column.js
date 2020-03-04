import React from 'react';
import ColumnContext from '../context';
import './css/column.css';

const Column = () => {
    const { Consumer } = ColumnContext;

    return (
        <Consumer>
            {value =>
                value.map(item => (
                    <div className="column">
                        <h1>{item.name}</h1>
                    </div>
                ))
            }
        </Consumer>
    );
};

export default Column;
