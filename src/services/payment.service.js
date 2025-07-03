import axios from "axios";

export const payment = (data, callback) => {
  axios
    .post("http://localhost:8000/payments", data)
    .then((res) => {
      localStorage.setItem("payment", JSON.stringify(res.data));
      callback();
    })
    .catch((err) => console.log(err));
};

export const paymentToLocalStorage = (data) => localStorage.setItem("payment", JSON.stringify(data));