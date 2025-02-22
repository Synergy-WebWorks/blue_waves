import React from "react";
import { FaAddressBook, FaLocationDot, FaPhoneVolume, FaUser } from "react-icons/fa6";

const products = [
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        price: "$36.00",
        color: "Charcoal",
        size: "L",
        imageSrc:
            "https://tailwindui.com/plus-assets/img/ecommerce-images/confirmation-page-06-product-01.jpg",
        imageAlt: "Model wearing men's charcoal basic tee in large.",
    },
    // More products...
];

export default function OrderSummarySection() {
    return (
        <>
            <main className="relative lg:min-h-full">
                <div>
                    <div className="mx-auto max-w-1/2 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-1/2 lg:grid-cols-1 lg:gap-x-8 lg:px-72 lg:py-12 xl:gap-x-24">
                        <div className="lg:col-start-2">
                            <p className="mt-2 text-4xl font-bold tracking-tight text-cyan-600 sm:text-5xl">
                                Booking Details & Billing Summary
                            </p>
                            <p className="mt-2 text-base text-gray-500">
                                A streamlined overview of bookings and billing
                                details, ensuring accurate tracking and seamless
                                financial management
                            </p>

                            <dl className="mt-16 grid grid-cols-3 gap-x-4 text-sm text-gray-600">
                                <div>
                                    <dt className="font-medium text-gray-900">
                                    <FaUser className="float-left text-gray-400 size-5 mr-1"/>
                                        Guest Information
                                    </dt>
                                    <dd className="mt-2">
                                        <address className="not-italic">
                                            <span className="block font-bold text-cyan-600">
                                                Kristin Watson
                                            </span>
                                            <span className="block">
                                                7363 Cynthia Pass
                                            </span>
                                            <span className="block">
                                                Toronto, ON N3Y 4H8
                                            </span>
                                        </address>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-medium text-gray-900">
                                    <FaPhoneVolume className="float-left text-gray-400 size-5 mr-1"/>
                                        Contact Information
                                    </dt>
                                    <dd className="mt-2 space-y-2 sm:flex sm:space-y-0 sm:space-x-4">
                                        <div className="flex-auto">
                                            <p className="text-gray-600">
                                                +639123456789
                                            </p>
                                            <p className="text-gray-600">
                                                Guest@me.com
                                            </p>
                                        </div>
                                    </dd>
                                </div>

                                <div>
                                    <dt className="font-medium text-gray-900">
                                    <FaAddressBook className="float-left text-gray-400 size-5 mr-1"/>
                                        Booking Details
                                    </dt>
                                    <dd className="mt-2 space-y-2 sm:flex sm:space-y-0 sm:space-x-4">
                                        <div className="flex-auto">
                                            <p className="text-gray-600">
                                                Booking Date: Feb 14, 2025 - Feb 15, 2025
                                            </p>
                                            <p className="text-gray-600">
                                                Guest@me.com
                                            </p>
                                        </div>
                                    </dd>
                                </div>
                            </dl>

                            <dl className="mt-16 text-sm font-medium">
                                <dt className="text-gray-900">
                                    Reference number
                                </dt>
                                <dd className="mt-2 text-indigo-600">
                                    BWS-0001256
                                </dd>
                            </dl>

                            <ul
                                role="list"
                                className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
                            >
                                {products.map((product) => (
                                    <li
                                        key={product.id}
                                        className="flex space-x-6 py-6"
                                    >
                                        <img
                                            alt={product.imageAlt}
                                            src={product.imageSrc}
                                            className="size-24 flex-none rounded-md bg-gray-100 object-cover"
                                        />
                                        <div className="flex-auto space-y-1">
                                            <h3 className="text-gray-900">
                                                <a href={product.href}>
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <p>{product.color}</p>
                                            <p>{product.size}</p>
                                        </div>
                                        <p className="flex-none font-medium text-gray-900">
                                            {product.price}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
                                <div className="flex justify-between">
                                    <dt>Subtotal</dt>
                                    <dd className="text-gray-900">$72.00</dd>
                                </div>

                                <div className="flex justify-between">
                                    <dt>Shipping</dt>
                                    <dd className="text-gray-900">$8.00</dd>
                                </div>

                                <div className="flex justify-between">
                                    <dt>Taxes</dt>
                                    <dd className="text-gray-900">$6.40</dd>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                                    <dt className="text-base">Total</dt>
                                    <dd className="text-base">$86.40</dd>
                                </div>
                            </dl>

                            <div className="mt-16 border-t border-gray-200 py-6 text-right">
                                <a
                                    href="#"
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
