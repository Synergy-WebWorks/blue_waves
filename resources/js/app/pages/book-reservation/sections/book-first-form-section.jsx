import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import BookingGuestComponent from "../components/booking-guest-component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import BookingCartComponent from "../components/booking-cart-component";
import { router } from "@inertiajs/react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "@/app/redux/app-slice";
import ViewRentImageSection from "../../index/sections/view-rent-image-section";


export default function BookFirstFormSection() {
    const NEXT_MONTH = new Date();
    NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);
    const { rents } = useSelector((store) => store.rent);
    const { selected } = useSelector((store) => store.app);

    const params = new URLSearchParams(window.location.search);
    const adults = params.get("adults");
    const children = params.get("children");
    console.log('rentsrents', rents)
    const products = rents.result?.filter((res) => res.type === "cottage") || [];
    const rooms = rents.result?.filter((res) => res.type === "room") || [];
    const dispatch = useDispatch();
    const [person, setPerson] = useState({
        adults: 1,
        children: 0,
    });

    useEffect(() => {
        setPerson({
            adults: adults,
            children: children,
        });
    }, []);

    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: null,
    });

    const start = params.get("start");
    const end = params.get("end");

    useEffect(() => {
        setDateRange({
            startDate: start,
            endDate: end,
        });
    }, []);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [imageIndexes, setImageIndexes] = useState(
        products.map(() => 0) // Track image index per product
    );

    const [imageIndexes2, setImageIndexes2] = useState(
        rooms.map(() => 0) // Track image index per product
    );

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
            `/book-reservation?start=${dateRange.startDate}&end=${dateRange.endDate}&adults=${person.adults}&children=${person.children}`
        );
    }
    function add_to_cart(value) {
        // Dispatching item to cart logic
        const updatedSelected = [...selected, value];
        const uniqueData = Array.from(
            new Map(updatedSelected.map((item) => [item.id, item])).values()
        );
        dispatch(setSelected(uniqueData));

        // Set button as permanently clicked
        setClickedButtons((prevState) => ({
            ...prevState,
            [value.id]: true, // Mark this button as clicked
        }));
    }

    const [clickedButtons, setClickedButtons] = useState({});
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
                                                value={dateRange}
                                                onChange={(newValue) =>
                                                    setDateRange({
                                                        ...dateRange,
                                                        startDate: moment(
                                                            newValue.startDate
                                                        ).format("LL"),
                                                        endDate: moment(
                                                            newValue.endDate
                                                        ).format("LL"),
                                                    })
                                                }
                                                minDate={today}
                                                separator="to"
                                                displayFormat="MM/DD/YYYY"
                                                popoverDirection="down"
                                                showShortcuts={false}
                                                useRange={false}
                                                className="w-full sm:w-1/2 overflow-y-auto"
                                            />
                                            <BookingGuestComponent
                                                setPerson={setPerson}
                                                person={person}
                                            />
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
                                            <ViewRentImageSection data={product} />

                                            {/* Room Info */}
                                            <div className="flex flex-1 flex-col space-y-2 p-4">
                                                <h3 className="text-sm font-medium text-gray-900">
                                                    <a href={product.href}>
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                <p className="text-sm italic font-bold text-gray-500">
                                                    {product.options}
                                                </p>
                                                <p className="text-sm text-gray-500 text-justify">
                                                    {product.description}
                                                </p>
                                                <div className="flex flex-1 flex-col justify-end">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-base font-medium text-cyan-800">
                                                            {parseFloat(product.rate).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                                                        </p>
                                                        <button
                                                            onClick={() => add_to_cart(product)}
                                                            disabled={clickedButtons[product.id]} // Disable button after click
                                                            className={`ml-4 px-2 py-1 rounded-md text-white transition-colors duration-300 ${clickedButtons[product.id]
                                                                ? "bg-gray-500 cursor-not-allowed" // Stay gray after clicking
                                                                : "bg-orange-500 hover:bg-orange-600"
                                                                }`}
                                                        >
                                                            {clickedButtons[product.id]
                                                                ? "Added to your Booking"
                                                                : "Add to Booking"}
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
                                        <ViewRentImageSection data={cottage} />

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
                                                        {parseFloat(cottage.rate).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                                                    </p>
                                                    <button
                                                        onClick={() => add_to_cart(cottage)}
                                                        disabled={clickedButtons[cottage.id]} // Disable button after click
                                                        className={`ml-4 px-2 py-1 rounded-md text-white transition-colors duration-300 ${clickedButtons[cottage.id]
                                                            ? "bg-gray-500 cursor-not-allowed" // Stay gray after clicking
                                                            : "bg-orange-500 hover:bg-orange-600"
                                                            }`}
                                                    >
                                                        {clickedButtons[cottage.id]
                                                            ? "Added to your Booking"
                                                            : "Add to Booking"}
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
