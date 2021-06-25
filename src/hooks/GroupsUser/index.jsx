import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useToken } from "../Token";

const GroupsUserContext = createContext();

export const GroupsUserProvider = ({ children }) => {
  const [groupsUser, setGroupsUser] = useState([]);
  const { token } = useToken();

  const getGroupsUser = (token) => {
    api
      .get("groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroupsUser([...response.data]);
      })
      .catch((err) => console.log(err)); 
  };

  useEffect(() => {
    if (token !== "") {
      getGroupsUser(token);
    }
  }, [token]);

  return (
    <GroupsUserContext.Provider
      value={{ groupsUser, setGroupsUser, getGroupsUser }}
    >
      {children}
    </GroupsUserContext.Provider>
  );
};

export const useGroupsUser = () => useContext(GroupsUserContext);
