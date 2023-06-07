import React, { useEffect, useState, useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import "../css/nav.css"


const Nav = ({ handleStartDateChange, handleEndDateChange }) => {
    const [toggle, setToggle] = useState(false);
    const {searchTerm, setSearchTerm} = useContext(FilterContext);
    const {start} = useContext(FilterContext);
    const {end} = useContext(FilterContext);
    useEffect(()=>{

    },[searchTerm])
  return (
    <div className="filters">
      <div className="search">
        <label className="search-label" htmlFor="search">Search by name: </label>
        <input
          className="search-input"
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="filter-label">
        <label onClick={() => setToggle(!toggle)}>Filter</label>
      </div>
      {toggle && (
        <div className="dates">
          <div className="start-date">
            <label htmlFor="startDate">Start Date: </label>
            <input
              type="date"
              id="startDate"
              value={start}
              onChange={handleStartDateChange}
            />
          </div>

          <div className="end-date">
            <label htmlFor="endDate">End Date: </label>
            <input
              type="date"
              id="endDate"
              value={end}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
