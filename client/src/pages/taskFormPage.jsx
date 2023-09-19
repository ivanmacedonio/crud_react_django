import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const TaskFormPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();

  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      ///si exieste un parametro en la url del form significa que la tarea
      ///ya existia, por ende estamos en editando
      console.log("actualizando..");
      await updateTask(params.id, data);
    } else {
      await createTask(data);
    }
  });

  useEffect(() => {
    async function loadTasks() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    }
    loadTasks();
  }, []);

  return (
    <div>
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
              await deleteTask(params.id);
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
