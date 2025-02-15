import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    CalendarDaysIcon,
    FolderIcon,
    HomeIcon,
    UserGroupIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

import { FaDatabase, FaHeadset, FaRegCircleDot } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const navigation = [
    { name: "Dashboard", href: "./dashboard", icon: HomeIcon, current: false },
    {
        name: "Reservation Section",
        href: "./reservation",
        icon: CalendarDaysIcon,
        current: false,
    },
    {
        name: "Report Section",
        href: "./reports",
        icon: FolderIcon,
        current: false,
    },
];
const teams = [
    {
        id: 1,
        name: "Account Management",
        icon: UserGroupIcon,
        current: false,
        children: [
            { name: "Accounts List", href: "./accounts", icon: FaRegCircleDot },
        ],
    },
    {
        id: 2,
        name: "System Maintenance",
        icon: FaDatabase,
        current: false,
        children: [
            { name: "Room Section", href: "./rooms", icon: FaRegCircleDot },
            {
                name: "Cottage Section",
                href: "./cottage",
                icon: FaRegCircleDot,
            },
            {
                name: "Activity Section",
                href: "./activities",
                icon: FaRegCircleDot,
            },
            {
                name: "Inventory Section",
                href: "./inventory",
                icon: FaRegCircleDot,
            },
            {
                name: "Terms & Condition Section",
                href: "./terms",
                icon: FaRegCircleDot,
            },
            {
                name: "Landing Page Section",
                href: "./landing-page",
                icon: FaRegCircleDot,
            },
        ],
    },
    {
        id: 3,
        name: "Help Desk",
        icon: FaHeadset,
        current: false,
        children: [
            {
                name: "Download User Manual",
                href: "./manual",
                icon: FaRegCircleDot,
            },
            { name: "Contact Us", href: "./contact", icon: FaRegCircleDot },
        ],
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AdminLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (name) => {
        setExpanded((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <>
            <div>
                <Dialog
                    open={sidebarOpen}
                    onClose={setSidebarOpen}
                    className="relative z-50 lg:hidden"
                >
                    <Dialog.Backdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <Dialog.Panel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                        >
                            <Transition show={sidebarOpen}>
                                <Transition.Child>
                                    <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                            className="-m-2.5 p-2.5"
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <XMarkIcon
                                                aria-hidden="true"
                                                className="size-6 text-white"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                            </Transition>

                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-cyan-600 px-6 pb-2">
                                <div className="flex h-16 shrink-0 items-center">
                                    <img
                                        alt="Blue Waves Resort"
                                        src="/images/blue_waves.png"
                                        className="h-12 w-auto"
                                    />
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul
                                        role="list"
                                        className="flex flex-1 flex-col gap-y-7"
                                    >
                                        <li>
                                            <ul
                                                role="list"
                                                className="-mx-2 space-y-1"
                                            >
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        {item.children ? (
                                                            <>
                                                                <div
                                                                    onClick={() =>
                                                                        toggleExpand(
                                                                            item.name
                                                                        )
                                                                    }
                                                                    className={classNames(
                                                                        "group flex cursor-pointer gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                                                        expanded[
                                                                            item
                                                                                .name
                                                                        ]
                                                                            ? "bg-cyan-800 text-white"
                                                                            : "text-cyan-100 hover:bg-cyan-600 hover:text-white"
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        aria-hidden="true"
                                                                        className="h-6 w-6 shrink-0"
                                                                    />
                                                                    {item.name}
                                                                    <span className="ml-auto">
                                                                        {expanded[
                                                                            item
                                                                                .name
                                                                        ]
                                                                            ? "-"
                                                                            : "+"}
                                                                    </span>
                                                                </div>
                                                                {expanded[
                                                                    item.name
                                                                ] && (
                                                                    <ul className="ml-6 mt-1 space-y-1">
                                                                        {item.children.map(
                                                                            (
                                                                                child
                                                                            ) => (
                                                                                <Link
                                                                                    key={
                                                                                        child.name
                                                                                    }
                                                                                >
                                                                                    <Link
                                                                                        href={
                                                                                            child.href
                                                                                        }
                                                                                        className="flex items-center text-cyan-100 hover:bg-cyan-600 hover:text-white rounded-md px-2 py-1 text-sm font-semibold leading-6"
                                                                                    >
                                                                                        <child.icon
                                                                                            aria-hidden="true"
                                                                                            className="h-3 w-3 shrink-0 mr-2"
                                                                                        />
                                                                                        {
                                                                                            child.name
                                                                                        }
                                                                                    </Link>
                                                                                </Link>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? "bg-cyan-800 text-white"
                                                                        : "text-cyan-100 hover:bg-cyan-600 hover:text-white",
                                                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                                )}
                                                            >
                                                                <item.icon
                                                                    aria-hidden="true"
                                                                    className="h-6 w-6 shrink-0"
                                                                />
                                                                {item.name}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="text-xs/6 font-semibold text-gray-400">
                                                Your teams
                                            </div>
                                            <ul
                                                role="list"
                                                className="-mx-2 mt-2 space-y-1"
                                            >
                                                {teams.map((teams) => (
                                                    <li key={teams.name}>
                                                        {teams.children ? (
                                                            <>
                                                                <div
                                                                    onClick={() =>
                                                                        toggleExpand(
                                                                            teams.name
                                                                        )
                                                                    }
                                                                    className={classNames(
                                                                        "group flex cursor-pointer gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                                                        expanded[
                                                                            teams
                                                                                .name
                                                                        ]
                                                                            ? "bg-cyan-800 text-white"
                                                                            : "text-cyan-100 hover:bg-cyan-600 hover:text-white"
                                                                    )}
                                                                >
                                                                    <teams.icon
                                                                        aria-hidden="true"
                                                                        className="h-6 w-6 shrink-0"
                                                                    />
                                                                    {teams.name}
                                                                    <span className="ml-auto">
                                                                        {expanded[
                                                                            teams
                                                                                .name
                                                                        ]
                                                                            ? "-"
                                                                            : "+"}
                                                                    </span>
                                                                </div>
                                                                {expanded[
                                                                    teams.name
                                                                ] && (
                                                                    <ul className="ml-6 mt-1 space-y-1">
                                                                        {teams.children.map(
                                                                            (
                                                                                child
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        child.name
                                                                                    }
                                                                                >
                                                                                    <Link
                                                                                        href={
                                                                                            child.href
                                                                                        }
                                                                                        className="flex items-center text-cyan-100 hover:bg-cyan-600 hover:text-white rounded-md px-2 py-1 text-sm font-semibold leading-6"
                                                                                    >
                                                                                        <child.icon
                                                                                            aria-hidden="true"
                                                                                            className="h-3 w-3 shrink-0 mr-2"
                                                                                        />
                                                                                        {
                                                                                            child.name
                                                                                        }
                                                                                    </Link>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <link
                                                                href={
                                                                    teams.href
                                                                }
                                                                className={classNames(
                                                                    teams.current
                                                                        ? "bg-cyan-800 text-white"
                                                                    : "text-cyan-100 hover:bg-cyan-600 hover:text-white",
                                                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                                )}
                                                            >
                                                                <teams.icon
                                                                    aria-hidden="true"
                                                                    className="h-6 w-6 shrink-0"
                                                                />
                                                                {teams.name}
                                                            </link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-cyan-700 px-6">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                alt="Blue Waves Resort"
                                src="/images/blue_waves.png"
                                className="h-12 w-auto"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul
                                role="list"
                                className="flex flex-1 flex-col gap-y-7"
                            >
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                {item.children ? (
                                                    <>
                                                        <div
                                                            onClick={() =>
                                                                toggleExpand(
                                                                    item.name
                                                                )
                                                            }
                                                            className={classNames(
                                                                "group flex cursor-pointer gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                                                expanded[
                                                                    item.name
                                                                ]
                                                                    ? "bg-cyan-800 text-white"
                                                                    : "text-cyan-100 hover:bg-cyan-600 hover:text-white"
                                                            )}
                                                        >
                                                            <item.icon
                                                                aria-hidden="true"
                                                                className="h-6 w-6 shrink-0"
                                                            />
                                                            {item.name}
                                                            <span className="ml-auto">
                                                                {expanded[
                                                                    item.name
                                                                ]
                                                                    ? "-"
                                                                    : "+"}
                                                            </span>
                                                        </div>
                                                        {expanded[
                                                            item.name
                                                        ] && (
                                                            <ul className="ml-6 mt-1 space-y-1">
                                                                {item.children.map(
                                                                    (child) => (
                                                                        <Link
                                                                            key={
                                                                                child.name
                                                                            }
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    child.href
                                                                                }
                                                                                className="flex items-center text-cyan-100 hover:bg-cyan-600 hover:text-white rounded-md px-2 py-1 text-sm font-semibold leading-6"
                                                                            >
                                                                                <child.icon
                                                                                    aria-hidden="true"
                                                                                    className="h-3 w-3 shrink-0 mr-2"
                                                                                />
                                                                                {
                                                                                    child.name
                                                                                }
                                                                            </Link>
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? "bg-cyan-800 text-white"
                                                                : "text-cyan-100 hover:bg-cyan-600 hover:text-white",
                                                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                        )}
                                                    >
                                                        <item.icon
                                                            aria-hidden="true"
                                                            className="h-6 w-6 shrink-0"
                                                        />
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <div className="text-xs/6 font-semibold text-gray-200">
                                        System Controls
                                    </div>
                                    <ul
                                        role="list"
                                        className="-mx-2 mt-2 space-y-1"
                                    >
                                        {teams.map((teams) => (
                                            <li key={teams.name}>
                                                {teams.children ? (
                                                    <>
                                                        <div
                                                            onClick={() =>
                                                                toggleExpand(
                                                                    teams.name
                                                                )
                                                            }
                                                            className={classNames(
                                                                "group flex cursor-pointer gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                                                expanded[
                                                                    teams.name
                                                                ]
                                                                    ? "bg-cyan-800 text-white"
                                                                    : "text-cyan-100 hover:bg-cyan-600 hover:text-white"
                                                            )}
                                                        >
                                                            <teams.icon
                                                                aria-hidden="true"
                                                                className="h-6 w-6 shrink-0"
                                                            />
                                                            {teams.name}
                                                            <span className="ml-auto">
                                                                {expanded[
                                                                    teams.name
                                                                ]
                                                                    ? "-"
                                                                    : "+"}
                                                            </span>
                                                        </div>
                                                        {expanded[
                                                            teams.name
                                                        ] && (
                                                            <ul className="ml-6 mt-1 space-y-1">
                                                                {teams.children.map(
                                                                    (child) => (
                                                                        <li
                                                                            key={
                                                                                child.name
                                                                            }
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    child.href
                                                                                }
                                                                                className="flex items-center text-cyan-100 hover:bg-cyan-600 hover:text-white rounded-md px-2 py-1 text-sm font-semibold leading-6"
                                                                            >
                                                                                <child.icon
                                                                                    aria-hidden="true"
                                                                                    className="h-3 w-3 shrink-0 mr-2"
                                                                                />
                                                                                {
                                                                                    child.name
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )}
                                                    </>
                                                ) : (
                                                    <link
                                                        href={teams.href}
                                                        className={classNames(
                                                            teams.current
                                                                ? "bg-cyan-800 text-white"
                                                                : "text-cyan-100 hover:bg-cyan-600 hover:text-white",
                                                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                                        )}
                                                    >
                                                        <teams.icon
                                                            aria-hidden="true"
                                                            className="h-6 w-6 shrink-0"
                                                        />
                                                        {teams.name}
                                                    </link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="-mx-6 mt-auto">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-cyan-100 hover:bg-cyan-600 hover:text-white"
                                    >
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                                            className="size-8 rounded-full bg-gray-50"
                                        />
                                        <span className="sr-only">
                                            Your profile
                                        </span>
                                        <span aria-hidden="true">
                                            Emilia Birch
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                    <div className="flex-1 text-sm/6 font-semibold text-gray-900">
                        Dashboard
                    </div>
                    <Link href="#">
                        <span className="sr-only">Your profile</span>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                            className="size-8 rounded-full bg-gray-50"
                        />
                    </Link>
                </div>

                <main className="lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </>
    );
}
