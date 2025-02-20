import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export default function CottageSection() {
    const { rents } = useSelector((store) => store.rent);

    const products = rents?.filter((res) => res.type === "cottage") || [];

    const [imageIndexes, setImageIndexes] = useState([]);

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
    return (
        <div className="bg-white">
            <div className="mx-8 max-w-full px-4 py-16 sm:px-6 sm:py-12 border-b border-gray-300">
                <div className="relative py-24 text-center border-b border-gray-300">
                    <div
                        className="absolute inset-0 bg-[url('/images/overlay2.jpeg')] bg-cover bg-center bg-fixed rounded-md opacity-80"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-md" aria-hidden="true" />
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
                    {products.map((product, index) => (
                        <div
                            key={product.cottage_id}
                            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
                        >
                            {/* Image container with navigation */}
                            <div className="relative">
                                <img
                                    alt={product.name}
                                 src={product.uploads[imageIndexes[index]]?.file ?? '/'}
                                    className="aspect-[3/4] w-full bg-gray-200 object-cover sm:aspect-auto sm:h-96"
                                />
                                {/* Previous button */}
                                <button
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                    onClick={() => handlePrev(index)}
                                >
                                    <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                                </button>
                                {/* Next button */}
                                <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-200 opacity-80"
                                    onClick={() => handleNext(index)}
                                >
                                    <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                                </button>
                            </div>

                            {/* Room Info */}
                            <div className="flex flex-1 flex-col space-y-2 p-4">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href={product.href}>{product.name}</a>
                                </h3>
                                <p className="text-sm text-gray-500 text-justify">
                                    {product.description}
                                </p>
                                <div className="flex flex-1 flex-col justify-end">
                                    <p className="text-sm italic text-gray-500">
                                        {product.options}
                                    </p>
                                    <p className="text-base font-medium text-gray-900">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
