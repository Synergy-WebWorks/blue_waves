import { setCustomer } from "@/app/redux/app-slice";
import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactInformation from "./contact-information";
import AddReservationSection from "./add-reservation-section";
import CheckoutSection from "./checkout-section";

export default function BookingOrderSummary() {
    const { selected, customer, search } = useSelector((store) => store.app);
    const { booking_info } = useSelector((store) => store.booking_info);
    const dispatch = useDispatch();

    const rent_total = booking_info?.booking_orders?.reduce(
        (sum, item) => sum + Number(item.sub_total),
        0
    );
    console.log("booking_info?.booking_orders", booking_info);
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Checkout</h2>
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* <ContactInformation /> */}

                    <AddReservationSection />
                    {/* Order summary */}
                    <div className="mt-10 lg:mt-0">
                        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-xs">
                            <ContactInformation />
                            {(booking_info.status == "partial" ||
                                booking_info.status == "pending") && (
                                <CheckoutSection />
                            )}

                            <h2 className="text-lg font-medium text-cyan-600 p-5">
                                Booking Order summary
                            </h2>
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul
                                role="list"
                                className="divide-y divide-gray-200"
                            >
                                {booking_info?.booking_orders?.map(
                                    (order, i) => {
                                        return (
                                            <li
                                                key={order.id}
                                                className="flex px-4 py-6 sm:px-6"
                                            >
                                                <div className="shrink-0">
                                                    <img
                                                        alt={order.imageAlt}
                                                        src={
                                                            order?.rent?.upload
                                                                ?.file
                                                        }
                                                        className="w-20 rounded-md"
                                                    />
                                                </div>

                                                <div className="ml-6 flex flex-1 flex-col">
                                                    <div className="flex">
                                                        <div className="min-w-0 flex-1">
                                                            <h4 className="text-sm">
                                                                <a
                                                                    href={
                                                                        order.href
                                                                    }
                                                                    className="font-medium text-gray-700 hover:text-gray-800"
                                                                >
                                                                    {order.name}
                                                                </a>
                                                            </h4>
                                                            <div>
                                                                <div className="flex gap-3 flex-col">
                                                                    Min
                                                                    Capacity:&nbsp;
                                                                    {
                                                                        order
                                                                            .rent
                                                                            .min_capacity
                                                                    }
                                                                </div>
                                                                <div className="flex gap-3 flex-col">
                                                                    Rate :&nbsp;
                                                                    ₱{" "}
                                                                    {parseInt(
                                                                        order
                                                                            .rent
                                                                            .rate
                                                                    ).toFixed(
                                                                        2
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    Max
                                                                    Capacity:&nbsp;
                                                                    {
                                                                        order
                                                                            .rent
                                                                            .max_capacity
                                                                    }
                                                                </div>
                                                                <div>
                                                                    Duration:&nbsp;
                                                                    {
                                                                        order.duration
                                                                    }
                                                                    days
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-1 items-end justify-end pt-2">
                                                        <p className="mt-1 text-sm font-medium text-gray-900">
                                                            ₱{" "}
                                                            {parseInt(
                                                                order.sub_total
                                                            )?.toFixed(2)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                            <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                                <>
                                    <div>Activities</div>
                                    {booking_info?.additionals?.map(
                                        (res, i) => {
                                            return (
                                                <div className="flex items-center justify-between">
                                                    <dt className="text-sm">
                                                        {res?.activity?.name}
                                                    </dt>

                                                    <dd className="text-sm font-medium text-gray-900">
                                                        <div className="flex gap-3">
                                                            <div>
                                                                Rate:
                                                                {parseInt(
                                                                    res.rate
                                                                ).toFixed(2)}
                                                            </div>
                                                            <div>*</div>
                                                            <div>
                                                                Quantity:&nbsp;
                                                                {res.quantity}
                                                            </div>
                                                            <div>=</div>
                                                            <div>
                                                                ₱
                                                                {parseInt(
                                                                    res.total
                                                                ).toFixed(2)}
                                                            </div>
                                                        </div>
                                                    </dd>
                                                </div>
                                            );
                                        }
                                    )}
                                </>

                                <div className="flex items-center justify-between ">
                                    <dt className="text-base font-medium">
                                        Cottages/Rooms
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900">
                                        ₱ {parseInt(rent_total).toFixed(2)}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">
                                        {" "}
                                        Adult: 50 x {booking_info.adults / 50}
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱
                                        {parseInt(booking_info.adults).toFixed(
                                            2
                                        )}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">
                                        Children: 20 x{" "}
                                        {booking_info.children / 20}
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱
                                        {parseInt(
                                            booking_info.children
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
                                        {parseInt(
                                            booking_info.initial
                                        )?.toFixed(2)}
                                    </dd>
                                </div>

                                <div className="flex items-center bg-gray-300 p-3 rounded-md justify-between border-t border-gray-200 ">
                                    <dt className="text-base font-black">
                                        Total Balance
                                    </dt>
                                    <dd className="text-base text-gray-900 font-black">
                                        ₱
                                        {(
                                            Number(booking_info?.total) -
                                            Number(booking_info?.initial)
                                        )?.toFixed(2)}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
