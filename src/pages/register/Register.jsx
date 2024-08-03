import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../register/register.css'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
    <Navbar />
    <div className="sectionRegister">
      <div className="sectionForm">
        <div className="formGrid">
          <Link to ='/login'>Login</Link>
          <Link to ='/register'>Register</Link>
        </div>
        <div>
           <div className="formFlex">
          <input type="text" placeholder='Name' />
        </div>
        <div className="formFlex">
          <input type="email" name="email" id="email" placeholder='Email Address' />
        </div>
        <div className="formFlex">
          <input type="number" name="num" id="num" placeholder='Phone Number' />
        </div>
        </div>
       
        <div className="formFlex">
          <button type="submit">Login</button>
          <button type="reset">Cancel</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register