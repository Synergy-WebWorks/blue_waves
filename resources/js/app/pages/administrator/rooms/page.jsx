import React, { useEffect } from 'react'
import RoomTableSection from './sections/room-table-section'
import store from '@/app/store/store';
import { get_rent_thunk } from '@/app/redux/rent-thunk';
import AdministratorLayout from '../layout';

export default function RoomsPage() {
  useEffect(() => {
    store.dispatch(get_rent_thunk())
  }, []);
  return (
    <AdministratorLayout>
      <RoomTableSection />
    </AdministratorLayout>
  )
}
