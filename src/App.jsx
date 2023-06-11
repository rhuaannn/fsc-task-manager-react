import React, { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";
 

import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar React",
      isCompleted: false,
    },
    {
      id: "2",
      description: "Jogar free fire",
      isCompleted: true,
    },
  ]);
  const fetchTasks = async () => {
    try {
      const {data} = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks");

      setTasks(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;
