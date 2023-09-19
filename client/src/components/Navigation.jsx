import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <h1>Tasks app!</h1>
      <Link to="/tasks">tasks</Link>
      <hr />
      <Link to="/tasks-create">create task</Link>
    </div>
  );
};
