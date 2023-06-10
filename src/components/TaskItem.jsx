import React from "react";
 
const TaskItem = ({task}) => {
 
  return(
    <>
   <h2>
   {task.description}
    </h2> 
    </>
  );
};

export default TaskItem;
