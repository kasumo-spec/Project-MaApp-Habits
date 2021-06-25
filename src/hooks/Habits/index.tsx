import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";
import { useToken } from "../Token";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const { token } = useToken();

  const getHabits = () => {
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (token !== "") {
      getHabits();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <HabitsContext.Provider value={{ habits, setHabits, getHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabit = () => useContext(HabitsContext);
