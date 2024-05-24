import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import UserSidebar from '../../components/UserProfile/UserSidebar'
import AccountSettings from '../../components/UserProfile/AccountSettings'
import './UserProfile.css'
import ChangePassword from '../../components/UserProfile/ChangePassword'
import YourOrders from '../../components/UserProfile/UserDonations'
import UserAddress from '../../components/UserProfile/UserAddress'
import LegalNotice from '../../components/UserProfile/LegalNotice'
import FloatingButton from '../../components/FloatingButton/FloatingButton'

const UserProfile = () => {

  const { activepage } = useParams()


  // alert(activepage)
  return (
    <div className='userprofile'>
      <Navbar />
      {/* UserProfile , showing {activepage}
         */}

      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage} />
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings />}
          {activepage === 'changepassword' && <ChangePassword />}
          {activepage === 'yourorders' && <YourOrders />}
          {activepage === 'address' && <UserAddress />}
          {activepage === 'legalnotice' && <LegalNotice />}
        </div>
      </div>
      <FloatingButton />
    </div>
  )
}

export default UserProfile