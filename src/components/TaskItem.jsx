import React from "react";

const TaskItem = ({ task }) => {
  return (
    <>
      <h2>{task.description} {task.id}</h2>

    </>
  );
};

export default TaskItem;
// class TaskItem extends React.Component {
//   render() {
//     const { task } = this.props;
//     return (
//     <>
    
//     <h1>{task.description}</h1>
//     <p>{task.isCompleted ? "Completa" : "Não completa" }</p>
//     </>
//     );
//   }
// }
// export default TaskItem;

