import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import "./AddTask.scss";
import axios from "axios";
import { useAlert } from "react-alert";

const AddTask = () => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const oonChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error("A tarefa precisa de uma descrição!");
      }
      await axios.post("https://fsc-task-manager-backend.herokuapp.com/tasks",{
        description: task,
        isCompleted:false
      });
    } catch (error) {}
  };
  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar Tarefa..."
        value={"task"}
        onChange={oonChange}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
