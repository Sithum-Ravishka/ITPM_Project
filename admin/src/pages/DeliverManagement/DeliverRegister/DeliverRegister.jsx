import React from 'react'
import { Link } from 'react-router-dom';
import deliverRegister from './deliverRegister.PNG';
import './deliverRegister.scss';

export default function DeliverRegister() {
  return (
    <div className="dRContainer">
        <div className='dRHeader'>
        <Link to="/deliver-register" className="link">
            <span className='dRMTitle'>Deliver Registration</span>
        </Link>
        </div>
        
        <div className="dRContent">
            <div className="dRSectionLeft">
                <img src={deliverRegister} alt="deliverRegister" className="dRegisterImg"/>
            </div>
            <form>
                <div className="dRSectionRight">
                    <span className='dRTitle'>Register as a Delivery Agent</span>
                    <span className='dRSubTitle'>To register. Please fill in the following details.</span>
                    <span className='dRSubTitle'>We will then contact you shortly</span>

                    <div className="dRForm">
                        <div className="dRFormLeft">
                            <div className='dRInputBox'>
                                <label className='dRLableName'>Full Name <span className='dRLable'>*</span></label>
                                <input type='text' placeholder='Enter First Name' className='dRinput' required/>
                            </div>
                            <div className='dRInputBox'>
                                <label className='dRLableName'>NIC Number <span className='dRLable'>*</span></label>
                                <input type='text' placeholder='Enter NIC Number' className='dRinput' required/>
                            </div>
                            <div className='dRInputBox'>
                                <label className='dRLableName'>Date of Birth <span className='dRLable'>*</span></label>
                                <input type='date' placeholder='Enter First Name' className='dRinput' required/>
                            </div>
                            <div className='dRInputBox'>
                                <label className='dRLableName'>Contact Number <span className='dRLable'>*</span></label>
                                <input type='text' placeholder='Enter Contact Number' className='dRinput' required/>
                            </div>
                            <div className='dRInputBox'>
                                <div className='dRFile'>
                                    <label className='dRLableName'>Deliver Photo <span className='dRLable'>*</span></label>
                                    <input type='file' required className='dRfileInput'/>
                                </div>
                            </div>
                            <div className='dRInputBox'>
                                <label className='dRLableName'>Password <span className='dRLable'>*</span></label>
                                <input type='password' placeholder='Enter Password' className='dRinput' required/>
                            </div>
                        </div>
                        <div className="dRFormRight">
                            <div className='dRInputBox'>
                                <input type='text' placeholder='Enter Last Name' className='dRinput' required/>
                            </div>
                            <div className='dRInputBox'>
                                <label className='dRLableName'>Email <span className='dRLable'>*</span></label>
                                <input type='text' placeholder='Ex: email.gmail.com' className='dRinput' required/>
                            </div>
                            <div className='dRInputBox'>
                                <label className='dRLableName'>Address <span className='dRLable'>*</span></label>
                                <input type='text' placeholder='Enter Deliver Address' className='dRinput' required/>
                            </div>
                            <div className='dRInputBox'>
                                <label className='dRLableName'>Gender <span className='dRLable'>*</span></label>
                                <div className="dRradioLine">
                                    <input type="radio" value="Male" name="gender" className='dRradio'/> Male
                                    <input type="radio" value="Female" name="gender" className='dRradio'/> Female
                                    <input type="radio" value="Other" name="gender" className='dRradio'/> Other
                                </div>
                            </div>
                            <div className='dRInputBox'>
                                <div className='dRFile'>
                                    <label className='dRLableName'>License Photo <span className='dRLable'>*</span></label>
                                    <input type='file' required className='dRfileInput'/>
                                </div>
                            </div>
                            <div className='dRInputBox'>
                                <label className='dRLableName'>Confirm Password <span className='dRLable'>*</span></label>
                                <input type='password' placeholder='Enter Confirm Password' className='dRinput' required/>
                            </div>
                        </div>
                    </div>

                    <div className="dRButtons">
                        <button type='reset' className="dRReset">Reset</button>
                        <button type='submit' className="dRCreate">Create Deliver Account</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
