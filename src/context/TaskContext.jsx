import { createContext, useEffect, useState } from "react";
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  // equivalente a decir
  // const tasks = []

  function createTask(task) {
    // copia las tareas de tasks.js y agrega la nueva tarea
    // [...tasks, task]
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    // console.log(tasks)
    // console.log(taskId)
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask
    }}>{props.children}</TaskContext.Provider>
  );
}
