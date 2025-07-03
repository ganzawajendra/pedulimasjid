import axios from "axios";
export const register = (e, data, callback) => {
  e.preventDefault();

  axios
  .post("http://localhost:8000/users", data)
  .then(() => callback())
  .catch((err) => console.log(err));
};

export const registerToLocalStorage = (data) => localStorage.setItem("user", JSON.stringify(data));


export const login = async (data) => {
  const response = await axios.get("http://localhost:8000/users", {
    params: {
      email: data.email,
      password: data.password,
    },
  });

  return response.data[0];
  
};

export const loginFromDatabase = async (data) => {
  try {
    const response = await axios.get("/mock-db.json");
    const users = response.data.users; // akses ke array di dalam objek

    const matchedUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    return matchedUser || null;
  } catch (err) {
    console.error("Gagal mengambil data user:", err);
    return null;
  }
};


export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("payment");
  
}