import React from "react";

export default function LandingPageHeroSection() {
    return (
        <div className="w-full mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-12 lg:px-20">
            {/* Left Column (Hero Content) */}
            <div className="flex flex-col justify-center items-center text-center md:text-left">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-600">
                        Hero Section
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        A Hero Section is the visually striking,
                        attention-grabbing first section of a webpage that
                        conveys the main message and includes a compelling
                        call-to-action (CTA).
                    </p>
                </div>
            </div>

            {/* Right Column (Textarea + Button) */}
            <div className="flex flex-col justify-center">
                <label
                    htmlFor="hero_title"
                    className="block text-sm font-medium text-cyan-600"
                >
                    Hero Section Title
                </label>
                <input
                    id="hero_title"
                    name="hero_title"
                    className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-base text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:text-gray-500 mb-5 resize-none"
                    value="Your Oceanfront Getaway Awaits"
                />
                <label
                    htmlFor="hero-content"
                    className="block text-sm font-medium text-cyan-600"
                >
                    Hero Section Content
                </label>
                <textarea
                    id="hero-content"
                    name="hero-content"
                    className="mt-2 w-full min-h-[300px] rounded-md bg-white/5 px-3 py-2 text-base text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:text-gray-500 resize-none"
                    value="Leave the world behind and discover a sanctuary by the sea. From tranquil mornings on the beach to vibrant evenings under the stars, our resort is your gateway to unforgettable moments, where the ocean becomes your haven and time slows down."
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
