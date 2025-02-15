import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FaClockRotateLeft, FaPlus } from "react-icons/fa6";

const people = [
    {
        item: "Shampoo",
        brand: "Clear",
        quantity: "50",
        status: "In Stock",
        class: "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",
    },
    {
        item: "Soap",
        brand: "Dove",
        quantity: "10",
        status: "Low Stock",
        class: "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20",
    },
    {
        item: "Toothpaste",
        brand: "Colgate",
        quantity: "0",
        status: "Out of Stock",
        class: "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20",
    },
];
export default function InventoryConsumableSection() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-cyan-600">
                        Consumable Inventory Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        A list of all the consumable items including their name,
                        quantity and allocation history.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-cyan-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                        <PlusIcon className="size-5 float-left mr-2" />
                        Add Item(s)
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Item Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Brand
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="relative py-3 pl-3 pr-4 sm:pr-0"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                    <tr key={person.item}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900 font-bold">
                                            {person.item}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900 font-bold">
                                            {person.brand}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-cyan-600 font-bold">
                                            {person.quantity}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <span className={person.class}>
                                                {person.status}
                                            </span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <span className="isolate inline-flex rounded-md shadow-xs">
                                                <button
                                                    type="button"
                                                    title="Add Stocks"
                                                    className="relative inline-flex items-center rounded-l-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-gray-300 ring-1 ring-gray-300 ring-inset hover:bg-cyan-500 focus:z-10"
                                                >
                                                    <FaPlus />
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Issued/Dispensed History"
                                                    className="relative -ml-px inline-flex items-center rounded-r-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-gray-300 ring-1 ring-gray-300 ring-inset hover:bg-indigo-500 focus:z-10"
                                                >
                                                    <FaClockRotateLeft />
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
