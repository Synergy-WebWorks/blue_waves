import React, { useEffect } from 'react'
import ActivityTableSection from './sections/activity-table-section'
import store from '@/app/store/store';
import { get_activity_thunk } from '@/app/redux/activity-thunk';
import StaffLayout from '../layout';

export default function ActivitiesPage() {
  useEffect(() => {
    store.dispatch(get_activity_thunk())
  }, []);
  return (
    <StaffLayout>
      <ActivityTableSection />
    </StaffLayout>
  )
}
