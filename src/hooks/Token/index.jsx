import { createContext, useContext, useEffect, useState } from "react";

export const TokenContext = createContext([]);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [tokenSucess, setTokenSucess] = useState(false);

  useEffect(() => {
    let testTokenExist = JSON.parse(localStorage.getItem("@MaApp:token"));
    if (testTokenExist !== null) {
      setToken(testTokenExist);
      setTokenSucess(true);
    }
  }, []);

  return (
    <TokenContext.Provider
      value={{ token, setToken, tokenSucess, setTokenSucess }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
