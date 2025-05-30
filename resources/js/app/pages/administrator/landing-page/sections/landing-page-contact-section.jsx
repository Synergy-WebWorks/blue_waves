import React from "react";

export default function LandingPageContactSection() {
    return (
        <div className="w-full mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-12 lg:px-20">
            {/* Left Column (Hero Content) */}
            <div className="flex flex-col justify-center items-center text-center md:text-left">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-600">
                        Contact Section
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        A Contact Section provides essential contact
                        information, including a form, phone number, email, and
                        location, making it easy for visitors to get in touch or
                        inquire further.
                    </p>
                </div>
            </div>

            {/* Right Column (Textarea + Button) */}
            <div className="flex flex-col justify-center">
                <label
                    htmlFor="contact_title"
                    className="block text-sm font-medium text-cyan-600"
                >
                    Contact Section Title
                </label>
                <input
                    id="contact_title"
                    name="contact_title"
                    className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-base text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:text-gray-500 mb-5 resize-none"
                    value="Get in touch"
                />
                <label
                    htmlFor="contact_content"
                    className="block text-sm font-medium text-cyan-600"
                >
                    Contact Section Content
                </label>
                <textarea
                    id="contact_content"
                    name="contact_content"
                    className="mt-2 w-full min-h-[300px] rounded-md bg-white/5 px-3 py-2 text-base text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:text-gray-500 resize-none"
                    value="We’d love to hear from you! Whether you’re planning your next getaway, have a question about our services, or need assistance, our team is here to help. Reach out to us, and let’s make your stay unforgettable. Feel free to contact us through the form below, or give us a call. We look forward to welcoming you soon!"
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
