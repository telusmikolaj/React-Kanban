import React from 'react';
import Task from './Task';

const Column = () => {
    return (
        <ColumnsContext.Consumer>
            { name => (
            <tr>
                <th>name</th>
            </tr>
            )}
        </ColumnsContext.Consumer>
    );
};

export default Column;
