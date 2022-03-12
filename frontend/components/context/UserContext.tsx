import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface UserData {
  name: string;
  username: string;
  is_admin: boolean;
}

interface IUserContext {
  user: UserData | null;
  mutateUser: () => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);
const useUser = () => useContext(UserContext);

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const mutateUser = () => {
    async function f() {
      try {
        let response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/me");
        if (response.status == 200) setUser(response.data);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserContextProvider };
