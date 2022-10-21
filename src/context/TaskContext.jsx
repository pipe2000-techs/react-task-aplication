import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../Data/Task";

export const TaskContext = createContext()
   
export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask(title, description){
        setTasks([...tasks, {
            id: tasks.length,
            title : title,
            description : description
        }])
      }

    function deleteTask(taskId){
        setTasks(tasks.filter((tasks) => tasks.id !== taskId));
    }

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
      <TaskContext.Provider
        value={{
          tasks: tasks,
          deleteTask: deleteTask,
          createTask: createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    );
}

