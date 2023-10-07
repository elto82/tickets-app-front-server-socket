export const getUltimos = async () => {
  const resp = await fetch("http://localhost:5001/ultimos");
  const data = await resp.json();
  // console.log(data);
  return data.ultimos;
};
