import React, { useContext, useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <AppContext.Provider
      value={{
        modal,
        sidebar,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook- 1 import
export const useGlobalContext = () => {
  return useContext(AppContext);
};
