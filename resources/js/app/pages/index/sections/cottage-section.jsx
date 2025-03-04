import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import ViewRentImageSection from "./view-rent-image-section";

export default function CottageSection() {
    const { rents } = useSelector((store) => store.rent);

    return (
        <div className="bg-white">
            <div className="mx-8 max-w-full px-4 py-16 sm:px-6 sm:py-12 border-b border-gray-300">
                <div className="relative py-24 text-center border-b border-gray-300">
                    <div
                        className="absolute inset-0 bg-[url('/images/overlay3.jpg')] bg-cover bg-center bg-fixed rounded-md opacity-80"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-md" aria-hidden="true" />
                    <div className="relative">
                        <h1 className="text-4xl font-bold tracking-tight text-white">
                            Our Vibrant Cottages
                        </h1>
                        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-100">
                            Whether you're looking for a cozy hideaway or a spacious retreat for the whole family, our cottages are designed to offer comfort, convenience, and a touch of rustic charm. Relax, unwind, and create lasting memories in your own private sanctuary—your perfect getaway begins here.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 border-t border-gray-300 pt-6">
                    {rents?.result?.map((rent, index) => {
                        if (rent.type === "cottage") {
                            return (
                                <div
                                    key={rent.cottage_id}
                                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
                                >
                                    {/* Image container with navigation */}
                                    <ViewRentImageSection data={rent} />
                                    {/* Room Info */}
                                    <div className="flex flex-1 flex-col space-y-2 p-4">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            <a href={rent.href}>{rent.name}</a>
                                        </h3>
                                        <p className="text-sm text-gray-500 text-justify">
                                            {rent.description}
                                        </p>
                                        <div className="flex flex-1 flex-col justify-end">
                                            <p className="text-sm italic text-gray-500">
                                                {rent.options}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {rent.price}
                                            </p>
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
