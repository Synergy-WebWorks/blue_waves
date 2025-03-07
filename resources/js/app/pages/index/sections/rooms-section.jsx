import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import ViewRentImageSection from "./view-rent-image-section";

export default function RoomSection() {
    const { rents } = useSelector((state) => state.rent)

    return (
        <div className="bg-white">
            <div className="mx-8 max-w-full px-4 py-16 sm:px-6 sm:py-12 border-b border-gray-300">
                <div className="relative py-24 text-center border-b border-gray-300">
                    <div
                        className="absolute inset-0 bg-[url('/images/overlay2.jpeg')] bg-cover bg-center bg-fixed rounded-md opacity-80"
                        aria-hidden="true"
                    />
                    <div
                        className="absolute inset-0 bg-black/50 rounded-md"
                        aria-hidden="true"
                    />
                    <div className="relative">
                        <h1 className="text-4xl font-bold tracking-tight text-white">
                            Our Blissful Rooms
                        </h1>
                        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-100">
                            Whether you're seeking a cozy retreat or a spacious
                            escape for the whole family, our rooms are designed
                            to provide comfort, convenience, and a touch of
                            seaside charm. Relax, unwind, and make memories by
                            the ocean—your perfect getaway starts here.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 border-t border-gray-300 pt-6">
                    {rents?.result?.map((rent, index) => {
                        if (rent.type === "room") {
                            return (
                                <div
                                    key={index}
                                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
                                >
                                    {/* Image container with navigation */}
                                    <ViewRentImageSection data={rent} />

                                    {/* Room Info */}
                                    <div className="flex flex-1 flex-col space-y-2 p-4">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            <a href={rent.href}>
                                                {rent.name}
                                            </a>
                                        </h3>
                                        <p className="text-sm text-gray-500 text-justify">
                                            {rent.description}
                                        </p>
                                        <div className="flex">
                                            <div className="flex flex-1 flex-col justify-end">
                                                <p className="text-sm italic text-gray-500">
                                                    {rent.options}
                                                </p>
                                                <p className="text-base font-medium text-gray-900">
                                                    {rent.price}
                                                </p>
                                            </div>

                                        </div>
                                        <div className="flex flex-row items-start justify-between">
                                            <div> ₱ {parseInt(rent.rate).toFixed(2)}</div>
                                            {rent?.status === "Vacant" && (
                                                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                                                    <svg
                                                        viewBox="0 0 6 6"
                                                        aria-hidden="true"
                                                        className="size-1.5 fill-green-500"
                                                    >
                                                        <circle
                                                            r={3}
                                                            cx={3}
                                                            cy={3}
                                                        />
                                                    </svg>
                                                    Vacant
                                                </span>
                                            )}
                                            {rent?.status === "Reserved" && (
                                                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                                                    <button
                                                        type="button"
                                                        className="group relative -mr-1 size-3.5 rounded-xs hover:bg-red-600/20"
                                                    >
                                                        <span className="sr-only">
                                                            Remove
                                                        </span>
                                                        <svg
                                                            viewBox="0 0 14 14"
                                                            className="size-3.5 stroke-red-700/50 group-hover:stroke-red-700/75"
                                                        >
                                                            <path d="M4 4l6 6m0-6l-6 6" />
                                                        </svg>
                                                        <span className="absolute -inset-1" />
                                                    </button>
                                                    Reserved
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}
