import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory, useLocation} from "react-router-dom";
import "./Edit.scss";
import axios from "axios";

const Edit = () => {
    const location = useLocation();
    const shoppingdata = location.shoppingdata;
    const navigate = useHistory();


    const [name, setCustomerName] = useState(
      shoppingdata ? shoppingdata.name : ""
    );
    const [contactNum, setContactNum] = useState(
      shoppingdata ? shoppingdata.contactNum : ""
    );
    const [addresl1, setAddresl1] = useState(
      shoppingdata ? shoppingdata.addresl1 : ""
    );
    const [addresl2, setAddresl2] = useState(
      shoppingdata ? shoppingdata.addresl2 : ""
    );
    const [addresl3, setAddresl3] = useState(
      shoppingdata ? shoppingdata.addresl3 : ""
    );
    const [district, setDistrict] = useState(
      shoppingdata ? shoppingdata.district : ""
    );
    const [zipCode, setZipCode] = useState(
      shoppingdata ? shoppingdata.zipCode : ""
    );
    useEffect(() => {
      if (shoppingdata) {
        setCustomerName(shoppingdata.name);
        setContactNum(shoppingdata.contactNum);
        setAddresl1(shoppingdata.addresl1);
        setAddresl2(shoppingdata.addresl2);
        setAddresl3(shoppingdata.addresl3);
        setDistrict(shoppingdata.district);
        setZipCode(shoppingdata.zipCode);
       
      } else {
        setCustomerName("");
        setContactNum("");
        setAddresl1("");
        setAddresl2("");
        setAddresl3("");
        setDistrict("");
        setZipCode("");
      }
    }, [
      shoppingdata,
      setCustomerName,
      setContactNum,
      setAddresl1,
      setAddresl2,
      setAddresl3,
      setDistrict,
      setZipCode,
    ]);
  
    const onSubmit = useCallback(
      async (e) => {
        e.preventDefault();
        navigate.push("/myOrders");
        if (shoppingdata) {
          await axios.put(
            "http://localhost:8800/api/shoppingdatas/" + shoppingdata._id,
            {
              name,
              contactNum,
              addresl1,
              addresl2,
              addresl3,
              district,
              zipCode,
            }
          );
        }
      },
      [
        shoppingdata,
        name,
        contactNum,
        addresl1,
        addresl2,
        addresl3,
        district,
        zipCode,
      ]
    );
  
  return (
    
    <div className="SPCContainer">
      <form onSubmit={onSubmit}>
      <div className="SPCTitle">Edit Shipping Information</div>

      <div className="S_content">
        
        <div className="contactDetails">
          <span className="name">Contact Details</span>
          <div className="cd_input">
            <input type="text" name="name"  placeholder={shoppingdata.name} onChange={(e) => setCustomerName  (e.target.value)}/>
            <input type="text" name="contactNum" placeholder={shoppingdata.contactNum} onChange={(e) => setContactNum(e.target.value)}/>
          </div>

          <div className="addrssDetails">
            <span className="name">Address Details</span>
     
            <div className="address_inputs">
              <input type="text" name="addresl1"  placeholder={shoppingdata.addresl1} onChange={(e) => setAddresl1(e.target.value)} />
              <input type="text" name="addresl2"  placeholder={shoppingdata.addresl2} onChange={(e) => setAddresl2(e.target.value)}/>
              <input type="text" name="addresl3"  placeholder={shoppingdata.addresl3} onChange={(e) => setAddresl3(e.target.value)} />
            </div>

            <div className="adress_input2">
              <input type="text" name="district"  placeholder={shoppingdata.district} onChange={(e) => setDistrict(e.target.value)} />
              <input type="text" name="zipCode"   placeholder={shoppingdata.zipCode}  onChange={(e) => setZipCode(e.target.value)}/>
            </div>


            <div className="buttons">
             
                <button className="save" type="submit" >Edit and Continue</button>
              
              <button type="reset" className="clear">Cancel</button>
            </div>
          </div>
          
        </div>
      </div>
      </form>
    </div>
  );
};

export default Edit;
