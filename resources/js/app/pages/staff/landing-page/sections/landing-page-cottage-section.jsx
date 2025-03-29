import React from "react";

export default function LandingPageCottageSection() {
    return (
        <div className="w-full mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-12 lg:px-20">
            {/* Left Column (Hero Content) */}
            <div className="flex flex-col justify-center items-center text-center md:text-left">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-600">
                        Cottage Section
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        A Cottage Section highlights cozy cottages with
                        captivating images, descriptions, and essential details,
                        enticing visitors to book or learn more.
                    </p>
                </div>
            </div>

            {/* Right Column (Textarea + Button) */}
            <div className="flex flex-col justify-center">
                <label
                    htmlFor="cottage_title"
                    className="block text-sm font-medium text-cyan-600"
                >
                    Cottage Section Title
                </label>
                <input
                    id="cottage_title"
                    name="cottage_title"
                    className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-base text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:text-gray-500 mb-5 resize-none"
                    value="Our Blissful Rooms"
                />
                <label
                    htmlFor="cottage_content"
                    className="block text-sm font-medium text-cyan-600"
                >
                    Cottage Section Content
                </label>
                <textarea
                    id="cottage_content"
                    name="cottage_content"
                    className="mt-2 w-full min-h-[300px] rounded-md bg-white/5 px-3 py-2 text-base text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:text-gray-500 resize-none"
                    value="Whether you're seeking a cozy retreat or a spacious escape for the whole family, our rooms are designed to provide comfort, convenience, and a touch of seaside charm. Relax, unwind, and make memories by the ocean—your perfect getaway starts here"
                />
                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        className="rounded-md bg-cyan-700 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
