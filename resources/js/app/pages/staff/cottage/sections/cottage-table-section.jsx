import React from "react";
import AddCottageSection from "./add-cottage-section";
import { useSelector } from "react-redux";
import ViewCottageImageSection from "./view-cottage-image-section";
import UpdateCottageSection from "./update-cottage-section";
import DeleteCottageSection from "./delete-cottage-section";

export default function CottageTableSection() {
    const { rents } = useSelector((state) => state.rents)

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
                    <h1 className="text-base font-semibold text-cyan-600 pt-8">
                        Cottage Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        A list of all the active cottages in the system.
                    </p>
                </div>
                {/* <AddCottageSection /> */}
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y text-center divide-gray-900">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide"
                                    >
                                        Cottage Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide"
                                    >
                                        Image
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide"
                                    >
                                        Cottage Rate
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide"
                                    >
                                        Cottage Capacity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300 bg-white">
                                {rents?.result?.map((cottage) => {
                                    if (cottage.type === "cottage") {
                                        return (
                                            <tr key={cottage.name}>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    {cottage.name}
                                                </td>
                                                <ViewCottageImageSection data={cottage} />
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    {cottage.rate}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    {cottage.min_capacity}-{cottage.max_capacity} person
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                        {cottage.status}
                                                    </span>
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <a
                                                        href="#"
                                                        className="text-indigo-500 hover:text-indigo-700"
                                                    >
                                                        <div className="flex items-center justify-center gap-1">
                                                            <UpdateCottageSection data={cottage} />
                                                            {/* <DeleteCottageSection data={cottage} /> */}
                                                        </div>
                                                        <span className="sr-only">
                                                            , {cottage.rsbsa}
                                                        </span>
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
