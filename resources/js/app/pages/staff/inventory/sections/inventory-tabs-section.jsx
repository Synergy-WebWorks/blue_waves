import { useEffect, useState } from 'react'
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import { FaCalendarCheck, FaFileCircleMinus, FaFileLines, FaTable } from 'react-icons/fa6'
import InventoryConsumableSection from './inventory-consumable-section'
import InventoryNonConsumableSection from './inventory-non-consumable-section'
import AddItemsSection from './add-items-section'
import store from '@/app/store/store'
import { get_inventory_thunk } from '@/app/redux/inventory-thunk'

const tabs = [
  { name: 'Consumable Inventory Records', key: 'consumable', icon: FaFileLines },
  { name: 'Non-Consumable Inventory Records', key: 'non-consumable', icon: FaFileCircleMinus },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function InventoryTabsSection() {
  const [activeTab, setActiveTab] = useState('consumable') // Default active tab

  useEffect(() => {
    store.dispatch(get_inventory_thunk())
  }, []);
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
                    ? 'border-cyan-600 text-cyan-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium',
                )}
              >
                <tab.icon
                  aria-hidden="true"
                  className={classNames(
                    activeTab === tab.key ? 'text-cyan-600' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-2 -ml-0.5 size-5',
                  )}
                />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className='w-full flex items-center justify-end'>
          {/* <AddItemsSection /> */}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 border rounded-lg shadow-lg">
        {activeTab === 'consumable' && <InventoryConsumableSection />}
        {activeTab === 'non-consumable' && <InventoryNonConsumableSection />}
      </div>
    </div>
  )
}
