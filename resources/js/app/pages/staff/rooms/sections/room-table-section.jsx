import React from "react";
import AddRoomSection from "./add-room-section";
import { useSelector } from "react-redux";
import ViewRoomImageSection from "./view-room-image-section";
import UpdateRoomSection from "./update-room-section";
import DeleteRoomSection from "./delete-room-section";

export default function RoomTableSection() {
    const { rents } = useSelector((state) => state.rents)
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
                        Room Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        A list of all the active rooms in the system.
                    </p>
                </div>
                {/* <AddRoomSection /> */}
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y text-center divide-gray-900">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-medium uppercase tracking-wide"
                                    >
                                        Room Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-medium uppercase tracking-wide"
                                    >
                                        Image
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-medium uppercase tracking-wide"
                                    >
                                        Room Rate
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-medium uppercase tracking-wide"
                                    >
                                        Room Capacity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-medium uppercase tracking-wide"
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
                                {rents?.result?.map((room) => {
                                    if (room.type === "room") {
                                        return (
                                            <tr key={room.name}>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                    {room.name}
                                                </td>
                                                <ViewRoomImageSection data={room} />
                                                <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                                    {room.rate}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    {room.min_capacity}-{room.max_capacity} person
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
                                                        <div className="flex items-center justify-center gap-1">
                                                            <UpdateRoomSection data={room} />
                                                            {/* <DeleteRoomSection data={room} /> */}
                                                        </div>
                                                        <span className="sr-only">
                                                            , {room.rsbsa}
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
