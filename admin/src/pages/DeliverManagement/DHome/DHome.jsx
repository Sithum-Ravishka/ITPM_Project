import React from 'react'
import DAssignOrders from '../../../components/DeliverManagement/DAssignOrders/DAssignOrders';
import DChart from '../../../components/DeliverManagement/DChart/DChart';
import DeliverSignUp from '../../../components/DeliverManagement/DeliverSignUp/DeliverSignUp';
import DeliveryOrders from '../../../components/DeliverManagement/DeliveryOrders/DeliveryOrders';
import DeliveryUsers from '../../../components/DeliverManagement/DeliveryUsers/DeliveryUsers';
import Topbar from '../../../components/topbar/Topbar';

import './dHome.scss';

export default function DHome() {
  return (
    <div className="DContainer">
      <div className='header'>
          <span className='title'>Welcome, <span className='subtitle'>Admin</span></span>
          <Topbar className="topbar"/>
      </div>
      <DChart title="Delivery Analytics" grid dataKey="New User" />
      <div className='smLists'>
        <DeliveryUsers/>
        <DeliveryOrders/>
        <DAssignOrders/>
      </div>
      <div className='dRegSignUph'>
        <DeliverSignUp/>
      </div>
    
    </div>
  )
}
