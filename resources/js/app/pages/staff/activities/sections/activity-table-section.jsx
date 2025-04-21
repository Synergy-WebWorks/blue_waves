import React from "react";
import AddActivitySection from "./add-activity-section";
import { useSelector } from "react-redux";
import ViewActivityImageSection from "./view-activity-image-section";
import UpdateActivitySection from "./update-activity-section";
import DeleteActivitySection from "./delete-activity-section";

export default function ActivityTableSection() {
    const { activities } = useSelector((state) => state.activities);

    console.log('activities', activities)
    // const room = [
    //     {
    //         id: "1",
    //         name: "Small Kayak",
    //         intro: "Paddle through Paradise",
    //         rate: "₱150",
    //         unit: "per hour",
    //         qty: "5",
    //         imageUrl:
    //             "/images/kayak.jpeg",
    //         description: "Embark on a thrilling kayaking adventure across the tranquil waters of our resort. Glide through crystal-clear waters, with the sea breeze in your hair and stunning views of the coastline surrounding you. Whether you’re a beginner or a seasoned paddler, kayaking is a perfect way to explore hidden coves, serene beaches, and peaceful mangroves at your own pace.",
    //         status: "Active",
    //     },
    //     {
    //         id: "2",
    //         name: "Big Kayak",
    //         intro: "Dive into the Depths",
    //         rate: "₱400",
    //         unit: "per hour",
    //         qty: "5",
    //         imageUrl:
    //             "/images/kayak.jpeg",
    //         description: "Discover the underwater world like never before with our world-class diving experiences. Dive into the vibrant marine life of our pristine reefs, where colorful fish, graceful sea turtles, and thriving coral gardens await. Our experienced diving instructors will guide you through each dive, ensuring you enjoy a safe and memorable underwater journey. Whether you're an experienced diver or a beginner eager to explore, there's a world beneath the waves waiting for you.",
    //         status: "Active",
    //     },
    //     {
    //         id: "3",
    //         name: "Diving",
    //         intro: "Dive into the Depths",
    //         rate: "₱1000",
    //         unit: "per session",
    //         qty: "",
    //         imageUrl:
    //             "/images/diver.jpeg",
    //         description: "Discover the underwater world like never before with our world-class diving experiences. Dive into the vibrant marine life of our pristine reefs, where colorful fish, graceful sea turtles, and thriving coral gardens await. Our experienced diving instructors will guide you through each dive, ensuring you enjoy a safe and memorable underwater journey. Whether you're an experienced diver or a beginner eager to explore, there's a world beneath the waves waiting for you.",
    //         status: "Active",
    //     },
    //     {
    //         id: "4",
    //         name: "Coral Watching",
    //         intro: "Explore the Coral Kingdom",
    //         rate: "₱800",
    //         unit: "per person",
    //         qty: "",
    //         imageUrl:
    //             "/images/diving.jpg",
    //         description: "Take a boat tour to witness the magical coral gardens that lie beneath the surface. With a guided coral watching experience, you'll explore the vibrant marine ecosystems teeming with life. Enjoy the view of delicate coral formations and colorful marine species without even getting your feet wet. Perfect for those who want to admire the ocean’s beauty from above the water, this experience will leave you in awe of the biodiversity beneath the waves.",
    //         status: "Active",
    //     },
    // ];
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
                {/* <AddActivitySection /> */}
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="divide-y min-w-full divide-gray-900">
                            <thead>
                                <tr>
                                    <th
                                        className="text-center px-3 py-3 text-xs font-bold uppercase tracking-wide"
                                    >
                                        Activity Name
                                    </th>
                                    <th
                                        className="text-center px-3 py-3 text-xs font-bold uppercase tracking-wide"
                                    >
                                        Image
                                    </th>
                                    <th
                                        className="text-center px-3 py-3 text-xs font-bold uppercase tracking-wide"
                                    >
                                        Activity Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide"
                                    >
                                        Activity Rate
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide"
                                    >
                                        Quantity
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
                                {activities?.result?.map((activity) => (
                                    <tr tr key={activity.name} >
                                        <td className="text-center px-3 py-4 text-sm text-gray-900">
                                            <b className="text-lg">{activity.name}</b>
                                        </td>
                                        <ViewActivityImageSection data={activity} />
                                        <td className=" px-4 py-4 text-sm text-gray-900">
                                            <div className="prose prose-custom prose-sm m-0">
                                                <div dangerouslySetInnerHTML={{ __html: activity.description }} />
                                            </div>
                                        </td>
                                        <td className="text-center px-3 py-4 text-sm text-gray-900">
                                            {activity.rate} {activity.unit}
                                        </td>
                                        <td className="text-center px-3 py-4 text-sm text-gray-900">
                                            {activity.quantity}
                                        </td>
                                        <td className="text-center px-3 py-4 text-sm text-gray-900">
                                            <span
                                                className={`inline-flex items-center rounded-md px-2 py-1 text-md font-medium ring-1 ring-inset ${activity.status === "Active"
                                                    ? "bg-green-50 text-green-700 ring-green-600/20"
                                                    : "bg-red-50 text-red-700 ring-red-600/20"
                                                    }`}
                                            >
                                                {activity?.status}
                                            </span>
                                        </td>
                                        <td className="relative text-center py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                                            <a
                                                href="#"
                                                className="text-indigo-500 hover:text-indigo-700"
                                            >
                                                <div className="flex items-center justify-center gap-1">
                                                    <UpdateActivitySection data={activity} />
                                                    {/* <DeleteActivitySection data={activity} /> */}
                                                </div>
                                                <span className="sr-only">
                                                    , {activity.rsbsa}
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
        </div >
    );
}
