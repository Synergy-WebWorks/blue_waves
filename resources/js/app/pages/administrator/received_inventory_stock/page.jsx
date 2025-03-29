import React, { useEffect } from 'react'
import ReceivedRecordsTableSection from './sections/received-records-table-section'
import store from '@/app/store/store'
import { get_inventory_by_id_thunk } from '@/app/redux/inventory-thunk'
import { get_rent_thunk } from '@/app/redux/rent-thunk'
import { get_inventory_stock_by_id_thunk } from '@/app/redux/inventory-stock-thunk'
import AdministratorLayout from '../layout'

export default function Page() {
    const id = window.location.pathname.split('/')[4]
    const inventory_id = window.location.pathname.split('/')[4]
    useEffect(() => {
        store.dispatch(get_inventory_by_id_thunk(id))
        store.dispatch(get_inventory_stock_by_id_thunk(inventory_id))
        store.dispatch(get_rent_thunk())
    }, []);
    return (
        <AdministratorLayout>
            <ReceivedRecordsTableSection />
        </AdministratorLayout>
    )
}
