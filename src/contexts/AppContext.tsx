import { FC, ReactNode, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface AppContextProps {
  handleNavigate: (navigate: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigateTo = useNavigate();
  const handleNavigate = (navigate: string) => {
    navigateTo(navigate);
  };

  return (
    <AppContext.Provider value={{ handleNavigate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
