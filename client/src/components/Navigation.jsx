import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export const Navigation = () => {
  return (
    <div className="app">
      <div className="title">
        <h1>Tasks app</h1>
      </div>

      <div className="tasks">
        <h3>
          <Link to="/tasks">tasks</Link>
        </h3>
      </div>

      <div className="createtasks">
        <h3>
          <Link to="/tasks-create">create task</Link>
        </h3>
      </div>
    </div>
  );
};
