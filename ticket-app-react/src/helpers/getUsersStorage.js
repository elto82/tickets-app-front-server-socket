export const getUsersStorage = () => {
  return {
    agente: localStorage.getItem("agente") || null,
    escritorio: localStorage.getItem("escritorio") || null,
  };
};
