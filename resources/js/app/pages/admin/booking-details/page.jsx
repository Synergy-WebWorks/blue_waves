import React from 'react'
import AdminLayout from '../layout'
import OrderSummarySection from './sections/order-summary-section'

export default function BookingDetailsPage() {
  return (
    <AdminLayout>
      <OrderSummarySection/>
    </AdminLayout>
  )
}
