"use client";

import { useState } from "react";

import AdminLayout from "../layout";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function TermsAndConditionPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <AdminLayout>
                <div className="w-full">
                    <main>
                        <h1 className="sr-only">Account Settings</h1>

                        {/* Settings forms */}
                        <div className="divide-y divide-white/5">
                            <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                                <div>
                                    <h2 className="text-base/7 font-semibold text-gray-500">
                                        Terms & Condition
                                    </h2>
                                    <p className="mt-1 text-sm/6 text-gray-400">
                                        A resort's Terms and Conditions outline
                                        the rules and policies that guests must
                                        follow during their stay. These
                                        guidelines help ensure a smooth
                                        experience for both the guests and the
                                        resort management.
                                    </p>
                                    <p className="mt-2 text-sm/6 text-gray-400">
                                        Typical sections include:
                                    </p>
                                    <ul className="list-disc list-inside text-sm text-gray-400">
                                        <li>
                                            <strong>
                                                Booking & Cancellation Policies
                                            </strong>{" "}
                                            – Rules for reservations, payments,
                                            and refunds.
                                        </li>
                                        <li>
                                            <strong>
                                                Check-in & Check-out Times
                                            </strong>{" "}
                                            – Specifies arrival and departure
                                            times.
                                        </li>
                                        <li>
                                            <strong>
                                                Guest Responsibilities
                                            </strong>{" "}
                                            – Expected behavior, noise policies,
                                            and damage liability.
                                        </li>
                                        <li>
                                            <strong>
                                                Resort Facilities & Services
                                            </strong>{" "}
                                            – Guidelines for using amenities
                                            like pools, spas, and restaurants.
                                        </li>
                                        <li>
                                            <strong>Liability & Safety</strong>{" "}
                                            – Disclaimers for accidents, lost
                                            items, or emergency protocols.
                                        </li>
                                    </ul>
                                    <p className="mt-2 text-sm/6 text-gray-400">
                                        By agreeing to these terms, guests
                                        acknowledge their responsibilities and
                                        the resort’s policies, ensuring a
                                        hassle-free and enjoyable stay.
                                    </p>
                                </div>

                                <form className="md:col-span-2">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-full sm:grid-cols-6">
                                        <div className="sm:col-span-full">
                                            <label
                                                htmlFor="first-name"
                                                className="block text-sm/6 font-medium text-gray-500"
                                            >
                                                Terms & Condition Content
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="first-name"
                                                    name="first-name"
                                                    type="text"
                                                    value="
                                                    Blue Waves Resort Terms and Conditions

Welcome to Blue Waves Resort! To ensure a pleasant and hassle-free stay, we kindly ask all guests to review and adhere to our Terms and Conditions.

1. Booking & Cancellation Policies
A valid government-issued ID and full payment are required to confirm your booking.
Cancellations made 7 days or more before check-in will receive a full refund.
Cancellations made within 3-6 days before check-in will incur a 50% charge.
Cancellations made within 48 hours of check-in or no-shows are non-refundable.
Date changes are subject to availability and may incur additional charges.

2. Check-in & Check-out Times
Check-in time: 2:00 PM onwards. Early check-in is subject to availability.
Check-out time: 12:00 PM. Late check-out beyond 1 hour may incur additional charges.
Guests must return keycards at check-out to avoid a replacement fee.

3. Guest Responsibilities
Guests must comply with all resort rules and regulations.
Noise levels should be kept at a minimum, especially after 10:00 PM.
Guests are responsible for any damage to resort property and may be charged accordingly.
Smoking is only permitted in designated areas. A cleaning fee applies for smoking inside rooms.

4. Resort Facilities & Services
Swimming pools, fitness centers, and other amenities are available during operating hours.
Proper swimwear is required in pool areas.
Outside food and beverages may not be allowed in certain areas of the resort.
Guests must follow safety instructions when using resort facilities.

5. Liability & Safety
The resort is not liable for lost, stolen, or damaged personal belongings. Guests are advised to use in-room safes.
The resort is not responsible for injuries due to misuse of facilities or failure to follow safety rules.
In case of emergencies, please contact the front desk or resort security immediately.

6. General Policies
The resort reserves the right to refuse service to any guest who violates these terms.
Any disputes arising from the stay will be handled according to local laws.
By confirming your booking and staying at Blue Waves Resort, you agree to abide by these Terms and Conditions.

                                                    "
                                                    autoComplete="given-name"
                                                    className="block w-full h-full min-h-[400px] rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6 resize-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex float-right">
                                        <button
                                            type="submit"
                                            className="rounded-md bg-cyan-700 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </AdminLayout>
        </>
    );
}
