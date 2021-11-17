import React,{Fragment,useContext}from 'react'
import SettingsInput from '../../components/SettingsExpense/SettingsInput'
import ExpenseDetails from '../../core/ExpenseDetails'
import {ToastContainer,toast} from 'react-toastify'
import { GlobalContext } from '../../context/GlobalState'


const SettingsExpense = () => {

  // let {change}=useContext(GlobalContext)

  // const notify=()=>toast('🦄 Wow so easy!', {
  //   position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   });

    // if(change){
    //   notify()
    // }
    return (
       <Fragment>
         {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          /> */}
         <ExpenseDetails/>
         <SettingsInput/>
        
       </Fragment>
            
        
    )
}

export default SettingsExpense
