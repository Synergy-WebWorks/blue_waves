import React from "react";
import AddAllocateSection from "./add-allocate-item-section";

export default function ItemsLogTableSection() {
    const room = [
        {
            id: 1,
            name: "Room A",
            href: "#",
            rate: "₱1500/night",
            capacity: "Good for 4 Persons",
            imageSrc: "/images/ROOMS (2pcs)/ROOM B/B.jpeg",
            status: "Active",
        },
        {
            id: 2,
            name: "Room B",
            href: "#",
            rate: "₱1500/night",
            capacity: "Good for 4 Persons",
            imageSrc: "/images/ROOMS (2pcs)/ROOM B/B.jpeg",
            status: "Active",
        },
        {
            id: 3,
            name: "Family Room",
            href: "#",
            rate: "₱6500/night",
            capacity: "Good for 5 Persons",
            imageSrc: "/images/Family Room/C.jpeg",
            status: "Active",
        },
    ];
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-4 pb-8 border rounded-lg shadow-lg">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-cyan-600 pt-8">
                        Item Logs Records
                    </h1>
                </div>
                <AddAllocateSection />
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
                                        Room/Cottage Allocation
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
                                        Date Allocated
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {room.map((room) => (
                                    <tr key={room.name}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {room.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {room.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {room.rate}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {room.capacity}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            <a
                                                href="#"
                                                className="text-indigo-500 hover:text-indigo-700"
                                            >
                                                Allocate Item
                                                <span className="sr-only">
                                                    , {room.rsbsa}
                                                </span>
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
    );
}
