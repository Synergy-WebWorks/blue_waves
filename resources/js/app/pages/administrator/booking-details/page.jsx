import React from 'react'
import OrderSummarySection from './sections/order-summary-section'
import AdministratorLayout from '../layout'

export default function BookingDetailsPage() {
  return (
    <AdministratorLayout>
      <OrderSummarySection />
    </AdministratorLayout>
  )
}
