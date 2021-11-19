import React, { Fragment,useContext,useState,useEffect} from "react";
import { GlobalContext } from "../../context/GlobalState";
import {useHistory} from 'react-router-dom'

const ExpenseFilterForm = () => {

    let {settings,editFilter,filter,editSearch,Search}=useContext(GlobalContext)
    let [listFilter, setListFilter]=useState('1')
    let [search, setSearch]=useState('')
    const [displayMessage, setDisplayMessage] = useState("");
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
    const handleChange=(e)=>{
    
      setSearch(e.target.value)
      // editSearch(search)
      //  console.log(str);
    }
    useEffect(() => {                      //Remove the input display delay 
      const timeOutId = setTimeout(() => {setDisplayMessage(search)
        editSearch(search)}, 500);
      // return () => clearTimeout(timeOutId);
    }, [search]);
    // console.log(displayMessage);
  return (
    <div className="ExpenseFilterForm">
      <div className="container filter-content">
        <input
          type="text"
          placeholder={(settings.layout==='Expense')?"Search Expenses":'Search Workouts'}
          name="searchInput"
          autocomplete="off"
          style={(settings.theme==='Dark')?{backgroundColor:'#253454',color:'white',border:'none',outline:'none'}:{}}
          onChange={handleChange}
          value={search}
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
