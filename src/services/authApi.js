import api from "./axios";

// REGISTER
export const registerUser = async (data) => {
  try {
    const res = await api.post("/users", data);
    return res.data;
  } catch (error) {
    throw new Error("Gagal register");
  }
};

// LOGIN
export const loginUser = async (email, password) => {
  try {
    const res = await api.get("/users");

    const users = res.data;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) throw new Error("Email atau password salah");

    return user;
  } catch (error) {
    throw new Error(error.message || "Gagal fetch user");
  }
};