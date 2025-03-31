import { CalendarIcon } from "@heroicons/react/16/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ReservationPaginationSection from "./reservation-pagination-section";
import store from "@/app/store/store";
import { get_booking_info_thunk } from "@/app/redux/booking-info-thunk";
import { Link } from "@inertiajs/react";

export default function ReservationTableSection() {
    const { booking_infos } = useSelector((store) => store.booking_info);

    useEffect(() => {
        store.dispatch(get_booking_info_thunk());
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-cyan-600">
                        Reservation Section
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        A list of all the users reservation request including
                        their name, email and address.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <a
                        type="button"
                        href="./booking"
                        className="block rounded-md bg-cyan-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                        <CalendarIcon className="size-5 float-left mr-2" />
                        Book a Reservation
                    </a>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-cyan-600 sm:pl-0"
                                    >
                                        Name/Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600"
                                    >
                                        Contact No.
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600"
                                    >
                                        Reference No.
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600"
                                    >
                                        Booking Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-cyan-600"
                                    >
                                        Date Submitted
                                    </th>
                                    <th
                                        scope="col"
                                        className="relative py-3.5 pr-4 pl-3 sm:pr-0"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {booking_infos?.data?.map((res) => (
                                    <tr key={res.email}>
                                        <td className="py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0">
                                            <div className="flex items-center">
                                                <div className="font-medium text-gray-900">
                                                    {res.fname ?? ""}{" "}
                                                    {res.mname ?? ""}{" "}
                                                    {res.lname ?? ""}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                                            <div className="text-gray-900">
                                                {res.mobile}
                                            </div>
                                        </td>
                                        <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                                            <div className="text-gray-900">
                                                {res.reference_id}
                                            </div>
                                        </td>
                                        <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                                            <div className="text-gray-900">
                                                {moment(res.start).format("LL")}{" "}
                                                - {moment(res.end).format("LL")}
                                            </div>
                                        </td>
                                        <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                                            <span
                                                className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset
        ${res?.status === 'paid' ? 'bg-green-200 text-green-700 ring-green-600/20' :
                                                        res?.status === 'pending' ? 'bg-yellow-50 text-yellow-700 ring-yellow-600/20' :
                                                            res?.status === 'partial' ? 'bg-orange-300 text-orange-700 ring-orange-600/20' :
                                                                res?.status === 'canceled' ? 'bg-red-200 text-red-700 ring-red-600/20' :
                                                                    'bg-yellow-50 text-yellow-700 ring-yellow-600/20'}`
                                                }
                                            >
                                                {/* <ExclamationCircleIcon className="size-4 mr-1" /> */}
                                                {res.status}
                                            </span>
                                        </td>
                                        <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                                            {moment(res.created_at).format(
                                                "LL"
                                            )}
                                        </td>
                                        <td className="relative py-5 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                                            <Link
                                                href={`/admin/reservation/${res.reference_id}`}
                                                className="text-cyan-600 hover:text-cyan-900"
                                            >
                                                Booking Details
                                                <span className="sr-only">
                                                    , {res.name}
                                                </span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="my-3 flex items-end justify-end">
                            <ReservationPaginationSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
