/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// create Global Context and export
export const GlobalContext = createContext(null);

// create global state and export
function GlobalState({children}){

    const [theme, setTheme] = useState("light");

    function handleChangeThemeOnButtonClick() {
      setTheme(theme === "light" ? "dark" : "light");
    }
  

    return (
        <GlobalContext.Provider value = {{theme, handleChangeThemeOnButtonClick}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;