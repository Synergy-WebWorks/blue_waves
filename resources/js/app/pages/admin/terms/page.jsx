import React from "react";
import AdminLayout from "../layout";

export default function TermsAndConditionPage() {
    return (
        <AdminLayout>
            <div className="mt-4 p-4 border rounded-lg shadow-lg">
                <div className="w-full mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-12 lg:px-20">
                    {/* Left Column (Hero Content) */}
                    <div className="flex flex-col justify-center items-center text-center md:text-left">
                        <div>
                            <h2 className="text-4xl font-bold text-cyan-600">
                                Terms & Condition Section
                            </h2>
                            <p className="mt-4 text-lg text-gray-400">
                                A resort's Terms and Conditions outline the
                                rules and policies that guests must follow
                                during their stay. These guidelines help ensure
                                a smooth experience for both the guests and the
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
                                    – Rules for reservations, payments, and
                                    refunds.
                                </li>
                                <li>
                                    <strong>Check-in & Check-out Times</strong>{" "}
                                    – Specifies arrival and departure times.
                                </li>
                                <li>
                                    <strong>Guest Responsibilities</strong> –
                                    Expected behavior, noise policies, and
                                    damage liability.
                                </li>
                                <li>
                                    <strong>
                                        Resort Facilities & Services
                                    </strong>{" "}
                                    – Guidelines for using amenities like pools,
                                    spas, and restaurants.
                                </li>
                                <li>
                                    <strong>Liability & Safety</strong> –
                                    Disclaimers for accidents, lost items, or
                                    emergency protocols.
                                </li>
                            </ul>
                            <p className="mt-2 text-sm/6 text-gray-400">
                                By agreeing to these terms, guests acknowledge
                                their responsibilities and the resort’s
                                policies, ensuring a hassle-free and enjoyable
                                stay.
                            </p>
                        </div>
                    </div>

                    {/* Right Column (Textarea + Button) */}
                    <div className="flex flex-col justify-center">
                        <label
                            htmlFor="contact_content"
                            className="block text-sm font-medium text-cyan-600"
                        >
                            Terms & Condition Content
                        </label>
                        <textarea
                            id="contact_content"
                            name="contact_content"
                            className="mt-2 w-full min-h-[300px] rounded-md bg-white/5 px-3 py-2 text-base text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:text-gray-500 resize-none"
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
            </div>
        </AdminLayout>
    );
}
