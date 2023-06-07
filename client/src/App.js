import React, { useEffect, useState, useContext } from "react";
import "./css/app.css";
import Table from "./components/Table"
import Nav from "./components/Nav"
import { FilterContext } from "./context/FilterContext";
import {initialData} from "./data"

function App() {
 
  const [data, setData] = useState(initialData);
  const {searchTerm} = useContext(FilterContext);
  const {start, setStart} = useContext(FilterContext);
  const {end, setEnd} = useContext(FilterContext);
 
  useEffect(() => { 
    const filteredData = initialData.filter((campaign) => {
        const { name, startDate, endDate } = campaign;
        const lowerCaseName = name.toLowerCase();
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);    
        const selectedStartDate = start ? new Date(start) : null;
        const selectedEndDate = end ? new Date(end) : null;
       
        return (
            lowerCaseName.includes(lowerCaseSearchTerm) 
            
             &&
              (!selectedStartDate || new Date(startDateObj) >= selectedStartDate) &&
              (!selectedEndDate ||  new Date(endDateObj) <= selectedEndDate)
               &&
              (!selectedEndDate || selectedStartDate <= selectedEndDate)
              );

            });

            if(filteredData.length > 0)
            setData(filteredData);

  },[searchTerm, start, end])

  const handleStartDateChange = (e) => {
  
    setStart(e.target.value);
  };
  
  const handleEndDateChange = (e) => {

    setEnd(e.target.value);
  };

  return (
    <div className="App table-responsive">
        <Nav handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange}/>
      <Table data={data} />
    </div>
  );
}

export default App;
