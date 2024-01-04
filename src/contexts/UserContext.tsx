import { createContext, ReactNode, useContext } from "react";
import useUserProvider from "../hooks/useUserProvider";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {

}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({ children }: UserProviderProps) {
  const userProvider = useUserProvider();

  return (
    <UserContext.Provider value={userProvider}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export default UserContext;
