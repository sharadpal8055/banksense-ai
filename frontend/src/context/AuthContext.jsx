import { createContext, useContext, useState } from "react";

import { loginUser, logoutUser } from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("banker")));

  const login = async (data) => {
    const res = await loginUser(data);

    setUser(res.data.banker);

    localStorage.setItem(
      "banker",

      JSON.stringify(res.data.banker),
    );

    return res;
  };

  const logout = async () => {
    await logoutUser();

    localStorage.removeItem("banker");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,

        login,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
