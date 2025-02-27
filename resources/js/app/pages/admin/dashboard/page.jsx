import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import StatsSection from './sections/stats-section'
import store from '@/app/store/store'
import { get_dashboard_thunk } from '@/app/redux/dashboard-thunk'
import { get_booking_info_thunk } from '@/app/redux/booking-info-thunk'

export default function AdminPage() {

  useEffect(()=>{
    
    store.dispatch(get_booking_info_thunk());
    
    store.dispatch(get_dashboard_thunk());  
  },[])
  return (
    <AdminLayout>
      <StatsSection/>
    </AdminLayout>
  )
}
