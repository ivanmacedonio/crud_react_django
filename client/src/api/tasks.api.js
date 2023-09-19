import axios from 'axios'

const tasksApi = axios.create({
     baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => {
     return tasksApi.get('/')
}

export const createTask = (task) => {
     return axios.post('http://localhost:8000/tasks/api/v1/tasks/', task)
}

export const deleteTask = (id) => {
     return axios.delete(`http://localhost:8000/tasks/api/v1/tasks/${id}/`)
}

export const updateTask = (id, task) => {
     return axios.put(`http://localhost:8000/tasks/api/v1/tasks/${id}/`,
     task)
}

export const getTask = (id, task) => {
     return axios.get(`http://localhost:8000/tasks/api/v1/tasks/${id}/`)
}