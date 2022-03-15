import React from 'react'
import Topbar from '../../../components/topbar/Topbar';

import './dHome.scss';

export default function DHome() {
  return (
    <div className="DContainer">
        <div className='header'>
            <span className='title'>Welcome, <span className='subtitle'>Admin</span></span>
            <Topbar className="topbar"/>
        </div>

        
    </div>
  )
}
