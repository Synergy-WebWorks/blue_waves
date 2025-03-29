import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import BookingGuestComponent from "../components/booking-guest-component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { router } from "@inertiajs/react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer, setSearch, setSelected } from "@/app/redux/app-slice";
import BookingCartComponent from "@/app/pages/book-reservation/components/booking-cart-component";

export default function FirstFormSection() {
    const NEXT_MONTH = new Date();
    NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);
    const { rents } = useSelector((store) => store.rent);
    const { selected, search, customer } = useSelector((store) => store.app);

    const params = new URLSearchParams(window.location.search);

    const products = rents?.result?.filter((res) => res.type === "cottage") || [];
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
            `/admin/booking?start=${search.start}&end=${search.end}&adults=${search.adults}&children=${search.children}`
        );
    }
    console.log("selected", selected);
    function add_to_cart(value) {
        const updatedSelected = [...selected, value];
        const uniqueData = Array.from(
            new Map(updatedSelected.map((item) => [item.id, item])).values()
        );
        dispatch(setSelected(uniqueData));
    }

    return (

        <div className="bg-gray-50">
            <div className="mx-auto px-4 pt-16 pb-24 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-1 lg:gap-x-12 xl:gap-x-16">
                    <div>
                        <div className="mt-2 pt-1 pb-5">
                            <div className="sticky top-0 z-10 bg-gray-50 pt-5 pb-5 px-5 py-5 border-b border-gray-300">
                                <h2 className="text-lg font-medium text-cyan-600">
                                    Booking Details
                                </h2>

                                {/* Sticky Booking Section */}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* First Column - Datepicker & Booking Guest Component */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col sm:flex-row sm:gap-4">
                                            <Datepicker
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
                                                className="w-full sm:w-1/2 overflow-y-auto"
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
                                    <div className="flex justify-end items-end self-end">
                                        <BookingCartComponent />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-8 mt-6 p-3">
                                {products.map((product, index) => {
                                    return (
                                        <div
                                            key={product.room_id}
                                            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
                                        >
                                            {/* Image container with navigation */}
                                            <div className="relative">
                                                <img
                                                    alt={product.name}
                                                    src={
                                                        product.uploads[
                                                            imageIndexes[index]
                                                        ]?.file ?? "/"
                                                    }
                                                    className="aspect-[3/4] w-full bg-gray-200 object-cover sm:aspect-auto sm:h-96"
                                                />
                                                {/* Previous button */}
                                                <button
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                                    onClick={() =>
                                                        handlePrev(index)
                                                    }
                                                >
                                                    <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                                                </button>
                                                {/* Next button */}
                                                <button
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                                    onClick={() =>
                                                        handleNext(index)
                                                    }
                                                >
                                                    <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                                                </button>
                                            </div>

                                            {/* Room Info */}
                                            <div className="flex flex-1 flex-col space-y-2 p-4">
                                                <h3 className="text-sm font-medium text-gray-900">
                                                    <a href={product.href}>
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                 <p className="text-sm italic font-bold text-gray-500">
                                                  Price:  {parseInt(product.rate).toFixed(2)}
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
                                                            className="ml-4 bg-orange-500 text-white hover:bg-orange-600 px-2 py-1 rounded-md"
                                                        >
                                                            Add to Booking
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
                                            <img
                                                alt={cottage.name}
                                                src={
                                                    cottage.uploads[
                                                        imageIndexes[index2]
                                                    ]?.file ?? "/"
                                                }
                                                className="aspect-[3/4] w-full bg-gray-200 object-cover sm:aspect-auto sm:h-96"
                                            />
                                            {/* Previous button */}
                                            <button
                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                                onClick={() =>
                                                    handlePrev2(index2)
                                                }
                                            >
                                                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                                            </button>
                                            {/* Next button */}
                                            <button
                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                                onClick={() =>
                                                    handleNext2(index2)
                                                }
                                            >
                                                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                                            </button>
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
                                                        className="ml-4 bg-orange-500 text-white hover:bg-orange-600 px-2 py-1 rounded-md"
                                                    >
                                                        Add to Booking
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
