import React from "react";
import { useEffect } from "react";

const TaskItem = ({ task }) => {
  useEffect(() => {
    console.log("component was mounted");
    return () => {
      console.log("i will unmount!");
    }
  }, []);

  return (
    <>
      <h2>
        {task.description} {task.id}
      </h2>
    </>
  );
};

export default TaskItem;
