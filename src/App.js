import "./App.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage";
import AddExpense from './Pages/AddExpense/AddExpense'
import Navbar from "./core/Navbar";
import GlobalState from "./context/GlobalState";
import EditExpense from "./Pages/EditExpense/EditExpense";



function App() {

  return(

     <Router>
     <Navbar/>
    <Switch>
    <GlobalState>
     
     
     <Route exact={true} path='/' component={HomePage}/>
     <Route exact={true} path='/editexpense' component={EditExpense}/>
      <Route exact={true} path='/addexpense' component={AddExpense}/>
     
    </GlobalState>
     
     </Switch>
    </Router>

  
  )

  
}

export default App;
