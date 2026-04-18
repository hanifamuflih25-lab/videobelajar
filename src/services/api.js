import api from "./axios";


export const getCourses = async () => {
  const res = await api.get("/courses");
  return res.data;
};

export const createCourse = async (data) => {
  const res = await api.post("/courses", data);
  return res.data;
};

export const updateCourse = async (id, data) => {
  const res = await api.put(`/courses/${id}`, data);
  return res.data;
};

export const deleteCourse = async (id) => {
  await api.delete(`/courses/${id}`);
  return true;
};

export const registerUser = async (data) => {
  const res = await api.post("/users", data);
  return res.data;
};

export const loginUser = async (email, password) => {
  const res = await api.get(`/users?email=${email}&password=${password}`);

  if (!res.data || res.data.length === 0) {
    throw new Error("Email atau password salah");
  }

  return res.data[0];
};