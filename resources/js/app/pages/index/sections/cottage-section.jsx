import React from "react";

const products = [
    {
        id: 1,
        name: "Umbrella Cottage 1",
        href: "#",
        price: "₱600",
        description:
            "Perfect for small groups. our Umbrella Cottages offer a cozy, shaded space just steps from the beach. Relax, unwind, and enjoy the ocean breeze in the perfect spot for your seaside escape",
        options: "Good for 4-5 Persons",
        imageSrc: "images/Umbrella Cottage (2pcs)/1.jpeg",
        imageAlt:
            "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 2,
        name: "Umbrella Cottage 2",
        href: "#",
        price: "₱600",
        description:
            "Perfect for small groups. our Umbrella Cottages offer a cozy, shaded space just steps from the beach. Relax, unwind, and enjoy the ocean breeze in the perfect spot for your seaside escape",
        options: "Good for 4-5 Persons",
        imageSrc: "images/Umbrella Cottage (2pcs)/2.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 3,
        name: "Pavillion Cottage",
        href: "#",
        price: "₱2500",
        description:
            "Ideal for large groups, our Pavilion can accommodate 15 to 20 guests, offering a spacious and open area perfect for gatherings, celebrations, or simply enjoying time together. Make memories by the beach",
        options: "Good for 15 - 20 Persons",
        imageSrc: "/images/Pavillion Cottage (1pc)/1.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 4,
        name: "Floating  Cottage",
        href: "#",
        price: "₱3500",
        description:
            "Experience the ocean like never before with our Floating Cottage, perfect for 15–20 guests. Relax and enjoy the gentle sway of the waves while creating unforgettable memories right on the water.",
        options: "Good for 15 - 20 Persons",
        imageSrc: "/images/Activities/Floating Cottage (1pc)/1.jpeg",
        imageAlt: "Front of plain black t-shirt.",
    },
    // More products...
];

export default function CottageSection() {
    return (
        <div className="bg-white">
            <div className="mx-8 max-w-full px-4 py-16 sm:px-6 sm:py-12 border-b border-gray-500">
                <div className="relative py-24 text-center border-b border-gray-300">
                    
                    {/* Background image with parallax effect and overlay */}
                    <div
                        className="absolute inset-0 bg-[url('/images/3.jpg')] bg-cover bg-center bg-fixed rounded-md opacity-80"
                        aria-hidden="true"
                    />
                    <div
                        className="absolute inset-0 bg-black/50 rounded-md"
                        aria-hidden="true"
                    />

                    {/* Foreground content */}
                    <div className="relative">
                        <h1 className="text-4xl font-bold tracking-tight text-white">
                            Ocean Breeze Cottages
                        </h1>
                        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-100">
                            Our cottages offer the perfect blend of simplicity
                            and serenity, nestled just steps away from the
                            shore. Whether you’re spending the day soaking in
                            the sun or enjoying the cool ocean breeze, these
                            cozy spaces provide the ideal spot to unwind and
                            connect with nature.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 border-t border-gray-300 pt-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative flex flex-col overflow-hidden rounded-lg border border-sky-600 bg-white shadow-lg"
                        >
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
                            />
                            <div className="flex flex-1 flex-col space-y-2 p-4">
                                <h3 className="text-xl font-medium text-gray-900">
                                    <a href={product.href}>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-500 text-justify">
                                    {product.description}
                                </p>
                                <div className="flex flex-1 flex-col justify-end">
                                    <p className="text-sm italic text-gray-500">
                                        {product.options}
                                    </p>
                                    <p className="text-base font-medium mt-3 text-red-900">
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
