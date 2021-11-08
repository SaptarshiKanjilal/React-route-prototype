import React from 'react'

const SettingsInput = () => {
    return (
        <div className=' container settings-input'>
            <div className='first'>
                <h3>Themes</h3>
               <ul>
                   <li className='Dark'>Dark</li>
                   <li className='Light'>Light</li>
                   <li className='Nature'>Nature</li>
                   <li className='Wrath'>Wrath</li>
                   
               </ul>
            </div>
            <div className="second">
                <h3>Layout</h3>
                <select className='layouts'>
                    <option value="1">Expense Tracker</option>
                    <option value="2">Fitness Tracker</option>
                    <option value="3">Todo List</option>
                </select>
            </div>
            <button className='applychanges' type='submit'>Apply Changes</button>
        </div>
    )
}

export default SettingsInput
