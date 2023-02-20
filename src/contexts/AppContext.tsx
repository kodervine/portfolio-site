import { FC, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface AppContextType {
  handleNavigate: (navigate: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: FC = ({ children }) => {
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
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};
