import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import ActivityTableSection from './sections/activity-table-section'
import store from '@/app/store/store';
import { get_activity_thunk } from '@/app/redux/activity-thunk';

export default function ActivitiesPage() {
  useEffect(() => {
    store.dispatch(get_activity_thunk())
  }, []);
  return (
    <AdminLayout>
      <ActivityTableSection />
    </AdminLayout>
  )
}
