import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { useNavigate } from "react-router-dom";
export const Taskslist = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    console.log(tasks);
    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}
        >
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          {task.done ? <p>Pending</p> : <p>Completed</p>}
        </div>
      ))}
    </div>
  );
};
