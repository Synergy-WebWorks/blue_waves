import { CalendarIcon } from "@heroicons/react/16/solid"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import React from "react"

const people = [
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    contact: '091234567890',
    booking: 'Feb 14, 2025 to Feb 15, 2025',
    reference: 'BWS-000123456',
    submitted: 'Feb 10, 2025',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emilia Birch',
    email: 'emilia.birchtree@example.com',
    contact: '091234567890',
    booking: 'Feb 18, 2025 to March 1, 2025',
    reference: 'BWS-000789126',
    submitted: 'Feb 12, 2025',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80',
  },
  // More people...
]

export default function ReservationTableSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-cyan-600">Reservation Section</h1>
          <p className="mt-2 text-sm text-gray-600">
            A list of all the users reservation request including their name, email and address.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-cyan-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            <CalendarIcon className="size-5 float-left mr-2"/>
            Book a Reservation
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-cyan-600 sm:pl-0">
                    Name/Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600">
                    Contact No.
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600">
                    Reference No.
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600">
                    Booking Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600">
                    Date Submitted
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0">
                      <div className="flex items-center">
                        <div className="size-11 shrink-0">
                          <img alt="" src={person.image} className="size-11 rounded-full" />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{person.name}</div>
                          <div className="mt-1 text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                      <div className="text-gray-900">{person.contact}</div>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                      <div className="text-gray-900">{person.reference}</div>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                      <div className="text-gray-900">{person.booking}</div>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-yellow-600/20 ring-inset">
                        <ExclamationCircleIcon className="float-left size-4"/>
                        Pending Initial Payment
                      </span>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">{person.submitted}</td>
                    <td className="relative py-5 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <a href="#" className="text-cyan-600 hover:text-cyan-900">
                        Booking Details<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
