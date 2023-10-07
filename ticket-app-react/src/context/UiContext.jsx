import { useState, createContext } from 'react';


export const UiContext = createContext();
export const UiProvider = ({ children }) => {
  const [ menu, setMenu ] = useState(true);

  const showMenu = () => {
    setMenu(false);
  };

  const hideMenu = () => {
    setMenu(true);
  };

  return (
    <UiContext.Provider value={{
      menu,
      showMenu,
      hideMenu,
    }}>
      {children}
    </UiContext.Provider>
  );
};
