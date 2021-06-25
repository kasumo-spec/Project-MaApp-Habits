import {createContext, useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";


export const HeaderStateContext = createContext([])

export const HeaderStateProvider = ({children}) => {
    const [actualLocation, setActualLocation] = useState("");
    const [firstButton, setFirstButton] = useState("");
    const history = useHistory()

    useEffect(() => {
        setActualLocation(history.location.pathname);
        if (actualLocation === "/dashboard") {
            setFirstButton("/groups");
        } else if (actualLocation === "/groups") {
            setFirstButton("/dashboard");
        } else if (actualLocation === "/allgroups") {
            setFirstButton("/groups")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[actualLocation])

    return (
        <HeaderStateContext.Provider value={{firstButton, setFirstButton ,actualLocation,setActualLocation}} >
            {children}
        </HeaderStateContext.Provider>
    )
}

export const useHeaderStateProvider = () => useContext(HeaderStateContext)