import { useContext } from "react";
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage";
import AddExpense from './Pages/AddExpense/AddExpense'
import Navbar from "./core/Navbar";
// import GlobalState from "./context/GlobalState";
import EditExpense from "./Pages/EditExpense/EditExpense";
import SettingsExpense from "./Pages/SettingsExpense/SettingsExpense";
import { GlobalContext } from "./context/GlobalState";
import react from "react";



function App() {

  
  let {settings}=useContext(GlobalContext)
  return(
    <div className='main' style={(settings.theme==='Dark')?{backgroundColor:'#040434'}:((settings.theme==='Nature')?{backgroundColor:'#5F7A61'}:{})}>
     
     <Router>
     <Navbar/>
     
    <Switch>
   
    
    <Route exact={true} path='/' component={HomePage}/>
     <Route exact={true} path='/editexpense'  component={EditExpense}/>
      <Route exact={true} path='/addexpense' component={AddExpense}/>
      <Route exact={true} path='/settings' component={SettingsExpense}/>
      </Switch>
     
   
    
    </Router>
    </div>
     
    

  
  )

  
}

export default App;
