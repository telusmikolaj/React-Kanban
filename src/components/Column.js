import React from 'react';
import Task from './Task';

const Column = () => {
    return (
        <>
            <tr>
                <th>Pending</th>
                <th>Analysis - Doing</th>
                <th>Analysis - Done</th>
                <th>Development - Doing</th>
                <th>Development - Done</th>
                <th>Test</th>
                <th>Deploy</th>
            </tr>
            <Task />
        </>
    );
};

export default Column;
