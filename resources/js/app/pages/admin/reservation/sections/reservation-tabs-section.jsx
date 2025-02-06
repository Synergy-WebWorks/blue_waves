import { useState } from 'react'
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import { FaCalendarCheck, FaTable } from 'react-icons/fa6'
import ReservationScheduleSection from './reservation-schedule-section'
import ReservationCalendarSection from './reservation-calendar-section'
import ReservationTableSection from './reservation-table-section'

const tabs = [
  { name: 'Calendar View', key: 'calendar', icon: CalendarIcon },
  { name: 'Scheduled', key: 'scheduled', icon: FaCalendarCheck },
  { name: 'Reservation Table', key: 'reservation', icon: FaTable },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ReservationTabsSection() {
  const [activeTab, setActiveTab] = useState('calendar') // Default active tab

  return (
    <div>
      {/* Mobile Dropdown */}
      <div className="grid grid-cols-1 sm:hidden">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.key} value={tab.key}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>

      {/* Desktop Tabs */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={classNames(
                  activeTab === tab.key
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium',
                )}
              >
                <tab.icon
                  aria-hidden="true"
                  className={classNames(
                    activeTab === tab.key ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-2 -ml-0.5 size-5',
                  )}
                />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 border rounded-lg shadow-lg">
        {activeTab === 'calendar' && <ReservationCalendarSection/>}
        {activeTab === 'scheduled' && <ReservationScheduleSection/>}
        {activeTab === 'reservation' && <ReservationTableSection/>}
      </div>
    </div>
  )
}
