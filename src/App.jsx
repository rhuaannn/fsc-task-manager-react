import { useState } from "react";
 import TaskItem from "./components/TaskItem";
 import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "	Estudar React ",
      isCompleted: false,
    },
    {
      id: "2",
      description: "Jogar free fire ",
      isCompleted: true,
    },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;

// import React from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [
//         {
//           id: "1",
//           description: "	Estudar React ",
//           isCompleted: false,
//         },
//         {
//           id: "2",
//           description: "Jogar free fire ",
//           isCompleted: true,
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <>
//           {this.state.tasks.map((task) => (
//             <TaskItem key={task.id} task={task} />
//           ))}
//         </>
//     )
//   } 
// }
// export default App;