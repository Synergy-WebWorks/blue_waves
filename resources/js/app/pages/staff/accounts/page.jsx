import React, { useEffect } from 'react'
import UserTableSection from './sections/user-table-section'
import store from '@/app/store/store';
import { get_users_thunk } from '@/app/redux/app-thunk';
import StaffLayout from '../layout';

export default function AccountsPage() {
  useEffect(() => {
    store.dispatch(get_users_thunk())
  }, []);
  return (
    <StaffLayout>
      <UserTableSection />
    </StaffLayout>
  )
}
