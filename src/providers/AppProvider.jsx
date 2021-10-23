import { createContext, useContext } from "react";

const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
}
