import React from 'react';
import './css/task.css';

const Task = (props) => {
    
     
    const renderTasks = props.defaultTasks.map((task) =>{
        if(props.columnID === task.idColumn){
            
            return <div className="task">{task.name}</div>
        }
    }
  );

    return (
       <div>{renderTasks}</div>
    );
};

export default Task;
