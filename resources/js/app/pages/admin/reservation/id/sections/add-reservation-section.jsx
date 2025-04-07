import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { router } from "@inertiajs/react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer, setSearch, setSelected } from "@/app/redux/app-slice";
import BookingCartComponent from "@/app/pages/book-reservation/components/booking-cart-component";
import BookingGuestComponent from "../../../booking/components/booking-guest-component";
import AddOrderSection from "./add-order-section";
import ViewRentImageSection from "@/app/pages/index/sections/view-rent-image-section";

export default function AddReservationSection() {
    const NEXT_MONTH = new Date();
    NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);
    const { rents } = useSelector((store) => store.rent);
    const { selected, search, customer } = useSelector((store) => store.app);
    const { activities } = useSelector((state) => state.activities);

    const booking_info = window.location.pathname.split("/")[3];
    const params = new URLSearchParams(window.location.search);
    const [quantities, setQuantities] = useState(() => {
        return (
            activities?.result?.reduce((acc, res) => {
                acc[res.id] = res.quantity ?? 0; // Default quantity to 0
                return acc;
            }, {}) || {}
        ); // Ensure an empty object if activities.result is undefined
    });
    console.log("quantities", quantities);
    const products =
        rents?.result?.filter((res) => res.type === "cottage") || [];
    const rooms = rents?.result?.filter((res) => res.type === "room") || [];
    const dispatch = useDispatch();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [imageIndexes, setImageIndexes] = useState(products.map(() => 0));

    const [imageIndexes2, setImageIndexes2] = useState(rooms.map(() => 0));

    useEffect(() => {
        if (products) {
            setImageIndexes(new Array(products.length).fill(0));
        }
    }, [products.length]);

    const handleNext = (index) => {
        setImageIndexes((prevIndexes) =>
            prevIndexes.map((imgIndex, i) =>
                i === index
                    ? (imgIndex + 1) % products[i].uploads.length
                    : imgIndex
            )
        );
    };

    const handlePrev = (index) => {
        setImageIndexes((prevIndexes) =>
            prevIndexes.map((imgIndex, i) =>
                i === index
                    ? (imgIndex - 1 + products[i].uploads.length) %
                    products[i].uploads.length
                    : imgIndex
            )
        );
    };

    const handleNext2 = (index2) => {
        setImageIndexes2((prevIndexes2) =>
            prevIndexes2.map((imgIndex2, i) =>
                i === index2
                    ? (imgIndex2 + 1) % rooms[i].images.length
                    : imgIndex2
            )
        );
    };

    const handlePrev2 = (index2) => {
        setImageIndexes2((prevIndexes2) =>
            prevIndexes2.map((imgIndex2, i) =>
                i === index2
                    ? (imgIndex2 - 1 + rooms[i].images.length) %
                    rooms[i].images.length
                    : imgIndex2
            )
        );
    };
    function search_rent_vacant() {
        router.visit(
            `/admin/reservation/${booking_info}?start=${search?.start}&end=${search?.end}&adults=${search?.adults}&children=${search?.children}`
        );
    }
    console.log("quantities", quantities);
    function add_to_cart(value) {
        const updatedSelected = [...selected, value];
        const uniqueData = Array.from(
            new Map(updatedSelected.map((item) => [item.id, item])).values()
        );
        dispatch(setSelected(uniqueData));
    }

    const handleIncrement = (res) => {
        setQuantities((prev) => ({
            ...prev,
            [res.id]: {
                ...res,
                quantity: (prev[res.id]?.quantity ?? 0) + 1, // Ensure default quantity is 0 before incrementing
            },
        }));
    };

    const handleDecrement = (res) => {
        setQuantities((prev) => ({
            ...prev,
            [res.id]: {
                ...res,
                quantity: Math.max((prev[res.id]?.quantity ?? 0) - 1, 0),
            },
        }));
    };

    return (
        <div className="bg-gray-50">
            <div className="mx-auto mb-8">
                <div className="lg:grid lg:grid-cols-1 lg:gap-x-12 xl:gap-x-16">
                    <div>
                        <div className="mt-2 pt-1 pb-5">
                            <div className=" bg-gray-50 pt-5 pb-5 px-5 py-5 border-b border-gray-600">
                                <h2 className="text-lg font-medium text-cyan-600">
                                    Booking Details
                                </h2>
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                            >
                                                Activity Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Rate/Hour
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {activities?.result?.map((res) => (
                                            <tr key={res.id}>
                                                <td className="px-3 py-3.5 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                                    {res.name}
                                                </td>
                                                <td className="px-3 py-3.5 text-sm whitespace-nowrap text-gray-500">
                                                    {parseFloat(
                                                        res.rate
                                                    ).toFixed(2)}
                                                </td>
                                                <td className="px-3 py-3.5 text-sm whitespace-nowrap text-gray-500">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() =>
                                                                handleDecrement(
                                                                    res
                                                                )
                                                            }
                                                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            value={
                                                                quantities?.[
                                                                    res.id
                                                                ]?.quantity ?? 0
                                                            }
                                                            readOnly
                                                            className="w-20 text-center border border-gray-300 rounded"
                                                        />

                                                        <button
                                                            onClick={() =>
                                                                handleIncrement(
                                                                    res
                                                                )
                                                            }
                                                            className="px-3 py-1 bg-teal-600 text-white rounded"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* Sticky Booking Section */}

                                <div>
                                    {/* First Column - Datepicker & Booking Guest Component */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex w-full flex-col sm:flex-row sm:gap-4">
                                            <Datepicker
                                                className="w-full"
                                                primaryColor={"teal"}
                                                value={{
                                                    startDate: search.start,
                                                    endDate: search.end,
                                                }}
                                                onChange={(newValue) =>
                                                    dispatch(
                                                        setSearch({
                                                            ...search,
                                                            start: moment(
                                                                newValue.startDate
                                                            ).format("LL"),
                                                            end: moment(
                                                                newValue.endDate
                                                            ).format("LL"),
                                                        })
                                                    )
                                                }
                                                minDate={today}
                                                separator="to"
                                                displayFormat="MM/DD/YYYY"
                                                popoverDirection="down"
                                                showShortcuts={false}
                                                useRange={false}
                                            />
                                            <BookingGuestComponent />
                                        </div>

                                        {/* Search Button */}
                                        <button
                                            onClick={search_rent_vacant}
                                            className="w-full px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition"
                                        >
                                            Search
                                        </button>
                                    </div>

                                    {/* Second Column - My Cart Button */}
                                    <div className="flex mt-5 justify-between items-center self-end">
                                        <AddOrderSection quantities={quantities} />
                                        <BookingCartComponent />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-2 lg:gap-x-8 mt-6 p-3 
                max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 border-b border-gray-600">
                                {products.map((product, index) => {
                                    return (
                                        <div
                                            key={product.room_id}
                                            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
                                        >
                                            {/* Image container with navigation */}
                                            <div className="relative">
                                                <ViewRentImageSection data={product} />
                                            </div>

                                            {/* Room Info */}
                                            <div className="flex flex-1 flex-col space-y-2 p-4">
                                                <h3 className="text-sm font-medium text-gray-900">
                                                    <a href={product.href}>
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                <p className="text-sm italic font-bold text-gray-500">
                                                    Price:{" "}
                                                    {parseInt(
                                                        product.rate
                                                    ).toFixed(2)}
                                                </p>
                                                <p className="text-sm text-gray-500 text-justify">
                                                    {product.description}
                                                </p>
                                                <div className="flex flex-1 flex-col justify-end">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-base font-medium text-cyan-800">
                                                            {product.price}
                                                        </p>
                                                        <button
                                                            onClick={() =>
                                                                add_to_cart(
                                                                    product
                                                                )
                                                            }
                                                            className="ml-4 bg-teal-600 text-white hover:bg-teal-700 px-2 py-1 rounded-md"
                                                        >
                                                            BOOK NOW
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {rooms.map((cottage, index2) => (
                                    <div
                                        key={cottage.cottage_id}
                                        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
                                    >
                                        {/* Image container with navigation */}
                                        <div className="relative">
                                            <ViewRentImageSection data={cottage} />
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
                                                    <button
                                                        onClick={() =>
                                                            add_to_cart(cottage)
                                                        }
                                                        className="ml-4 bg-teal-600 text-white hover:bg-teal-700 px-2 py-1 rounded-md"
                                                    >
                                                        BOOK NOW
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
