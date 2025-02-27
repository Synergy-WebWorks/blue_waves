import { setCustomer, setSelected } from "@/app/redux/app-slice";
import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ContactInformation() {
    const { selected, customer, search } = useSelector((store) => store.app);
    const { booking_info } = useSelector((store) => store.booking_info);
    const dispatch = useDispatch();

    function getDayGap(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const difference = (end - start) / (1000 * 60 * 60 * 24);
        return difference == 0 ? 1 : difference;
    }
    const gap = getDayGap(search.start, search.end);
    useEffect(() => {
        dispatch(
            setCustomer({
                ...booking_info,
                children: 0,
                adults: 0,
            })
        );
    }, [booking_info?.id ?? ""]);

    function remove_cart(value) {
        const idToRemove = value.id;
        const updatedData = selected.filter((item) => item.id !== idToRemove);
        dispatch(setSelected(updatedData));
    }
    const rent_total =
        selected.reduce((sum, item) => sum + Number(item.rate), 0) * gap;
    return (
        <div>
            <div>
                <h2 className="text-lg font-medium text-cyan-600  p-5">
                    Additional Booking
                </h2>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Rent Cottages/Rooms
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {selected.map((res, i) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {res.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            ₱ {parseInt(res.rate)} x {gap}days
                                        </td>
                                        <td className="px-6 py-4">
                                            ₱ {(res.rate * gap).toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => remove_cart(res)}
                                            >
                                                <TrashIcon className="h-6 text-red-600" />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                               <tr className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <td scope="col" className="px-6 py-3">
                                    Adults
                                </td>
                                <td scope="col" className="px-6 py-3">
                                    ₱{parseInt(customer.adults).toFixed(2)}
                                </td>
                            </tr>
                            <tr className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <td scope="col" className="px-6 py-3">
                                    Children
                                </td>
                                <td scope="col" className="px-6 py-3">
                                    ₱{parseInt(customer.children).toFixed(2)}
                                </td>
                            </tr>
                         
                            <tr className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <td scope="col" className="px-6 py-3">
                                    Overall Total
                                </td>
                                <td scope="col" className="px-6 py-3">
                                    ₱{" "}
                                    {(
                                        parseInt(customer.children) +
                                        parseInt(customer.adults) +
                                        rent_total
                                    ).toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 className="text-lg font-medium text-cyan-600  p-5">
                    Contact information
                </h2>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Personal Information
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Fullname
                                </th>
                                <td className="px-6 py-4">
                                    {customer.fname ?? ""}{" "}
                                    {customer.mname ?? ""}{" "}
                                    {customer.lname ?? ""}
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Email
                                </th>
                                <td className="px-6 py-4">
                                    {customer.email ?? ""}
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Phone
                                </th>
                                <td className="px-6 py-4">
                                    {customer.mobile ?? ""}
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Address
                                </th>
                                <td className="px-6 py-4">
                                    {customer.address ?? ""}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
