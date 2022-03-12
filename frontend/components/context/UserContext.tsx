import axios from "axios";
import { axiosInstance } from "components/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

interface UserData {
  name: string;
  username: string;
  is_admin: boolean;
}

interface IUserContext {
  user: UserData | null;
  isLoading: boolean;
  mutateUser: () => void;
  logout: () => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);
const useUser = () => useContext(UserContext);

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const mutateUser = () => {
    async function f() {
      setLoading(true);
      try {
        let response = await axiosInstance.get("/me");
        if (response.status == 200) setUser(response.data);
      } catch {
      } finally {
        setLoading(false);
      }
    }
    f();
  };

  const logout = () => {
    async function f() {
      setLoading(true);
      try {
        await axiosInstance.get("/auth/logout");
        setUser(null);
      } catch {
      } finally {
        setLoading(false);
      }
    }
    f();
  };

  useEffect(() => {
    mutateUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        mutateUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserContextProvider };
