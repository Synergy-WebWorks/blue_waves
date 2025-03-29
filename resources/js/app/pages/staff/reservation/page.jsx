import React, { useEffect } from 'react'
import ReservationTabsSection from './sections/reservation-tabs-section'
import StaffLayout from '../layout'

export default function ReservationPage() {


  return (
    <StaffLayout>
      <ReservationTabsSection />
    </StaffLayout>
  )
}
