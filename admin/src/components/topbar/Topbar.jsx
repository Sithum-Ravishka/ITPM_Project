import { Search } from '@material-ui/icons'
import React from 'react'

import "./topbar.scss";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbar'>
        <div className='searchbox'>
          <input type="search" placeholder='Search'
          className='search' />
          <button  className='serBtn'><Search/></button>
        </div>
          <div className='profileImg'>
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="profileImg" className='profileImg' />
          </div>
      </div>
    </div>
  )
}
