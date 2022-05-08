import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import storage from "../../../firebase";
import { CustomerUserContext } from "../../../context/CustomerUsersContext/CustomerUserContext";

import "./UserRegister.scss";
import { createCustomerUser } from "../../../context/CustomerUsersContext/apiCalls";

export default function UserRegister() {

  const [customeruser, setCustomeruser] = useState(null);
  const [customerPhoto, setcustomerPhoto] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(CustomerUserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomeruser({ ...customeruser, [e.target.name]: value });
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
            setCustomeruser((prev) => {
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
      { file: customerPhoto, label: "customerPhoto" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCustomerUser(customeruser, dispatch);
  };


  return (
    <div className="ULContainer">
      <div className="ulTitle"> Register Customer</div>

      <form action="">
        <div className="UrContent">
          <div className="UrSection1">
            <span className="UrInputTitel">
              Full Name <span className="Star">*</span>
            </span>
            <input type="text" placeholder="First Name" className="UrInput" name="firstName" onChange={handleChange}/>

            <span className="UrInputTitel">
              User Name <span className="Star">*</span>
            </span>
            <input type="text" placeholder="User Name" className="UrInput" name="userName" onChange={handleChange} />

            <span className="UrInputTitel">
              Address<span className="Star">*</span>
            </span>
            <input
              type="text"
              placeholder="Street Address"
              className="UrInput"
              name="streetAddress"
              onChange={handleChange}
            />
            <input type="text" placeholder="City" className="UrInput"  name="city" onChange={handleChange} />
            <input
              type="text"
              placeholder="Post/Zip Code"
              className="UrInput"
              name="postId"
              onChange={handleChange}
            />
          </div>

          <div className="UrSection2">
            <input type="text" placeholder="Last Name" className="UrInput" name="lastName"  onChange={handleChange}/>

            <span className="UrInputTitel">
              Date of Birth <span className="Star">*</span>
            </span>
            <input type="date" className="UrInput" name="dateOfBirth" onChange={handleChange} />

            <div className="RSection2">
              <input
                type="text"
                placeholder="Street Address 2"
                className="UrInput"
                name="streetAddress2"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="State/Province"
                className="UrInput"
                name="state"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="UrIntoBox">
            <div className="UrIntoBox2">
              <div className="UrSection3">
                <span className="UrInputTitel">
                  Your Photo<span className="Star">*</span>
                </span>
                <input type="file" className="UkInput" name="customerPhoto" onChange={(e) => setcustomerPhoto(e.target.files[0])}/>

                <span className="UrInputTitel">
                  Phone Number <span className="Star">*</span>
                </span>
                <input
                  type="number"
                  placeholder="(000) 0000 000"
                  className="UrInput"
                  name="contactNumber"
                  onChange={handleChange}
                />

                <span className="UrInputTitel">
                  Password <span className="Star">*</span>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="UrInput"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div className="UrSection4">
                <span className="UrInputTitel">
                  Gender<span className="Star">*</span>
                </span>
                <div className="UrRedio">
                  <input
                    type="radio"
                    value="Male"
                    id="gender"
                    className="dRradio"
                    name="gender"
                    onChange={handleChange}
                  />{" "}
                  Male
                  <input
                    type="radio"
                    value="Female"
                    className="dRradio"
                  />{" "}
                  Female
                </div>

                <span className="UrInputTitel">
                  Email <span className="Star">*</span>
                </span>
                <input
                  type="email"
                  placeholder="ex: email@gmai.com"
                  className="UrInput"
                  name="email"
                  onChange={handleChange}
                />

                <div className="PC">
                  <input
                    type="password"
                    placeholder="Comform Password"
                    className="UrInput"
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="UrSection5">
              <div className="UrButton">
              {uploaded === 1 ? (
                                <button className="UrButton3" onClick={handleSubmit}>
                                    Create User Account
                                </button>
                                ) : (
                                <button className="UrButton3" onClick={handleUpload}>
                                    Upload
                                </button>
                                )}
                <button className="UrButton2">Reset</button>
              </div>
              <div className="UrLogin">
                <span className="Up">
                  If Your Allredy Register ?{" "}
                  <Link to="/user-singin">
                    {" "}
                    <span className="UpS">SING UP</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
