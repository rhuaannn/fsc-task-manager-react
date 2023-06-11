import React  from "react";

const TaskItem = ({ task }) => {
 

  return (
    <React.Fragment key={task.id}>
      <h1>
        {task.description} {task.id}
      </h1>
      <h3>{task.isCompleted ? "Completa" : "nao completa"}</h3>
    </React.Fragment>
  );
};

export default TaskItem;
