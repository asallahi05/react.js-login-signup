import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../assets/profile-user.png'
import password_icon from '../assets/lock.png'
import email_icon from '../assets/email.png'

export const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up")
  return (
    <div className='container'>
        <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
        <div className="inputs"> 
        {action === "Login"?null: <div className="input">
            <img src={user_icon} alt=''className="small-icon"/>
            <input type="text" placeholder='Name'/>
        </div>}
        <div className="input">
            <img src={email_icon} alt=''className="small-icon"/>
            <input type="email" placeholder='Email'/>
        </div>
        <div className="input">
            <img src={password_icon} alt=''className="small-icon"/>
            <input type="password" placeholder='Password'/>
        </div>
        </div>
        {action === "Sign Up"?null:<div className="forgot-password">Lost your password?<span>Click Here!</span> </div>}
        
        <div className="submit-container">
            <div className={action=== "Login"?"submit gray": "submit"} onClick={()=>{setAction ("Sign Up")}}>Sign Up</div>
            <div className={action=== "Sign Up"?"submit gray": "submit"} onClick={()=>{setAction ("Login")}}>Login</div>
        </div>
    </div>
  )
}
