import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/tasksPage";
import { TaskFormPage } from "./pages/taskFormPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>

      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Navigate to={"/tasks"} />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
