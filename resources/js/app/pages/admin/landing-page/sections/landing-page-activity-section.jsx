import React from "react";

export default function LandingPageActivitySection() {
    return (
        <div className="w-full mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-12 lg:px-20">
            {/* Left Column (Hero Content) */}
            <div className="flex flex-col justify-center items-center text-center md:text-left">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-600">
                        Activity Section
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Activity Section showcases exciting activities with
                        engaging visuals and descriptions, encouraging visitors
                        to explore and participate.
                    </p>
                </div>
            </div>

            {/* Right Column (Textarea + Button) */}
            <div className="flex flex-col justify-center">
                <label
                    htmlFor="activity_title"
                    className="block text-sm font-medium text-cyan-600"
                >
                    Activity Section Title
                </label>
                <input
                    id="activity_title"
                    name="activity_title"
                    className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-base text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:text-gray-500 mb-5 resize-none"
                    value="Island Adventures"
                />
                <label
                    htmlFor="activity_content"
                    className="block text-sm font-medium text-cyan-600"
                >
                    Activity Section Content
                </label>
                <textarea
                    id="activity_content"
                    name="activity_content"
                    className="mt-2 w-full min-h-[300px] rounded-md bg-white/5 px-3 py-2 text-base text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:text-gray-500 resize-none"
                    value="At Blue Waves Resort, we offer an array of unforgettable activities that allow you to embrace the beauty of nature while creating lasting memories. Whether you're seeking relaxation or adventure, there's something for everyone to enjoy."
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
