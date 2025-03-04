import React from "react";
import AddActivitySection from "./add-activity-section";

export default function ActivityTableSection() {
    
    const room = [
        {
            id: "1",
            name: "Small Kayak",
            intro: "Paddle through Paradise",
            rate: "₱150",
            unit: "per hour",
            qty: "5",
            imageUrl:
                "/images/kayak.jpeg",
            description: "Embark on a thrilling kayaking adventure across the tranquil waters of our resort. Glide through crystal-clear waters, with the sea breeze in your hair and stunning views of the coastline surrounding you. Whether you’re a beginner or a seasoned paddler, kayaking is a perfect way to explore hidden coves, serene beaches, and peaceful mangroves at your own pace.",
            status: "Active",
        },
        {
            id: "2",
            name: "Big Kayak",
            intro: "Dive into the Depths",
            rate: "₱400",
            unit: "per hour",
            qty: "5",
            imageUrl:
            "/images/kayak.jpeg",
            description: "Discover the underwater world like never before with our world-class diving experiences. Dive into the vibrant marine life of our pristine reefs, where colorful fish, graceful sea turtles, and thriving coral gardens await. Our experienced diving instructors will guide you through each dive, ensuring you enjoy a safe and memorable underwater journey. Whether you're an experienced diver or a beginner eager to explore, there's a world beneath the waves waiting for you.",
            status: "Active",
        },
        {
            id: "3",
            name: "Diving",
            intro: "Dive into the Depths",
            rate: "₱1000",
            unit: "per session",
            qty: "",
            imageUrl:
                "/images/diver.jpeg",
            description: "Discover the underwater world like never before with our world-class diving experiences. Dive into the vibrant marine life of our pristine reefs, where colorful fish, graceful sea turtles, and thriving coral gardens await. Our experienced diving instructors will guide you through each dive, ensuring you enjoy a safe and memorable underwater journey. Whether you're an experienced diver or a beginner eager to explore, there's a world beneath the waves waiting for you.",
            status: "Active",
        },
        {
            id: "4",
            name: "Coral Watching",
            intro: "Explore the Coral Kingdom",
            rate: "₱800",
            unit: "per person",
            qty: "",
            imageUrl:
                "/images/diving.jpg",
            description: "Take a boat tour to witness the magical coral gardens that lie beneath the surface. With a guided coral watching experience, you'll explore the vibrant marine ecosystems teeming with life. Enjoy the view of delicate coral formations and colorful marine species without even getting your feet wet. Perfect for those who want to admire the ocean’s beauty from above the water, this experience will leave you in awe of the biodiversity beneath the waves.",
            status: "Active",
        },
    ];
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-4 pb-8 border rounded-lg shadow-lg">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-cyan-600 pt-8">
                        Activity Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        A list of all the activities in the system.
                    </p>
                </div>
                <AddActivitySection />
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
                                        Activity Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Activity Rate
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
                                {room.map((room) => (
                                    <tr key={room.name}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            <img
                                                alt=""
                                                src={room.imageUrl}
                                                className="h-16 w-full rounded-2xl object-cover"
                                            />
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {room.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {room.rate} {room.unit}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            {room.qty}
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
                                                Update Activity
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
