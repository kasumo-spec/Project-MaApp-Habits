import { createContext, useContext, useEffect, useState } from "react";
import { useToken } from "../Token";
import jwtDecode from "jwt-decode";
import api from "../../services/api";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const { token } = useToken();
  const [createSucess, setCreateSucess] = useState(false);

  useEffect(() => {
    if (token !== "") {
      let decoderId = jwtDecode(token);
      setUserId(decoderId.user_id);
      api.get(`/users/${decoderId.user_id}/`).then((res) => {
        setUserName(res.data.username);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const createUser = (data) => {
    api
      .post("/users/", data)
      .then((response) => {
        if (response.status === 201) {
          setCreateSucess(true);
        }
      })
      .catch(() => setCreateSucess(false));
  };

  return (
    <UserContext.Provider
      value={{ userName, userId, setUserName, createUser, createSucess }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
