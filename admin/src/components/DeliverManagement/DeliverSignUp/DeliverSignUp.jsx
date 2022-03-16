import React from 'react'

import './deliverSignUp.scss';
import SignUp from './SignUp.png'; 

export default function DeliverSignUp() {
  return (
    <div className='signupContainer'>
        <div className='dRegSection'>
            <img src={SignUp} alt="SignUp" className="signUpImg"/>
            <div className='dRegSectionRight'>
                <span className='dRegTitle'>Deliver Register</span>
                <span className='dRegSubTitle'>Click Here To Delivers</span>
                <span className='dRegSubTitle'>Registation</span>
                <button className='dRegBtn'>SIGN UP</button>
            </div>
        </div>
    </div>
  )
}
