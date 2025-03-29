import React, { useEffect } from 'react'
import GeneralReportSection from './sections/general-report-section'
import store from '@/app/store/store'
import { get_booking_info_thunk } from '@/app/redux/booking-order-thunk'
import { get_dashboard_thunk } from '@/app/redux/dashboard-thunk'
import AdministratorLayout from '../layout'

export default function ReportsPage() {

  useEffect(() => {
    store.dispatch(get_booking_info_thunk());
    store.dispatch(get_dashboard_thunk());
  }, []);

  return (
    <AdministratorLayout>
      <GeneralReportSection />
    </AdministratorLayout>
  )
}
