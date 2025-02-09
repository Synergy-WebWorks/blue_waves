import React from 'react'
import AdminLayout from '../layout'
import StatsSection from './sections/stats-section'
import GraphSection from './sections/graph-section'

export default function AdminPage() {
  return (
    <AdminLayout>
      <StatsSection/>
      <GraphSection/>
    </AdminLayout>
  )
}
