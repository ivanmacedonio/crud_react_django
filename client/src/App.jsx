import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/tasksPage";
import { TaskFormPage } from "./pages/taskFormPage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  return (
    <>
      <BrowserRouter>

      
        <Routes>
          <Route path="/" element={<Navigate to={"/tasks"} />} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
