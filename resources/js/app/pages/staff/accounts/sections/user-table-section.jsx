import React from "react";
import AddUserSection from "./add-user-section";
import { useSelector } from "react-redux";
import UpdateUserSection from "./update-user-section";

export default function UserTableSection() {

    const { users } = useSelector((state) => state.app)
    const people = [
        {
            lastname: "Sung",
            firstname: "Jinwoo",
            middlename: "Beru",
            email: "Sung_Jinwoo@gmail.com",
            role: "Manager",
            status: "Active",
        },
        {
            lastname: "Andrei",
            firstname: "Thomas",
            middlename: "Smith",
            email: "thomas_andrei@gmail.com",
            role: "Staff",
            status: "Active",
        },
    ];

    console.log('users', users)
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-4 pb-8 border rounded-lg shadow-lg">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-cyan-600 pt-5">
                        Account User Records
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        A list of all the active users in the system.
                    </p>
                </div>
                {/* <AddUserSection /> */}
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide"
                                    >
                                        Lastname
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide"
                                    >
                                        Firstname
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide"
                                    >
                                        Middlename
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide"
                                    >
                                        Email Address
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide"
                                    >
                                        Status
                                    </th>
                                    {/* <th
                                        scope="col"
                                        className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide"
                                    >
                                        Action
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {users.map((user) => (
                                    <tr key={user?.email}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {user?.lname}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {user?.fname}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {user?.mname}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <span className="inline-flex items-center rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700">
                                                {user?.user_type == 1 ? "Admin" : user?.user_type == 2 ? "Staff" : "Unknown"}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {user?.email}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <span
                                                className={`inline-flex items-center rounded-md px-2 py-1 text-md font-medium ring-1 ring-inset ${user.status === "Active"
                                                    ? "bg-green-50 text-green-700 ring-green-600/20"
                                                    : "bg-red-50 text-red-700 ring-red-600/20"
                                                    }`}
                                            >
                                                {user?.status}
                                            </span>
                                        </td>
                                        {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a
                                                href="#"
                                                className="text-indigo-500 hover:text-indigo-700"
                                            >
                                                <div className="flex items-center justify-center">
                                                    <UpdateUserSection data={user} />
                                                </div>
                                                <span className="sr-only">
                                                    , {user?.rsbsa}
                                                </span>
                                            </a>
                                        </td> */}
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
