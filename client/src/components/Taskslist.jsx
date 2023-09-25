import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import axios from "axios";
import "./taskslist.css";

export const Taskslist = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadTasks() {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.get("http://localhost:8000/tasks/api/v1/tasks/", {
        headers,
      });
      setTasks(res.data);
    }
    console.log(tasks);
    loadTasks();
  }, []);

  return (
    <div className="app">
      <div className="nav">
        <Navigation></Navigation>
      </div>
      <div className="app2">
        {tasks.map((task) => (
          <div
            className="appdiv"
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
    </div>
  );
};
