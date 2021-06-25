import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";

const AllGroupContext = createContext();

export const AllGroupProvider = ({ children }) => {
  const [page, setPage] = useState([]);
  const [allGroups, setAllGroup] = useState([]);
  const [idGroup, setIdGroup] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAdd = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSub = () => {
    setCurrentPage(currentPage - 1);
  };

  const apiHook = () => {
    api
      .get(`groups/?page=${currentPage}`)
      .then((response) => {
        setPage(response.data);
        setAllGroup(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiHook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <AllGroupContext.Provider
      value={{
        allGroups,
        idGroup,
        setIdGroup,
        page,
        currentPage,
        handleAdd,
        handleSub,
      }}
    >
      {children}
    </AllGroupContext.Provider>
  );
};

export const useAllGroups = () => useContext(AllGroupContext);
