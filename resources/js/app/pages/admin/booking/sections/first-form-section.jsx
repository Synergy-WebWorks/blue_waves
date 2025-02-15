import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import Datepicker from "react-tailwindcss-datepicker";
import BookingGuestComponent from "../components/booking-guest-component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const orders = [
    {
        id: 1,
        title: "Family Room",
        href: "#",
        price: "₱6500.00",
        capacity: "Good for 5 Persons",
        imageSrc: "/images/Family Room/C.jpeg",
    },
    // More products...
];

const products = [
    {
        room_id: 1,
        name: "Room A",
        href: "#",
        price: "₱1500.00/night",
        description:
            "Perfect for small groups or families, each room is designed to comfortably accommodate up to 4 guests. Relax in a cozy space featuring double-deck beds and air conditioning for your comfort.",
        options: "Good for 4 Persons",
        images: [
            "/images/ROOMS (2pcs)/ROOM A/A0.jpeg",
            "/images/ROOMS (2pcs)/ROOM A/A2.jpeg",
        ],
    },
    {
        room_id: 2,
        name: "Room B",
        href: "#",
        price: "₱1500.00/night",
        description:
            "Perfect for small groups or families, each room is designed to comfortably accommodate up to 4 guests. Relax in a cozy space featuring double-deck beds and air conditioning for your comfort.",
        options: "Good for 4 Persons",
        images: [
            "/images/ROOMS (2pcs)/ROOM B/B0.jpeg",
            "/images/ROOMS (2pcs)/ROOM B/B1.jpeg",
            "/images/ROOMS (2pcs)/ROOM B/B2.jpeg",
        ],
    },
    {
        room_id: 3,
        name: "Family Room",
        href: "#",
        price: "₱6500.00/night",
        description:
            "Enjoy the ultimate group getaway in our spacious Family Room, perfect for up to 5 guests. This room is thoughtfully designed for comfort, featuring air conditioning and refrigerator to keep you cool and a vibrant ambiance to set the mood.",
        options: "Good for 5 Persons",
        images: [
            "/images/Family Room/C.jpeg",
            "/images/Family Room/C2.jpeg",
            "/images/Family Room/C3.jpeg",
            "/images/Family Room/C4.jpeg",
        ],
    },
    {
        room_id: 3,
        name: "Family Room",
        href: "#",
        price: "₱6500.00/night",
        description:
            "Enjoy the ultimate group getaway in our spacious Family Room, perfect for up to 5 guests. This room is thoughtfully designed for comfort, featuring air conditioning and refrigerator to keep you cool and a vibrant ambiance to set the mood.",
        options: "Good for 5 Persons",
        images: [
            "/images/Family Room/C.jpeg",
            "/images/Family Room/C2.jpeg",
            "/images/Family Room/C3.jpeg",
            "/images/Family Room/C4.jpeg",
        ],
    },
];

const cottages = [
    {
        cottage_id: 1,
        name: "Umbrella Cottage 1",
        href: "#",
        price: "₱600.00",
        description:
            "Perfect for small groups. our Umbrella Cottages offer a cozy, shaded space just steps from the beach. Relax, unwind, and enjoy the ocean breeze in the perfect spot for your seaside escape",
        options: "Good for 4-5 Persons",
        images: [
            "/images/Umbrella Cottage (2pcs)/1.jpeg",
            "/images/Umbrella Cottage (2pcs)/3.jpeg",
            "/images/Umbrella Cottage (2pcs)/4.jpeg",
        ],
    },
    {
        cottage_id: 2,
        name: "Umbrella Cottage 2",
        href: "#",
        price: "₱600.00/day",
        description:
            "Perfect for small groups. our Umbrella Cottages offer a cozy, shaded space just steps from the beach. Relax, unwind, and enjoy the ocean breeze in the perfect spot for your seaside escape",
        options: "Good for 4-5 Persons",
        images: [
            "/images/Umbrella Cottage (2pcs)/2.jpg",
            "/images/Umbrella Cottage (2pcs)/6.jpg",
            "/images/Umbrella Cottage (2pcs)/5.jpg",
        ],
    },
    {
        cottage_id: 3,
        name: "Pavillion Cottage",
        href: "#",
        price: "₱2500.00/day",
        description:
            "Ideal for large groups, our Pavilion can accommodate 15 to 20 guests, offering a spacious and open area perfect for gatherings, celebrations, or simply enjoying time together. Make memories by the beach",
        options: "Good for 15 - 20 Persons",
        images: [
            "/images/Pavillion Cottage (1pc)/1.jpg",
            "/images/Pavillion Cottage (1pc)/2.jpg",
            "/images/Pavillion Cottage (1pc)/3.jpg",
            "/images/Pavillion Cottage (1pc)/4.jpg",
        ],
    },
    {
        cottage_id: 3,
        name: "Floating  Cottage",
        href: "#",
        price: "₱3500.00/day",
        description:
            "Experience the ocean like never before with our Floating Cottage, perfect for 15–20 guests. Relax and enjoy the gentle sway of the waves while creating unforgettable memories right on the water.",
        options: "Good for 15 - 20 Persons",
        images: [
            "/images/Activities/Floating Cottage (1pc)/1.jpeg",
            "/images/Activities/Floating Cottage (1pc)/2.jpg",
            "/images/Activities/Floating Cottage (1pc)/3.jpeg",
        ],
    },
];

export default function FirstFormSection() {
    const NEXT_MONTH = new Date();
    NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);

    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: null,
    });
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [imageIndexes, setImageIndexes] = useState(
        products.map(() => 0) // Track image index per product
    );

    const handleNext = (index) => {
        setImageIndexes((prevIndexes) =>
            prevIndexes.map((imgIndex, i) =>
                i === index
                    ? (imgIndex + 1) % products[i].images.length
                    : imgIndex
            )
        );
    };

    const handlePrev = (index) => {
        setImageIndexes((prevIndexes) =>
            prevIndexes.map((imgIndex, i) =>
                i === index
                    ? (imgIndex - 1 + products[i].images.length) %
                      products[i].images.length
                    : imgIndex
            )
        );
    };

    return (
        <div className="bg-gray-50">
            <div className="mx-auto px-4 pt-16 pb-24 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    <div>
                        <div className="mt-2 pt-1 pb-10">
                            <h2 className="text-lg font-medium text-cyan-600">
                                Booking Details
                            </h2>

                            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 pb-3 border-b border-gray-300">
                                {/* Datepicker - Full width on small screens */}
                                <div className="w-full flex-1">
                                    <Datepicker
                                        primaryColor={"teal"}
                                        value={dateRange}
                                        onChange={(newValue) =>
                                            setDateRange(newValue)
                                        }
                                        minDate={today}
                                        separator="to"
                                        displayFormat="MM/DD/YYYY"
                                        popoverDirection="down"
                                        showShortcuts={false}
                                        className="w-full"
                                    />
                                </div>

                                {/* Booking Details Component - Full width on small screens */}
                                <div className="w-full flex-1">
                                    <BookingGuestComponent />
                                </div>

                                {/* Search Button */}
                                <div className="w-full">
                                    <button className="w-full px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition">
                                        Search
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-2 lg:gap-x-8 mt-6 p-3 max-h-96 overflow-y-auto">
                                {products.map((product, index) => (
                                    <div
                                        key={product.room_id}
                                        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
                                    >
                                        {/* Image container with navigation */}
                                        <div className="relative">
                                            <img
                                                alt={product.name}
                                                src={
                                                    product.images[
                                                        imageIndexes[index]
                                                    ]
                                                }
                                                className="aspect-[3/4] w-full bg-gray-200 object-cover sm:aspect-auto sm:h-96"
                                            />
                                            {/* Previous button */}
                                            <button
                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                                onClick={() =>
                                                    handlePrev(index)
                                                }
                                            >
                                                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                                            </button>
                                            {/* Next button */}
                                            <button
                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                                onClick={() =>
                                                    handleNext(index)
                                                }
                                            >
                                                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                                            </button>
                                        </div>

                                        {/* Room Info */}
                                        <div className="flex flex-1 flex-col space-y-2 p-4">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                <a href={product.href}>
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <p className="text-sm italic font-bold text-gray-500">
                                                {product.options}
                                            </p>
                                            <p className="text-sm text-gray-500 text-justify">
                                                {product.description}
                                            </p>
                                            <div className="flex flex-1 flex-col justify-end">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-base font-medium text-cyan-800">
                                                        {product.price}
                                                    </p>
                                                    <button className="ml-4 bg-orange-500 text-white hover:bg-orange-600 px-2 py-1 rounded-md">
                                                        Add to Booking
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {cottages.map((cottage, index) => (
                                    <div
                                        key={cottage.cottage_id}
                                        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
                                    >
                                        {/* Image container with navigation */}
                                        <div className="relative">
                                            <img
                                                alt={cottage.name}
                                                src={
                                                    cottage.images[
                                                        imageIndexes[index]
                                                    ]
                                                }
                                                className="aspect-[3/4] w-full bg-gray-200 object-cover sm:aspect-auto sm:h-96"
                                            />
                                            {/* Previous button */}
                                            <button
                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                                onClick={() =>
                                                    handlePrev(index)
                                                }
                                            >
                                                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                                            </button>
                                            {/* Next button */}
                                            <button
                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                                onClick={() =>
                                                    handleNext(index)
                                                }
                                            >
                                                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                                            </button>
                                        </div>

                                        {/* Room Info */}
                                        <div className="flex flex-1 flex-col space-y-2 p-4">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                <a href={cottage.href}>
                                                    {cottage.name}
                                                </a>
                                            </h3>
                                            <p className="text-sm italic font-bold text-gray-500">
                                                {cottage.options}
                                            </p>
                                            <p className="text-sm text-gray-500 text-justify">
                                                {cottage.description}
                                            </p>
                                            <div className="flex flex-1 flex-col justify-end">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-base font-medium text-cyan-800">
                                                        {cottage.price}
                                                    </p>
                                                    <button className="ml-4 bg-orange-500 text-white hover:bg-orange-600 px-2 py-1 rounded-md">
                                                        Add to Booking
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order summary */}
                    <div className="mt-10 lg:mt-0">
                        <h2 className="text-lg font-medium text-cyan-600">
                            Booking Order summary
                        </h2>

                        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-xs">
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul
                                role="list"
                                className="divide-y divide-gray-200"
                            >
                                {orders.map((order) => (
                                    <li
                                        key={order.id}
                                        className="flex px-4 py-6 sm:px-6"
                                    >
                                        <div className="shrink-0">
                                            <img
                                                alt={order.imageAlt}
                                                src={order.imageSrc}
                                                className="w-20 rounded-md"
                                            />
                                        </div>

                                        <div className="ml-6 flex flex-1 flex-col">
                                            <div className="flex">
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-sm">
                                                        <a
                                                            href={order.href}
                                                            className="font-medium text-gray-700 hover:text-gray-800"
                                                        >
                                                            {order.title}
                                                        </a>
                                                    </h4>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {order.capacity}
                                                    </p>
                                                </div>

                                                <div className="ml-4 flow-root shrink-0">
                                                    <button
                                                        type="button"
                                                        className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                                                    >
                                                        <span className="sr-only">
                                                            Remove
                                                        </span>
                                                        <TrashIcon
                                                            aria-hidden="true"
                                                            className="size-5"
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex flex-1 items-end justify-between pt-2">
                                                <p className="mt-1 text-sm font-medium text-gray-900">
                                                    {order.price}
                                                </p>

                                                <div className="ml-4">
                                                    <div className="grid grid-cols-1">
                                                        <input
                                                            readOnly
                                                            id="quantity"
                                                            name="quantity"
                                                            aria-label="Quantity"
                                                            value="1 night(s)"
                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Subtotal</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱6,500.00
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between p-2 border-b border-gray-300">
                                    <dt className="text-sm">Entrance Fee</dt>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Adult</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱80.00
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Children</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱40.00
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt className="text-base font-medium">
                                        Total
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900">
                                        ₱6,620.00
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
