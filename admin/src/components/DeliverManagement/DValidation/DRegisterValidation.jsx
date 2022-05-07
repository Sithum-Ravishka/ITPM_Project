import React from 'react'
import { Link } from 'react-router-dom'

export default function DRegisterValidation() {
  return (
    <div className="dAContainer">
      <div className="dAHeader">
        <Link to="/deliver-register" className="link">
          <span className="dATitle"></span>
        </Link>
      </div>

      <div className="RVContent">
        <div className="suc">
          <span>Successful Register DeliveryUser</span>
          <button>Go Back To Home</button>
        </div>
      </div>
    </div>
  )
}
