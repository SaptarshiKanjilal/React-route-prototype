import React, { Fragment,useContext,useState,useEffect} from "react";
import { GlobalContext } from "../../context/GlobalState";
import {useHistory} from 'react-router-dom'

const ExpenseFilterForm = () => {

    let {settings,editFilter,filter}=useContext(GlobalContext)
    let [listFilter, setListFilter]=useState('1')
    let history=useHistory()
    const handleFilters=(e)=>{
      
      setListFilter(e.target.value)
      editFilter(listFilter)
      console.log(filter);
      history.push('/')
    }
    // useEffect(()=>{

    // },[filter])

    // console.log(filter);
  return (
    <div className="ExpenseFilterForm">
      <div className="container filter-content">
        <input
          type="text"
          placeholder={(settings.layout==='Expense')?"Search Expenses":'Search Workouts'}
          name="searchInput"
          autocomplete="off"
          style={(settings.theme==='Dark')?{backgroundColor:'#253454',color:'white',border:'none',outline:'none'}:{}}
        />
        <select name="filterDropdown" className="filter-dropdown" style={(settings.theme==='Dark')?{backgroundColor:'#253454',color:'white',border:'none',outline:'none'}:{}} onChange={handleFilters}  >
          <option value="1" selected>
            Date
          </option>
          <option value="2">{(settings.layout==='Expense')?"Amount":'Steps'}</option>
        </select>
        <h1>Date Picker</h1>
      </div>
    </div>
  );
};

export default ExpenseFilterForm;
