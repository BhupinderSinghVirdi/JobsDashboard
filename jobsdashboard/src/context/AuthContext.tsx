import { createContext, useMemo, useState, ReactNode } from 'react';

export type AuthContextType = {
  token : string;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType | {}>({});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  // const memoAuth = useMemo(
  //   () => ({
  //     isLoggedIn,
  //     login,
  //     logout,
  //   }),
  //   [isLoggedIn, login, logout]
  // );

  return (
    // the Provider gives access to the context to its children
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
    //<AuthContext.Provider value={memoAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
