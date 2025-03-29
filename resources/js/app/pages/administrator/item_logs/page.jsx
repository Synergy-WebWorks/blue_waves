import React, { useEffect } from 'react'
import ItemsLogTableSection from './sections/items-logs-table-section'
import store from '@/app/store/store';
import { get_inventory_allocation_by_id_thunk } from '@/app/redux/inventory-allocation-thunk';
import { get_inventory_by_id_thunk } from '@/app/redux/inventory-thunk';
import { get_rent_thunk } from '@/app/redux/rent-thunk';
import AdministratorLayout from '../layout';

export default function ItemLogsPage() {
    const id = window.location.pathname.split('/')[3]
    const item_id = window.location.pathname.split('/')[3]
    useEffect(() => {
        store.dispatch(get_inventory_allocation_by_id_thunk(item_id))
        store.dispatch(get_inventory_by_id_thunk(id))
        store.dispatch(get_rent_thunk())
    }, []);
    return (
        <AdministratorLayout>
            <ItemsLogTableSection />
        </AdministratorLayout>
    )
}
