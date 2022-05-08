import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useLocation,useHistory } from "react-router-dom";


import "./UserEditeDetails.scss";


export default function UserEditeDetails() {

  const history = useHistory();

  const location = useLocation();
  const customeruser = location.customeruser;

  const [firstName, setFirstName] = useState(
    customeruser ? customeruser.firstName : ""
  );
  const [lastName, setLastName] = useState(
    customeruser ? customeruser.lastName : ""
  );
  const [userName, setUserName] = useState(
    customeruser ? customeruser.userName : ""
  );
  const [dateOfBirth, setDateOfBirth] = useState(
    customeruser ? customeruser.dateOfBirth : ""
  );
  const [streetAddress, setStreetAddress] = useState(
    customeruser ? customeruser.streetAddress : ""
  );
  const [streetAddress2, setStreetAddress2] = useState(
    customeruser ? customeruser.streetAddress2 : ""
  );
  const [city, setcity] = useState(
    customeruser ? customeruser.city : ""
  );
  const [state, setstate] = useState(
    customeruser ? customeruser.state : ""
  );
  const [postId, setPostId] = useState(
    customeruser ? customeruser.postId : ""
  );
  const [contactNumber, setContactNumber] = useState(
    customeruser ? customeruser.contactNumber : ""
  );
  const [gender, setGender] = useState(
    customeruser ? customeruser.gender : ""
  );
  const [customerPhoto, setCustomerPhoto] = useState(
    customeruser ? customeruser.customerPhoto : ""
  );
  const [email, setEmail] = useState(
    customeruser ? customeruser.email : ""
  );
  const [password, setPassword] = useState(
    customeruser ? customeruser.password : ""
  );
  const [confirmPassword, setConfirmPassword] = useState(
    customeruser ? customeruser.confirmPassword : ""
  );

  useEffect(() => {
    if (customeruser) {
      setFirstName(customeruser.firstName);
      setLastName(customeruser.lastName);
      setUserName(customeruser.userName);
      setDateOfBirth(customeruser.dateOfBirth);
      setStreetAddress(customeruser.streetAddress);
      setStreetAddress2(customeruser.streetAddress2);
      setcity(customeruser.city);
      setstate(customeruser.state);
      setPostId(customeruser.postId);
      setContactNumber(customeruser.contactNumber);
      setGender(customeruser.gender);
      setCustomerPhoto(customeruser.customerPhoto);
      setEmail(customeruser.email);
      setPassword(customeruser.password);
      setConfirmPassword(customeruser.confirmPassword);
    } else {
      setFirstName("");
      setLastName("");
      setUserName("");
      setDateOfBirth("");
      setStreetAddress("");
      setStreetAddress2("");
      setcity("");
      setstate("");
      setPostId("");
      setContactNumber("");
      setGender("");
      setCustomerPhoto("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }, [
    customeruser,
    setFirstName,
    setLastName,
    setUserName,
    setDateOfBirth,
    setStreetAddress,
    setStreetAddress2,
    setcity,
    setstate,
    setPostId,
    setContactNumber,
    setGender,
    setCustomerPhoto,
    setEmail,
    setPassword,
    setConfirmPassword
  ]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      history.push("/userlist")
      if (customeruser) {
        await axios.put(
          "http://localhost:8800/api/customerusers/" + customeruser._id,
          {
            firstName,
            lastName,
            userName,
            dateOfBirth,
            streetAddress,
            streetAddress2,
            city,
            state,
            postId,
            contactNumber,
            gender,
            customerPhoto,
            email,
            password,
            confirmPassword
          }
        );
      }
    },
    [
      customeruser,
      firstName,
      lastName,
      userName,
      dateOfBirth,
      streetAddress,
      streetAddress2,
      city,
      state,
      postId,
      contactNumber,
      gender,
      customerPhoto,
      email,
      password,
      confirmPassword

    ]
  );


  return (
    <div className="ULContainer">
      <div className="ulTitle"> Edit Customer Details</div>

      <form onSubmit={onSubmit}>
        <div className="UrContent">
          <div className="UrSection1">
            <span className="UrInputTitel">
              Full Name <span className="Star"></span>
            </span>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder={customeruser.firstName} className="UrInput" name="firstName" />

            <span className="UrInputTitel">
              User Name <span className="Star"></span>
            </span>
            <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder={customeruser.userName} className="UrInput" name="userName"  />

            <span className="UrInputTitel">
              Address<span className="Star"></span>
            </span>
            <input
              type="text"
              placeholder={customeruser.streetAddress}
              className="UrInput"
              name="streetAddress"
              onChange={(e) => setStreetAddress(e.target.value)}
              
            />
            <input type="text" placeholder="City" className="UrInput"  name="city"  />
            <input
              type="text"
              placeholder={customeruser.city}
              className="UrInput"
              name="postId"
              onChange={(e) => setcity(e.target.value)}
              
            />
          </div>

          <div className="UrSection2">
            <input type="text"  onChange={(e) => setLastName(e.target.value)}placeholder={customeruser.lastName} className="UrInput" name="lastName"  />

            <span className="UrInputTitel">
              Date of Birth <span className="Star">*</span>
            </span>
            <input type="date"  className="UrInput" name="dateOfBirth"  />
            <span>{customeruser.dateOfBirth}</span>

            <div className="RSection2">
              <input
                type="text"
                placeholder={customeruser.streetAddress2}
                className="UrInput"
                name="streetAddress2"
                onChange={(e) => setStreetAddress2(e.target.value)}
                
              />
              <input
                type="text"
                placeholder={customeruser.state}
                className="UrInput"
                name="state"
                onChange={(e) => setstate(e.target.value)}
                
              />
            </div>
          </div>

          <div className="UrIntoBox">
            <div className="UrIntoBox2">
              <div className="UrSection3">
                
                <span className="UrInputTitel">
                  Phone Number <span className="Star"></span>
                </span>
                <input
                  type="number"
                  placeholder={customeruser.contactNumber}
                  className="UrInput"
                  name="contactNumber"
                  onChange={(e) => setContactNumber(e.target.value)}
                  
                />
              </div>

              <div className="UrSection4">

                
                <span className="UrInputTitel">
                  Email <span className="Star"></span>
                </span>
                <input
                  type="email"
                  placeholder={customeruser.email}
                  className="UrInput"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>
            </div>

            <div className="UrSection5">
              <div className="UrButton">
             
                                <button className="UrButton3" type="submit" >
                                     Edit Customer Details
                                </button>

              </div>
              <div className="UrLogin">
                <span className="Up">
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
