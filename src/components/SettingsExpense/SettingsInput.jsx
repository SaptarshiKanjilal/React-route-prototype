import React,{useState,useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import lighttheme from '../Images/lighttheme.png'
import darktheme from '../Images/darktheme.png'

const SettingsInput = () => {
    
    let [initial, stopInitial]=useState(true)
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
        <form className=' container settings-input' onSubmit={handleChange} >
         <h3 className='title' style={(settings.theme==='Dark')?{color:'white'}:((settings.theme==='Nature')?{color:'white'}:{})}>Themes</h3>

            <div className='first' onClick={handleThemes} style={(settings.theme==='Dark')?{backgroundColor:'rgb(54, 64, 100)'}:((settings.theme==='Nature')?{backgroundColor:'rgb(127, 200, 169)'}:{})}>
            
                {/* <h3 className='title' style={(settings.theme==='Dark')?{color:'white'}:((settings.theme==='Nature')?{color:'white'}:{})}>Themes</h3> */}
               <ul>
                   <li className='Dark'>Dark</li>
                   <li className='Light'>Light</li>
                   <li className='Nature'>Nature</li>
                   {/* <li className='Tomato'>Tomato</li> */}
                   
               </ul>
            </div>
            <h3 className='title' style={(settings.theme==='Dark')?{color:'white'}:(settings.theme==='Nature')?{color:'white'}:{}}>Layout</h3>
            
            <div className="second" style={(settings.theme==='Dark')?{backgroundColor:'rgb(54, 64, 100)'}:((settings.theme==='Nature')?{backgroundColor:'rgb(127, 200, 169)'}:{})}>

                {/* <h3 className='title' style={(settings.theme==='Dark')?{color:'white'}:(settings.theme==='White')?{color:'white'}:{}}>Layout</h3> */}
                <select className='layouts' value={settings.layout} onChange={handleLayout}>
                    <option value="Expense">Expense Tracker</option>
                    <option value="Fitness">Fitness Tracker</option>
                    <option value="Todo">Todo List</option>
                </select>
            </div>
            <button className={`applychanges ${(settings.theme==='Dark')?'darkBtn':((settings.theme==='Nature')?'greenBtn':'')}`} type='submit'>Apply Changes</button>
        </form>
    )
}

export default SettingsInput
