import React, { useEffect } from 'react'
import ReservationTabsSection from './sections/reservation-tabs-section'
import AdministratorLayout from '../layout'

export default function ReservationPage() {


  return (
    <AdministratorLayout>
      <ReservationTabsSection />
    </AdministratorLayout>
  )
}
