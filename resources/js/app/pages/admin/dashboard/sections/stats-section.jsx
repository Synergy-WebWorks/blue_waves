import React, { useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
    Bars3CenterLeftIcon,
    BellIcon,
    ClockIcon,
    CogIcon,
    CreditCardIcon,
    DocumentChartBarIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    BanknotesIcon,
    BuildingOfficeIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
    FaCalendarCheck,
    FaMoneyBillTransfer,
    FaTentArrowDownToLine,
} from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const cards = [
    {
        name: "Pending Payment Reservation",
        href: "#",
        icon: FaMoneyBillTransfer,
        amount: "3",
    },
    {
        name: "Confirmed Reservation",
        href: "#",
        icon: FaCalendarCheck,
        amount: "26",
    },
    {
        name: "Active Reservation",
        href: "#",
        icon: FaTentArrowDownToLine,
        amount: "10",
    },
    {
        name: "Cancelled Reservation",
        href: "#",
        icon: ScaleIcon,
        amount: "3",
    },
];
const transactions = [
    {
        id: 1,
        name: "Payment to Molly Sanders",
        href: "#",
        amount: "$20,000",
        currency: "USD",
        status: "success",
        date: "July 11, 2020",
        datetime: "2020-07-11",
    },
    // More transactions...
];
const statusStyles = {
    success: "bg-green-100 text-green-800",
    processing: "bg-yellow-100 text-yellow-800",
    failed: "bg-gray-100 text-gray-800",
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function StatsSection() {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const formattedDate = new Date().toLocaleDateString("en-US", options);

    return (
        <>
            <div className="min-h-full">
                <div className="flex flex-1 flex-col">
                    <div className="flex h-16 shrink-0 border-b border-gray-200 bg-white">
                        {/* Search bar */}
                        <div className="flex flex-1 justify-end px-4 sm:px-6 lg:mx-auto lg:px-8">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-hidden"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        aria-hidden="true"
                                        className="size-6"
                                    />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-hidden lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                                            <span className="absolute -inset-1.5 lg:hidden" />
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                className="size-8 rounded-full"
                                            />
                                            <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                                                <span className="sr-only">
                                                    Open user menu for{" "}
                                                </span>
                                                Emilia Birch
                                            </span>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="ml-1 hidden size-5 shrink-0 text-gray-400 lg:block"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Menu.Items
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        <Menu.Item>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                            >
                                                Your Profile
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                            >
                                                Settings
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link
                                                method="post"
                                                href={route("logout")}
                                                as="button"
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                            >
                                                Logout
                                            </Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="pb-8">
                        {/* Page header */}
                        <div className="bg-white shadow-sm">
                            <div className="px-4 sm:px-6 lg:px-8 py-3">
                                <div className="md:flex md:items-center md:justify-between lg:border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        {/* Profile */}
                                        <div className="flex items-center">
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                                                className="hidden size-16 rounded-full sm:block"
                                            />
                                            <div>
                                                <div className="flex items-center">
                                                    <img
                                                        alt=""
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                                                        className="size-16 rounded-full sm:hidden"
                                                    />
                                                    <h1 className="ml-3 text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl/9">
                                                        Good morning, Emilia
                                                        Birch
                                                    </h1>
                                                </div>
                                                <dl className="mt-6 flex flex-col sm:mt-1 sm:ml-3 sm:flex-row sm:flex-wrap">
                                                    <dt className="sr-only">
                                                        Company
                                                    </dt>
                                                    <dd className="flex items-center text-sm font-medium text-gray-500 capitalize sm:mr-6">
                                                        <BuildingOfficeIcon
                                                            aria-hidden="true"
                                                            className="mr-1.5 size-5 shrink-0 text-gray-400"
                                                        />
                                                        Duke street studio
                                                    </dd>
                                                    <dt className="sr-only">
                                                        Account status
                                                    </dt>
                                                    <dd className="mt-3 flex items-center text-sm font-medium text-gray-500 capitalize sm:mt-0 sm:mr-6">
                                                        <CheckCircleIcon
                                                            aria-hidden="true"
                                                            className="mr-1.5 size-5 shrink-0 text-green-400"
                                                        />
                                                        Verified account
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                                        <h3 className="text-base font-medium text-cyan-800">
                                            {formattedDate}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-lg/6 font-medium text-gray-900">
                                    Overview
                                </h2>
                                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                    {/* Card */}
                                    {cards.map((card) => (
                                        <div
                                            key={card.name}
                                            className="overflow-hidden rounded-lg bg-cyan-600 shadow-lg"
                                        >
                                            <div className="p-5">
                                                <div className="flex items-center">
                                                    <div className="shrink-0">
                                                        <card.icon
                                                            aria-hidden="true"
                                                            className="size-6 text-cyan-100"
                                                        />
                                                    </div>
                                                    <div className="ml-5 w-0 flex-1">
                                                        <dl>
                                                            <dt className="truncate text-sm font-medium text-cyan-100">
                                                                {card.name}
                                                            </dt>
                                                            <dd>
                                                                <div className="text-lg font-medium text-cyan-50">
                                                                    {
                                                                        card.amount
                                                                    }
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-5 py-3">
                                                <div className="text-sm">
                                                    <a
                                                        href={card.href}
                                                        className="font-medium text-cyan-700 hover:text-cyan-900"
                                                    >
                                                        View all
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h2 className="mx-auto mt-8 px-4 text-lg/6 font-medium text-gray-900 sm:px-6 lg:px-8">
                                Recent activity
                            </h2>

                            {/* Activity list (smallest breakpoint only) */}
                            <div className="shadow-sm sm:hidden">
                                <ul
                                    role="list"
                                    className="mt-2 divide-y divide-gray-200 overflow-hidden shadow-sm sm:hidden"
                                >
                                    {transactions.map((transaction) => (
                                        <li key={transaction.id}>
                                            <a
                                                href={transaction.href}
                                                className="block bg-white px-4 py-4 hover:bg-gray-50"
                                            >
                                                <span className="flex items-center space-x-4">
                                                    <span className="flex flex-1 space-x-2 truncate">
                                                        <BanknotesIcon
                                                            aria-hidden="true"
                                                            className="size-5 shrink-0 text-gray-400"
                                                        />
                                                        <span className="flex flex-col truncate text-sm text-gray-500">
                                                            <span className="truncate">
                                                                {
                                                                    transaction.name
                                                                }
                                                            </span>
                                                            <span>
                                                                <span className="font-medium text-gray-900">
                                                                    {
                                                                        transaction.amount
                                                                    }
                                                                </span>{" "}
                                                                {
                                                                    transaction.currency
                                                                }
                                                            </span>
                                                            <time
                                                                dateTime={
                                                                    transaction.datetime
                                                                }
                                                            >
                                                                {
                                                                    transaction.date
                                                                }
                                                            </time>
                                                        </span>
                                                    </span>
                                                    <ChevronRightIcon
                                                        aria-hidden="true"
                                                        className="size-5 shrink-0 text-gray-400"
                                                    />
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <nav
                                    aria-label="Pagination"
                                    className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
                                >
                                    <div className="flex flex-1 justify-between">
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                                        >
                                            Previous
                                        </a>
                                        <a
                                            href="#"
                                            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                                        >
                                            Next
                                        </a>
                                    </div>
                                </nav>
                            </div>

                            {/* Activity table (small breakpoint and up) */}
                            <div className="hidden sm:block">
                                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="mt-2 flex flex-col">
                                        <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow-lg sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="bg-cyan-600 px-6 py-3 text-left text-sm font-semibold text-cyan-50"
                                                        >
                                                            Transaction
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="bg-cyan-600 px-6 py-3 text-right text-sm font-semibold text-cyan-50"
                                                        >
                                                            Amount
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="hidden bg-cyan-600 px-6 py-3 text-left text-sm font-semibold text-cyan-50 md:block"
                                                        >
                                                            Status
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="bg-cyan-600 px-6 py-3 text-right text-sm font-semibold text-cyan-50"
                                                        >
                                                            Date
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    {transactions.map(
                                                        (transaction) => (
                                                            <tr
                                                                key={
                                                                    transaction.id
                                                                }
                                                                className="bg-white"
                                                            >
                                                                <td className="w-full max-w-0 px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                                    <div className="flex">
                                                                        <a
                                                                            href={
                                                                                transaction.href
                                                                            }
                                                                            className="group inline-flex space-x-2 truncate text-sm"
                                                                        >
                                                                            <BanknotesIcon
                                                                                aria-hidden="true"
                                                                                className="size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                                                            />
                                                                            <p className="truncate text-gray-500 group-hover:text-gray-900">
                                                                                {
                                                                                    transaction.name
                                                                                }
                                                                            </p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-500">
                                                                    <span className="font-medium text-gray-900">
                                                                        {
                                                                            transaction.amount
                                                                        }
                                                                    </span>
                                                                    {
                                                                        transaction.currency
                                                                    }
                                                                </td>
                                                                <td className="hidden px-6 py-4 text-sm whitespace-nowrap text-gray-500 md:block">
                                                                    <span
                                                                        className={classNames(
                                                                            statusStyles[
                                                                                transaction
                                                                                    .status
                                                                            ],
                                                                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
                                                                        )}
                                                                    >
                                                                        {
                                                                            transaction.status
                                                                        }
                                                                    </span>
                                                                </td>
                                                                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-500">
                                                                    <time
                                                                        dateTime={
                                                                            transaction.datetime
                                                                        }
                                                                    >
                                                                        {
                                                                            transaction.date
                                                                        }
                                                                    </time>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                            {/* Pagination */}
                                            <nav
                                                aria-label="Pagination"
                                                className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                                            >
                                                <div className="hidden sm:block">
                                                    <p className="text-sm text-gray-700">
                                                        Showing{" "}
                                                        <span className="font-medium">
                                                            1
                                                        </span>{" "}
                                                        to{" "}
                                                        <span className="font-medium">
                                                            10
                                                        </span>{" "}
                                                        of{" "}
                                                        <span className="font-medium">
                                                            20
                                                        </span>{" "}
                                                        results
                                                    </p>
                                                </div>
                                                <div className="flex flex-1 justify-between gap-x-3 sm:justify-end">
                                                    <a
                                                        href="#"
                                                        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:ring-gray-400"
                                                    >
                                                        Previous
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:ring-gray-400"
                                                    >
                                                        Next
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
