import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import ReservationTabsSection from './sections/reservation-tabs-section'
import store from '@/app/store/store'
import { get_booking_info_thunk } from '@/app/redux/booking-info-thunk'

export default function ReservationPage() {

  useEffect(()=>{
    store.dispatch(get_booking_info_thunk())
  },[])
  return (
    <AdminLayout>
      <ReservationTabsSection/>
    </AdminLayout>
  )
}
