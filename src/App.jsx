import { useState } from 'react'
import logo from './logo.svg'
import { Add_contact } from './components/Add_contact'
import {Payment} from  "./Payment/Payment"
import './App.css'

function App() {
  return (
    <div>
     {/* <Add_contact/> */}
      <Payment/>
      {/* <Add_contact/> */}
    </div>
  )
}

export default App
