import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import InventoryTabsSection from './sections/inventory-tabs-section'
import store from '@/app/store/store';
import { get_inventory_thunk } from '@/app/redux/inventory-thunk';

export default function InventoryPage() {
  useEffect(() => {
    store.dispatch(get_inventory_thunk())
  }, []);
  return (
    <AdminLayout>
      <InventoryTabsSection />
    </AdminLayout>
  )
}
