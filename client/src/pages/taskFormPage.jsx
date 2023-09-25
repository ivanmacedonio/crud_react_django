import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import axios from "axios";
export const TaskFormPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();
  const token = localStorage.getItem("token");
  const params = useParams();
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      console.log("actualizando..");
      await axios.put(
        `http://localhost:8000/tasks/api/v1/tasks/${params.id}/`,
        data,
        {
          headers,
        }
      );
      navigate('/tasks')
    } else {
      await axios.post("http://localhost:8000/tasks/api/v1/tasks/", data, {
        headers,
      });
      navigate('/tasks')
    }
  });

  useEffect(() => {
    async function loadTasks() {
      if (params.id) {
        const res = await axios.get(
          `http://localhost:8000/tasks/api/v1/tasks/${params.id}/`,
          {
            headers,
          }
        );
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    }
    loadTasks();
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: false })}
        ></textarea>
        <button>Save</button>
      </form>

      {params.id ? (
        <button
          onClick={async () => {
            const accepted = window.confirm("Estas seguro de eliminar");
            if (accepted) {
              await axios.delete(`http://localhost:8000/tasks/api/v1/tasks/${params.id}/`, {
                headers
              })
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

///params obtiene datos de la url datos son parametros
