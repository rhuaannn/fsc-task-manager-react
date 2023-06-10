import React, { useState } from "react";
import TaskItem from "./components/TaskItem";
import "./App.css";

const App = () => {
  const initialTasks = [
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
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [isPreviousState, setIsPreviousState] = useState(false);

  const handleToggleTasks = () => {
    if (isPreviousState) {
      setTasks(initialTasks);
    } else {
      setTasks([ ]);
    }
    setIsPreviousState(!isPreviousState);
  };

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <button onClick={handleToggleTasks}>
        {isPreviousState ? "Mostrar Tarefas" : "Remover Tarefas"}
      </button>
    </>
  );
};

export default App;
