import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import RoomTableSection from './sections/room-table-section'
import store from '@/app/store/store';
import { get_rent_thunk } from '@/app/redux/rent-thunk';

export default function RoomsPage() {
  useEffect(() => {
    store.dispatch(get_rent_thunk())
  }, []);
  return (
    <AdminLayout>
      <RoomTableSection />
    </AdminLayout>
  )
}
