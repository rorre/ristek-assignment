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
  mutateUser: () => void;
  logout: () => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);
const useUser = () => useContext(UserContext);

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const mutateUser = () => {
    async function f() {
      try {
        let response = await axiosInstance.get("/me");
        if (response.status == 200) setUser(response.data);
      } catch {}
    }
    f();
  };

  const logout = () => {
    async function f() {
      try {
        await axiosInstance.get("/auth/logout");
        setUser(null);
      } catch {}
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
        mutateUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserContextProvider };
