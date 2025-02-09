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
        name: "Payment of Molly Sanders",
        href: "#",
        amount: "₱20,000",
        currency: " PHP",
        status: "success",
        date: "July 11, 2020",
        datetime: "2020-07-11",
    },
    {
        id: 2,
        name: "Payment of Tom Cook",
        href: "#",
        amount: "₱13,000",
        currency: " PHP",
        status: "success",
        date: "July 11, 2020",
        datetime: "2020-07-11",
    },
    {
        id: 3,
        name: "Payment of Sung Jinwoo",
        href: "#",
        amount: "₱10,000",
        currency: " PHP",
        status: "success",
        date: "July 11, 2020",
        datetime: "2020-07-11",
    },
    {
        id: 4,
        name: "Payment of Alexa Smith",
        href: "#",
        amount: "₱8,000",
        currency: " PHP",
        status: "success",
        date: "July 11, 2020",
        datetime: "2020-07-11",
    },
    {
        id: 5,
        name: "Payment of Molly Sanders",
        href: "#",
        amount: "₱20,000",
        currency: " PHP",
        status: "success",
        date: "July 11, 2020",
        datetime: "2020-07-11",
    },
    {
        id: 6,
        name: "Payment of Tom Cook",
        href: "#",
        amount: "₱13,000",
        currency: " PHP",
        status: "success",
        date: "July 11, 2020",
        datetime: "2020-07-11",
    },
    {
        id: 7,
        name: "Payment of Sung Jinwoo",
        href: "#",
        amount: "₱10,000",
        currency: " PHP",
        status: "success",
        date: "July 11, 2020",
        datetime: "2020-07-11",
    },
    {
        id: 8,
        name: "Payment of Alexa Smith",
        href: "#",
        amount: "₱8,000",
        currency: " PHP",
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

export default function ReportsStatsSection() {
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
                    <main className="pb-8">
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
