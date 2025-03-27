import Wysiwyg from '@/app/pages/components/wysiwyg';
import WysiwygView from '@/app/pages/components/wysiwyg_view';
import React, { useState, useEffect } from 'react';

export default function TermsConditionSection({ data: initialData }) {
    const [data, setData] = useState(initialData || {});

    useEffect(() => {
        setData(initialData);
    }, [initialData]);

    return (
        <div className="w-full mt-5 mb-5 px-6 md:px-12 lg:px-20">
            <div>
                <h2 className="text-4xl font-bold text-cyan-600">
                    Terms & Condition Section
                </h2>
                {data?.content && (
                    <div
                        dangerouslySetInnerHTML={{ __html: data.content }}
                        className="mt-2 w-full max-h-[515px] min-h-[250px] overflow-auto border-none bg-white/5 px-3 py-2 text-base text-gray-600 prose prose-gray"
                    />
                )}

                {/* <WysiwygView
                    onChange={(value) => {
                        setData((prev) => ({
                            ...prev,
                            content: value,
                        }));
                    }}
                    value={data.content || ''}
                    name="emailContent"
                /> */}

                {/* <p className="mt-4 text-lg text-gray-400">
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
                        <strong>Guest Responsibilities</strong> – Expected behavior, noise policies, and damage liability.
                    </li>
                    <li>
                        <strong>
                            Resort Facilities & Services
                        </strong>{" "}
                        – Guidelines for using amenities like pools,
                        spas, and restaurants.
                    </li>
                    <li>
                        <strong>Liability & Safety</strong> – Disclaimers for accidents, lost items, or emergency protocols.
                    </li>
                </ul>
                <p className="mt-2 text-sm/6 text-gray-400">
                    By agreeing to these terms, guests acknowledge their responsibilities and the resort’s policies, ensuring a hassle-free and enjoyable stay.
                </p> */}
            </div>
        </div>
    );
}
