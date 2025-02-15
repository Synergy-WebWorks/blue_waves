import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/20/solid";

const orders = [
    {
        id: 1,
        title: "Family Room",
        href: "#",
        price: "₱6500.00",
        capacity: "Good for 5 Persons",
        imageSrc: "/images/Family Room/C.jpeg",
        daysTotal: "1",
        unit: "Night(s)",
    },
    {
        id: 2,
        title: "Umbrella Cottage 1",
        href: "#",
        price: "₱600.00",
        capacity: "Good for 4-5 Persons",
        imageSrc: "/images/Umbrella Cottage (2pcs)/1.jpeg",
        daysTotal: "1",
        unit: "Day(s)",
    },
    // More products...
];

export default function SecondFormSection() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Checkout</h2>

                <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    <div>
                        <div>
                            <h2 className="text-lg font-medium text-cyan-600">
                                Contact information
                            </h2>

                            <div className="mt-4">
                                <label
                                    htmlFor="email-address"
                                    className="block text-sm/6 font-medium text-gray-700"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email-address"
                                        name="email-address"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 mt-3">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm/6 font-medium text-gray-700"
                                >
                                    Phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        autoComplete="tel"
                                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h2 className="text-lg font-medium text-cyan-600">
                                Personal information
                            </h2>

                            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Middle name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Suffix
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                        >
                                            <option></option>
                                            <option>Sr</option>
                                            <option>Jr</option>
                                            <option>I</option>
                                            <option>II</option>
                                            <option>III</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="address"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
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
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {order.daysTotal}{" "}
                                                        {order.unit}
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

                                            <div className="flex flex-1 items-end justify-end pt-2">
                                                <p className="mt-1 text-sm font-medium text-gray-900">
                                                    {order.price}/{order.unit}
                                                </p>

                                               
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Subtotal</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱7,100.00
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
                                        ₱7,220.00
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
