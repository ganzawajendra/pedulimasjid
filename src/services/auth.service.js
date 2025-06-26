import axios from "axios";
export const register = (e, data, callback) => {
  e.preventDefault();

  axios
    .post("http://localhost:8000/user", data)
    .then((res) => {
      console.log(res);
      if (callback) callback(); // untuk redirect atau aksi lanjutan
    })
    .catch((err) => console.log(err));
};

export const handleInput = (e, data, setData) => {
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
};

export const login = async (data) => {
  const response = await axios.get("http://localhost:8000/user", {
    params: {
      email: data.email,
      password: data.password,
    },
  });

  return response.data[0];
  
};

export const logout = () => {
  localStorage.removeItem("user");
  
}