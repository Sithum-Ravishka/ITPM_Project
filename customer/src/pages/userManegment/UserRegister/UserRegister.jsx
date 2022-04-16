import React from 'react'
import { Link } from 'react-router-dom';

import "./UserRegister.scss";

export default function UserRegister() {
  return (
    <div className="ULContainer">
      <div className="ulTitle"> Register Customer</div>

      <div className="UrContent">
          <div className="UrSection1">
              <span className='UrInputTitel'>Full Name <span className='Star'>*</span></span>
              <input type='text' className='UrInput'/>

              <span className='UrInputTitel'>User Name <span className='Star'>*</span></span>
              <input type='text' className='UrInput'/>

              <span className='UrInputTitel'>Address<span className='Star'>*</span></span>
              <input type='text' className='UrInput'/>
              <input type='text' className='UrInput'/>
              <input type='text' className='UrInput'/>
          </div>

          <div className="UrSection2">
            <input type='text' className='UrInput'/>

            <span className='UrInputTitel'>Date of Birth <span className='Star'>*</span></span>
            <input type='date' className='UrInput'/>

            <div className='RSection2'> 
                <input type='text' className='UrInput'/>
                <input type='text' className='UrInput'/>
            </div>

          </div>

          <div className="UrIntoBox">
              <div className="UrIntoBox2">


            <div className="UrSection3">
                <span className='UrInputTitel'>Your Photo<span className='Star'>*</span></span>
                <input type='file' className='UkInput'/>

                <span className='UrInputTitel'>Phone Number <span className='Star'>*</span></span>
                <input type='number' className='UrInput'/>

                <span className='UrInputTitel'>Password <span className='Star'>*</span></span>
                <input type='password' className='UrInput'/>

            </div>

            <div className="UrSection4">
                <span className='UrInputTitel'>Gender<span className='Star'>*</span></span>
                <div className='UrRedio'>
                    <input type="radio" value="Male" name='gender' id='gender' className='dRradio'  /> Male
                    <input type="radio" value="Female" name="gender" className='dRradio' /> Female
                </div>

                <span className='UrInputTitel'>Email <span className='Star'>*</span></span>
                <input type='email' className='UrInput'/>

                <div className='PC'>
                <input type='text' className='UrInput'/>
                </div>
            </div>
            </div>
            

            <div className="UrSection5">
                <div className="UrButton">
                    <button>Register</button>
                    <button>Reset</button>
                </div>
                <div className="UrLogin">
                <span className="Up">If Your Allredy Register ? <Link to="/user-singin"> <span className="UpS">SING UP</span></Link> </span>

                </div>
            </div>
        </div> 

      </div>
    
    </div>

  )
}
