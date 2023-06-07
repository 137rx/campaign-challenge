import { createContext, useState } from "react";
export const FilterContext = createContext();

export const FilterProvider = ({children})=>{

  const [searchTerm, setSearchTerm] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  
    return(
        <FilterContext.Provider value={{searchTerm, setSearchTerm, start, setStart, end, setEnd}}>
        {children}
        </FilterContext.Provider>
    )
}