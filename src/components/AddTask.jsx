import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import "./AddTask.scss";

const AddTask = () => {
  const [task, setTask] = useState("");

  const oonChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar Tarefa..."
        value={"task"}
        onChange={oonChange}
      />
      <CustomButton>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
