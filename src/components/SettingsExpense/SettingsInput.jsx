import React,{useState,useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'


const SettingsInput = () => {
    

    let {changeSettings,settings}=useContext(GlobalContext)
    console.log(settings);
   let [settingsData, setSettingsData]=useState({
       theme:'Light',
       layout:'Expense Tracker'
   })

   const handleThemes=(e)=>{
    //    e.target.style.border='1px solid orange'
       setSettingsData({...settingsData,theme:e.target.textContent})
    //   console.log(settingsData);
     
   
    // console.log(settings);
   }
    // changeSettings(settingsData)
    const handleChange=(e)=>{
       e.preventDefault()
       changeSettings(settingsData)
       console.log(settings);
    }


    return (
        <form className=' container settings-input' onSubmit={handleChange} style={(settings.theme==='Dark')?{backgroundColor:'#3b3b65'}:{backgroundColor:'rgb(216, 204, 204)'}}>
            <div className='first' onClick={handleThemes} style={(settings.theme==='Dark')?{border: '2px solid white'}:{}}>
            
                <h3 className='title' style={(settings.theme==='Dark')?{color:'white'}:{}}>Themes</h3>
               <ul>
                   <li className='Dark'>Dark</li>
                   <li className='Light'>Light</li>
                   <li className='Nature'>Nature</li>
                   <li className='Tomato'>Tomato</li>
                   
               </ul>
            </div>
            <div className="second" style={(settings.theme==='Dark')?{border: '2px solid white'}:{}}>

                <h3 className='title' style={(settings.theme==='Dark')?{color:'white'}:{}}>Layout</h3>
                <select className='layouts'>
                    <option value="1">Expense Tracker</option>
                    <option value="2">Fitness Tracker</option>
                    <option value="3">Todo List</option>
                </select>
            </div>
            <button className={`applychanges ${(settings.theme==='Dark')?'darkBtn':''}`} type='submit'>Apply Changes</button>
        </form>
    )
}

export default SettingsInput
