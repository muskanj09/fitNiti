import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../login/login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <Navbar />
    <div className="sectionLogin">
      <div className="sectionForm">
        <div className="formGrid">
          <Link to ='/login'>Login</Link>
          <Link to ='/register'>Register</Link>
        </div>
        
        <div className="formFlex">
          <input type="email" name="email" id="email" placeholder='Email Address' />
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

export default Login