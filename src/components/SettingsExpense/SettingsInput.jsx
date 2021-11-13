import React,{useState,useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'


const SettingsInput = () => {
    

    let {changeSettings,settings}=useContext(GlobalContext)
    console.log(settings);
   let [settingsData, setSettingsData]=useState({
       theme:'Light',
       layout:'Expense'
   })

   const handleThemes=(e)=>{
    //    e.target.style.border='1px solid orange'
   if(e.target.className==='Dark'||e.target.className==='Light'||e.target.className==='Nature'||e.target.className==='Tomato'){ 
    let tags=e.target.parentElement.children
    console.log(tags);
    for(let i=0;i<tags.length;i++)
    {
        if(tags[i].className===e.target.className){
            tags[i].style.border='1px solid orange'
            console.log(tags[i]);
        }
        else{
            tags[i].style.border='1px solid silver'
        }
    }
       setSettingsData({...settingsData,theme:e.target.textContent})
    //   console.log(settingsData);
        }     
   
    // console.log(settings);
   }
    // changeSettings(settingsData)
    const handleChange=(e)=>{
       e.preventDefault()
       changeSettings(settingsData)
       console.log(settings);
    }
    const handleLayout=(e)=>{
        setSettingsData({
            ...settingsData,
            layout:e.target.value
        })
    }
     console.log(settings);
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
                <select className='layouts' value={settings.layout} onChange={handleLayout}>
                    <option value="Expense">Expense Tracker</option>
                    <option value="Fitness">Fitness Tracker</option>
                    <option value="Todo">Todo List</option>
                </select>
            </div>
            <button className={`applychanges ${(settings.theme==='Dark')?'darkBtn':''}`} type='submit'>Apply Changes</button>
        </form>
    )
}

export default SettingsInput
