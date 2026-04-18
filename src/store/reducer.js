export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  courses: [],
};

export const reducer = (state, action) => {
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
};