import React from 'react'
import AdminLayout from '../layout'
import UserTableSection from './sections/user-table-section'

export default function AccountsPage() {
  return (
    <AdminLayout>
        <UserTableSection/>
    </AdminLayout>
  )
}
