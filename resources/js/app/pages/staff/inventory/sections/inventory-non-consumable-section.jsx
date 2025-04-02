import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FaClipboardCheck, FaClockRotateLeft, FaHouseChimneyMedical, FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import AddStocksSection from "./add-stocks-section";
import { router } from "@inertiajs/react";
import { Tooltip } from "antd";
import ReturnNonConsumableSection from "./return-non-consumable-section";

export default function InventoryNonConsumableSection() {
    const { inventories } = useSelector((state) => state.inventories);
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-cyan-600">
                        Non-Consumable Inventory Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        A list of all the non-consumable items including their
                        name, quantity and allocation history.
                    </p>
                </div>
                <div>
                    <ReturnNonConsumableSection />
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
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Unallocated
                                    </th>
                                    {/* <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Damaged
                                    </th> */}
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {inventories.filter(inventory => inventory.type === "Non-Consumable").map((inventory) => (
                                    <tr key={inventory.item}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm  text-gray-900 font-bold">
                                            {inventory.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm  text-cyan-600 font-bold">
                                            {inventory.quantity}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm  text-green-700 font-bold">
                                            {inventory.quantity}
                                        </td>
                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm  text-red-700 font-bold">
                                            {inventory.quantity}
                                        </td> */}
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-cyan-600 font-bold">
                                            <span className="isolate flex gap-1 rounded-md shadow-xs">
                                                <AddStocksSection data={inventory} />
                                                <Tooltip title="Allocation History">
                                                    <a
                                                        href={`/admin/inventory/${inventory.id}`}
                                                        title="Allocation History"
                                                        className="relative -ml-px inline-flex items-center rounded-r-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-gray-300 ring-1 ring-gray-300 ring-inset hover:bg-indigo-500 focus:z-10"
                                                    >
                                                        <FaClockRotateLeft />
                                                    </a>
                                                </Tooltip>
                                                <Tooltip title="Inventory Received Records">
                                                    <a
                                                        href={`/admin/inventory/inventory_received/${inventory.id}`}
                                                        className="relative -ml-px inline-flex items-center rounded-r-md bg-orange-600 px-3 py-2 text-sm font-semibold text-gray-300 ring-1 ring-gray-300 ring-inset hover:bg-orange-500 focus:z-10"
                                                    >
                                                        <FaClipboardCheck />
                                                    </a>
                                                </Tooltip>
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
