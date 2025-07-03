export const handleInput = (e, data, setData) => {
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
};
