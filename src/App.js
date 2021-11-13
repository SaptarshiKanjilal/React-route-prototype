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

     <Router>
     <Navbar/>
    <Switch>
   
    <div className='main' style={(settings.theme==='Dark')?{backgroundColor:'#040434',height:'100vh'}:{backgroundColor:'white',height:'100vh'}}>
    <Route exact={true} path='/' component={HomePage}/>
     <Route exact={true} path='/editexpense'  component={EditExpense}/>
      <Route exact={true} path='/addexpense' component={AddExpense}/>
      <Route exact={true} path='/settings' component={SettingsExpense}/>
     
    </div>
     
     
     </Switch>
    </Router>

  
  )

  
}

export default App;
