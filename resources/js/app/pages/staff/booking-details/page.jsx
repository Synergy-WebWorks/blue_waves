import React from 'react'
import OrderSummarySection from './sections/order-summary-section'
import StaffLayout from '../layout'

export default function BookingDetailsPage() {
  return (
    <StaffLayout>
      <OrderSummarySection />
    </StaffLayout>
  )
}
