import React from 'react'
import AdminLayout from '../layout'
import ItemsLogTableSection from './sections/items-logs-table-section'

export default function ItemLogsPage() {
    return (
        <AdminLayout>
            <ItemsLogTableSection />
        </AdminLayout>
    )
}
