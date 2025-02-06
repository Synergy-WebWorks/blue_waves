import React from "react";
import AddCottageSection from "./add-cottage-section";

export default function CottageTableSection() {
    const room = [
        {
            id: 1,
            name: "Umbrella Cottage 1",
            href: "#",
            rate: "₱600",
            capacity: "Good for 4-5 Persons",
            imageSrc: "/images/Umbrella Cottage (2pcs)/1.jpeg",
            status: "Active",
            
        },
        {
            id: 2,
            name: "Umbrella Cottage 2",
            href: "#",
            rate: "₱600",
            capacity: "Good for 4-5 Persons",
            imageSrc: "/images/Umbrella Cottage (2pcs)/2.jpg",
            status: "Active",
        },
        {
            id: 3,
            name: "Pavillion Cottage",
            href: "#",
            rate: "₱2500",
            capacity: "Good for 15 - 20 Persons",
            imageSrc: "/images/Pavillion Cottage (1pc)/1.jpg",
            status: "Active",
        },
        {
            id: 4,
            name: "Floating  Cottage",
            href: "#",
            rate: "₱3500",
            capacity: "Good for 15 - 20 Persons",
            imageSrc: "/images/Activities/Floating Cottage (1pc)/1.jpeg",
            status: "Active",
        },
    ];
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-4 pb-8 border rounded-lg shadow-lg">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900 pt-8">
                        Cottage Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the active cottages in the system.
                    </p>
                </div>
                <AddCottageSection />
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
                                        Image
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Cottage Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Cottage Rate
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Cottage Capacity
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
                                {room.map((room) => (
                                    <tr key={room.name}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            <img
                                                alt=""
                                                src={room.imageSrc}
                                                className="h-16 w-full rounded-2xl object-cover"
                                            />
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
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                {room.status}
                                            </span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a
                                                href="#"
                                                className="text-indigo-500 hover:text-indigo-700"
                                            >
                                                Update Cottage
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
