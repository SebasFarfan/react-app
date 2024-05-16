import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  // function mostrarAlerta() {
  //   alert('Eliminando tarea.....')
  // }
  // const valor = useContext(TaskContext)
  // console.log(valor)
  const { deleteTask } = useContext(TaskContext)
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <h3 className="text-gray-500 text-sm">{task.description}</h3>
      <button 
        className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
