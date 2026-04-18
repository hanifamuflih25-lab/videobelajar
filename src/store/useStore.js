import { create } from "zustand";
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../services/api";
import { loginUser, registerUser } from "../services/authApi";


const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  courses: [],
};


function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    case "SET_COURSES":
      return { ...state, courses: action.payload };

    default:
      return state;
  }
}


export const useStore = create((set, get) => ({
  ...initialState,

  dispatch: (action) =>
    set((state) => reducer(state, action)),

 
  login: async (email, password) => {
    try {
      const user = await loginUser(email, password);

      localStorage.setItem("user", JSON.stringify(user));

      get().dispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });
    } catch (err) {
      throw new Error(err.message || "Gagal login");
    }
  },

  register: async (data) => {
    try {
      return await registerUser(data);
    } catch (err) {
      throw new Error(err.message || "Gagal register");
    }
  },

  logout: () => {
    localStorage.removeItem("user");

    get().dispatch({ type: "LOGOUT" });
  },

  fetchCourses: async () => {
    try {
      const data = await getCourses();

      get().dispatch({
        type: "SET_COURSES",
        payload: data,
      });
    } catch (err) {
      throw new Error(err.message || "Gagal fetch courses");
    }
  },

  addCourse: async (payload) => {
    try {
      await createCourse(payload);

      const data = await getCourses();

      get().dispatch({
        type: "SET_COURSES",
        payload: data,
      });
    } catch (err) {
      throw new Error(err.message || "Gagal tambah course");
    }
  },

  editCourse: async (id, payload) => {
    try {
      await updateCourse(id, payload);

      const data = await getCourses();

      get().dispatch({
        type: "SET_COURSES",
        payload: data,
      });
    } catch (err) {
      throw new Error(err.message || "Gagal update course");
    }
  },

  removeCourse: async (id) => {
    try {
      await deleteCourse(id);

      const data = await getCourses();

      get().dispatch({
        type: "SET_COURSES",
        payload: data,
      });
    } catch (err) {
      throw new Error(err.message || "Gagal delete course");
    }
  },
}));

export default useStore;