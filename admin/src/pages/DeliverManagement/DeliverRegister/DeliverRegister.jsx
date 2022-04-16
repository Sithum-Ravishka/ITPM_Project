import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import storage from "../../../firebase";
import { createDeliveryUser } from '../../../context/deliveryUserContext/apiCalls';
import { DeliveryUserContext } from '../../../context/deliveryUserContext/DeliveryUserContext';
import deliverRegister from './deliverRegister.PNG';
import './deliverRegister.scss';

export default function DeliverRegister() {

  const [deliveryuser, setDeliveryuser] = useState(null);
  const [licensePhoto, setlicensePhoto] = useState(null);
  const [deliverPhoto, setdeliverPhoto] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(DeliveryUserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setDeliveryuser({ ...deliveryuser, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setDeliveryuser((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: deliverPhoto, label: "deliverPhoto" },
      { file: licensePhoto, label: "licensePhoto" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createDeliveryUser(deliveryuser, dispatch);
  };


    return (
        <div className="dRContainer">
            <div className='dRHeader'>
                <Link to="/deliver-register" className="link">
                    <span className='dRMTitle'>Deliver Registration</span>
                </Link>
            </div>

            <div className="dRContent">
                <div className="dRSectionLeft">
                    <img src={deliverRegister} alt="deliverRegister" className="dRegisterImg" />
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
                                    <input type='text' name='firstName' id='firstName' onChange={handleChange} placeholder='Enter First Name' className='dRinput' required />
                                </div>
                                <div className='dRInputBox'>
                                    <label className='dRLableName'>NIC Number <span className='dRLable'>*</span></label>
                                    <input type='text' name='nicNumber' id='nicNumber' onChange={handleChange} placeholder='Enter NIC Number' className='dRinput' required />
                                </div>
                                <div className='dRInputBox'>
                                    <label className='dRLableName'>Date of Birth <span className='dRLable'>*</span></label>
                                    <input type='date' name='dateOfBirth' id='dateOfBirth' onChange={handleChange} placeholder='Enter First Name' className='dRinput' required />
                                </div>
                                <div className='dRInputBox'>
                                    <label className='dRLableName'>Contact Number <span className='dRLable'>*</span></label>
                                    <input type='text' name='contactNumber' id='contactNumber' onChange={handleChange} placeholder='Enter Contact Number' className='dRinput' required />
                                </div>
                                <div className='dRInputBox'>
                                    <div className='dRFile'>
                                        <label className='dRLableName'>Deliver Photo <span className='dRLable'>*</span></label>
                                        <input type='file' required 
                                            className='dRfileInput'
                                            id='deliverPhoto'
                                            name='deliverPhoto'
                                            onChange={(e) => setdeliverPhoto(e.target.files[0])}
                                        />
                                    </div>
                                </div>
                                <div className='dRInputBox'>
                                    <label className='dRLableName'>Password <span className='dRLable'>*</span></label>
                                    <input type='password' name='password' id='password' onChange={handleChange} placeholder='Enter Password' className='dRinput' required />
                                </div>
                            </div>
                            <div className="dRFormRight">
                                <div className='dRInputBox'>
                                    <input type='text ' name='lastName' id='lastName' onChange={handleChange} placeholder='Enter Last Name' className='dRinput' required />
                                </div>
                                <div className='dRInputBox'>
                                    <label className='dRLableName'>Email <span className='dRLable'>*</span></label>
                                    <input type='text' name='email' id='email' onChange={handleChange} placeholder='Ex: email.gmail.com' className='dRinput' required />
                                </div>
                                <div className='dRInputBox'>
                                    <label className='dRLableName'>Address <span className='dRLable'>*</span></label>
                                    <input type='text'name='address' id='address' onChange={handleChange} placeholder='Enter Deliver Address' className='dRinput' required />
                                </div>
                                <div className='dRInputBox'>
                                    <label className='dRLableName'>Gender <span className='dRLable'>*</span></label>
                                    <div className="dRradioLine">
                                        <input type="radio" value="Male" name='gender' id='gender' onChange={handleChange} className='dRradio'  /> Male
                                        <input type="radio" value="Female" name="gender" className='dRradio' /> Female
                                        <input type="radio" value="Other" name="gender" className='dRradio' /> Other
                                    </div>
                                </div>
                                <div className='dRInputBox'>
                                    <div className='dRFile'>
                                        <label className='dRLableName'>License Photo <span className='dRLable'>*</span></label>
                                        <input type='file' required className='dRfileInput' 
                                        id='licensePhoto'
                                        name='licensePhoto'
                                        onChange={(e) => setlicensePhoto(e.target.files[0])}
                                        />
                                    </div>
                                </div>
                                <div className='dRInputBox'>
                                    <label className='dRLableName'>Confirm Password <span className='dRLable'>*</span></label>
                                    <input type='password' name='confirmPassword' id='confirmPassword' onChange={handleChange} placeholder='Enter Confirm Password' className='dRinput' required />
                                </div>
                            </div>
                        </div>

                        <div className="dRButtons">
                            <button type='reset' className="dRReset">Reset</button>
                            {uploaded === 2 ? (
                                <button className="dRCreate" onClick={handleSubmit}>
                                    Create Deliver Account
                                </button>
                                ) : (
                                <button className="dRCreate" onClick={handleUpload}>
                                    Upload
                                </button>
                                )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
