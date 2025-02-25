import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import ReservationTabsSection from './sections/reservation-tabs-section'

export default function ReservationPage() {


  return (
    <AdminLayout>
      <ReservationTabsSection/>
    </AdminLayout>
  )
}
