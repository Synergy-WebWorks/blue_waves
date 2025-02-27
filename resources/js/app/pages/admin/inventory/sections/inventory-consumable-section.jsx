import { FaClockRotateLeft, FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import AddStocksSection from "./add-stocks-section";
import { router } from "@inertiajs/react";

export default function InventoryConsumableSection() {

    const { inventories } = useSelector((state) => state.inventories);
    console.log('iiiiii', inventories)

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
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {inventories.filter(inventory => inventory.type === "Consumable").map((inventory) => {
                                    // Determine the status based on quantity
                                    let status = "In Stock"; // Default status
                                    let statusClass = "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20";

                                    if (inventory.quantity == 0) {
                                        status = "Out of Stock";
                                        statusClass = "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20";
                                    } else if (inventory.quantity >= 1 && inventory.quantity <= 10) {
                                        status = "Low Stock";
                                        statusClass = "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20";
                                    }

                                    return (
                                        <tr key={inventory.item}>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-bold">
                                                {inventory.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-bold">
                                                {inventory.brand}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-cyan-600 font-bold">
                                                {inventory.quantity}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                <span className={statusClass}>
                                                    {status}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-cyan-600 font-bold">
                                                <span className="isolate flex gap-1 rounded-md shadow-xs">
                                                    <AddStocksSection data={inventory} />
                                                    <button
                                                        type="button"
                                                        onClick={() => router.visit(`http://127.0.0.1:8000/admin/inventory/${inventory.id}`)}
                                                        title="Issued/Dispensed History"
                                                        className="relative -ml-px inline-flex items-center rounded-r-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-gray-300 ring-1 ring-gray-300 ring-inset hover:bg-indigo-500 focus:z-10"
                                                    >
                                                        <FaClockRotateLeft />
                                                    </button>
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
