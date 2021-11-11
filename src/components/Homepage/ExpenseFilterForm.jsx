import React, { Fragment,useContext} from "react";
import { GlobalContext } from "../../context/GlobalState";


const ExpenseFilterForm = () => {

    let {settings}=useContext(GlobalContext)
  return (
    <div className="ExpenseFilterForm">
      <div className="container filter-content">
        <input
          type="text"
          placeholder="Search Expenses"
          name="searchInput"
          autocomplete="off"
          style={(settings.theme)?{backgroundColor:'#253454',color:'white',border:'none',outline:'none'}:{}}
        />
        <select name="filterDropdown" className="filter-dropdown" style={(settings.theme)?{backgroundColor:'#253454',color:'white',border:'none',outline:'none'}:{}} >
          <option value="1" selected>
            Date
          </option>
          <option value="2">Amount</option>
        </select>
        <h1>Date Picker</h1>
      </div>
    </div>
  );
};

export default ExpenseFilterForm;
