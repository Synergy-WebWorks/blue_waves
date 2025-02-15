import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/20/solid";

const products = [
    {
        id: 1,
        title: "Basic Tee",
        href: "#",
        price: "$32.00",
        color: "Black",
        size: "Large",
        imageSrc:
            "https://tailwindui.com/plus-assets/img/ecommerce-images/checkout-page-02-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
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
                            Order summary
                        </h2>

                        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-xs">
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul
                                role="list"
                                className="divide-y divide-gray-200"
                            >
                                {products.map((product) => (
                                    <li
                                        key={product.id}
                                        className="flex px-4 py-6 sm:px-6"
                                    >
                                        <div className="shrink-0">
                                            <img
                                                alt={product.imageAlt}
                                                src={product.imageSrc}
                                                className="w-20 rounded-md"
                                            />
                                        </div>

                                        <div className="ml-6 flex flex-1 flex-col">
                                            <div className="flex">
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-sm">
                                                        <a
                                                            href={product.href}
                                                            className="font-medium text-gray-700 hover:text-gray-800"
                                                        >
                                                            {product.title}
                                                        </a>
                                                    </h4>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {product.color}
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {product.size}
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
                                                    {product.price}
                                                </p>

                                                <div className="ml-4">
                                                    <div className="grid grid-cols-1">
                                                        <select
                                                            id="quantity"
                                                            name="quantity"
                                                            aria-label="Quantity"
                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                                        >
                                                            <option value={1}>
                                                                1
                                                            </option>
                                                            <option value={2}>
                                                                2
                                                            </option>
                                                            <option value={3}>
                                                                3
                                                            </option>
                                                            <option value={4}>
                                                                4
                                                            </option>
                                                            <option value={5}>
                                                                5
                                                            </option>
                                                            <option value={6}>
                                                                6
                                                            </option>
                                                            <option value={7}>
                                                                7
                                                            </option>
                                                            <option value={8}>
                                                                8
                                                            </option>
                                                        </select>
                                                        <ChevronDownIcon
                                                            aria-hidden="true"
                                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
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
                                        $64.00
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Shipping</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        $5.00
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Taxes</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        $5.52
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt className="text-base font-medium">
                                        Total
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900">
                                        $75.52
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
