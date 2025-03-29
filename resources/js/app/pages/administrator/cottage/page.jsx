import React, { useEffect } from 'react'
import CottageTableSection from './sections/cottage-table-section'
import store from '@/app/store/store';
import { get_rent_thunk } from '@/app/redux/rent-thunk';
import AdministratorLayout from '../layout';

export default function CottagePage() {
  useEffect(() => {
    store.dispatch(get_rent_thunk())
  }, []);
  return (
    <AdministratorLayout>
      <CottageTableSection />
    </AdministratorLayout>
  )
}
