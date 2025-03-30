import React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import DOMPurify from 'dompurify';

export default function BookThirdFormSection({ setAccept }) {
    const { selected, customer, search } = useSelector((store) => store.app);
    const { term } = useSelector((state) => state.terms)

    function getDayGap(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const difference = (end - start) / (1000 * 60 * 60 * 24);
        return difference == 0 ? 1 : difference;
    }
    const gap = getDayGap(search.start, search.end);
    const totalRate =
        selected.reduce((sum, item) => sum + Number(item.rate), 0) * gap;



    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Checkout</h2>

                <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* Order summary */}
                    <div>
                        <h2 className="text-lg font-medium text-cyan-600">
                            Booking Order summary
                        </h2>

                        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-xs">
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul
                                role="list"
                                className="divide-y divide-gray-200"
                            >
                                {selected.map((order) => (
                                    <li
                                        key={order.id}
                                        className="flex px-4 py-6 sm:px-6"
                                    >
                                        <div className="shrink-0">
                                            <img
                                                alt={order.imageAlt}
                                                src={order?.uploads[0]?.file}
                                                className="w-20 rounded-md"
                                            />
                                        </div>

                                        <div className="ml-6 flex flex-1 flex-col">
                                            <div className="flex">
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-sm">
                                                        <a
                                                            href={order.href}
                                                            className="font-medium text-gray-700 hover:text-gray-800"
                                                        >
                                                            {order.name}
                                                        </a>
                                                    </h4>
                                                    <div className="flex gap-3 flex-col">
                                                        Min Capacity:
                                                        {order.min_capacity}
                                                    </div>
                                                    <div>
                                                        Max Capacity:
                                                        {order.max_capacity}
                                                    </div>
                                                    <div>
                                                        {order.description}
                                                    </div>
                                                </div>

                                                <div className="ml-4 flow-root shrink-0"></div>
                                            </div>

                                            <div className="flex flex-1 items-end justify-end pt-2">
                                                <p className="mt-1 text-sm font-medium text-gray-900">
                                                    ₱{" "}
                                                    {parseInt(
                                                        order.rate
                                                    ).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">
                                        {" "}
                                        Subtotal: {totalRate.toFixed(2) /
                                            gap} x {gap}
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱{totalRate.toFixed(2)}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between p-2 border-b border-gray-300">
                                    <dt className="text-sm">Entrance Fee</dt>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">
                                        {" "}
                                        Adults: 80 x {search.adults}
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱{customer.adults.toFixed(2)}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">
                                        {" "}
                                        Children: 40 x {search.children}
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱{customer.children.toFixed(2)}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt className="text-base font-medium">
                                        Total
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900">
                                        ₱{" "}
                                        {(
                                            parseInt(totalRate) +
                                            customer.children +
                                            customer.adults
                                        ).toFixed(2)}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt className="text-base font-medium">
                                        Downpayment{" "}
                                        <span className="text-red-500">*</span>
                                        <p className="text-xs text-gray-500 italic">
                                            50% of Total Billed Amount
                                        </p>
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900">
                                        ₱
                                        {(
                                            (parseInt(totalRate) +
                                                customer.children +
                                                customer.adults) /
                                            2
                                        ).toFixed(2)}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/* Terms Content */}
                    <div className="mt-10 lg:mt-0">
                        <div className="flex flex-col justify-center">
                            <label
                                htmlFor="contact_content"
                                className="block text-lg font-medium text-cyan-600"
                            >
                                Terms & Condition
                            </label>
                            {/* <div
                                className="mt-2 w-full min-h-[650px] border-none bg-white/5 px-3 py-2 text-base text-gray-600 prose prose-gray"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(term?.content || "No content available") }}
                            /> */}
                            <div
                                className="mt-2 w-full max-h-[515px] min-h-[250px] overflow-auto border-none bg-white/5 px-3 py-2 text-base text-gray-600 prose prose-gray"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(term?.content || "No content available") }}
                            />
                            <div className="mt-6 flex">
                                <label className="flex items-center space-x-2">
                                    <input
                                        required
                                        onChange={(e) => setAccept(e.target.checked)}
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
                                    />
                                    <span className="text-gray-700">
                                        By proceeding, you agree to the{" "}
                                        <a
                                            href="#"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Terms and Conditions
                                        </a>{" "}
                                        of Blue Waves Resort.
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
