import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";

export default function BookingCartComponent() {
    const [open, setOpen] = useState(false);
    const bookings = [
        {
            id: 1,
            name: "Room A",
            href: "#",
            price: "₱ 900.00",
            unit: "/night",
            subtotal: "₱ 1800.00",
            imageSrc:
                "https://tailwindui.com/plus-assets/img/ecommerce-images/checkout-page-03-product-04.jpg",
            imageAlt:
                "Front side of mint cotton t-shirt with wavey lines pattern.",
        },
        {
            id: 2,
            name: "Family Room",
            href: "#",
            price: "₱ 3000.00",
            unit: "/day",
            subtotal: "₱ 6000.00",
            imageSrc:
                "https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
            imageAlt: "Front side of charcoal cotton t-shirt.",
        },
        // More products...
    ];
    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-md bg-orange-600 p-2 text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
                <FaCartFlatbedSuitcase
                    aria-hidden="true"
                    className="size-5 mr-2 float-start"
                />
                My Booking
            </button>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <Dialog.Backdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Dialog.Panel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div>
                                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-orange-100">
                                    <FaCartFlatbedSuitcase
                                        aria-hidden="true"
                                        className="size-6 text-orange-600"
                                    />
                                </div>
                                <div className="mt-2 text-center sm:mt-2">
                                    <div className="mt-1">
                                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
                                            <h1 className="text-center text-3xl font-bold tracking-tight text-cyan-600 sm:text-4xl">
                                                My Bookings
                                            </h1>

                                            <form className="mt-12">
                                                <section aria-labelledby="cart-heading">
                                                    <h2
                                                        id="cart-heading"
                                                        className="sr-only"
                                                    >
                                                        Items in your shopping
                                                        cart
                                                    </h2>

                                                    <ul
                                                        role="list"
                                                        className="divide-y divide-cyan-200 border-t border-b border-cyan-200"
                                                    >
                                                        {bookings.map(
                                                            (booking) => (
                                                                <li
                                                                    key={
                                                                        booking.id
                                                                    }
                                                                    className="flex py-6"
                                                                >
                                                                    <div className="shrink-0">
                                                                        <img
                                                                            alt={
                                                                                booking.imageAlt
                                                                            }
                                                                            src={
                                                                                booking.imageSrc
                                                                            }
                                                                            className="size-24 rounded-md object-cover sm:size-32"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between">
                                                                                <h4 className="text-sm">
                                                                                    <a
                                                                                        href={
                                                                                            booking.href
                                                                                        }
                                                                                        className="font-medium text-cyan-700 hover:text-cyan-800"
                                                                                    >
                                                                                        {
                                                                                            booking.name
                                                                                        }
                                                                                    </a>
                                                                                </h4>
                                                                                <p className="ml-4 text-sm font-medium text-gray-900">
                                                                                    {
                                                                                        booking.subtotal
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                            <div className="flex flex-col">
                                                                                <p className="flex mt-1 text-sm text-gray-500">
                                                                                    {
                                                                                        booking.price
                                                                                    }
                                                                                    {
                                                                                        booking.unit
                                                                                    }
                                                                                </p>
                                                                                <p className="flex mt-1 text-sm text-gray-500">
                                                                                    {
                                                                                        booking.size
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div className="mt-4 flex flex-1 items-end justify-end">
                                                                            <div className="ml-4">
                                                                                <button
                                                                                    type="button"
                                                                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                                                >
                                                                                    <span>
                                                                                        Remove
                                                                                    </span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </section>

                                                {/* Order summary */}
                                                <section
                                                    aria-labelledby="summary-heading"
                                                    className="mt-10"
                                                >
                                                    <h2
                                                        id="summary-heading"
                                                        className="sr-only"
                                                    >
                                                        Order summary
                                                    </h2>

                                                    <div>
                                                        <dl className="space-y-4">
                                                            <div className="flex items-center justify-between">
                                                                <dt className="text-base font-medium text-gray-900">
                                                                    Subtotal
                                                                </dt>
                                                                <dd className="ml-4 text-base font-medium text-gray-900">
                                                                 ₱ 7800.00
                                                                </dd>
                                                            </div>
                                                        </dl>
                                                        <p className="flex mt-3 text-sm text-gray-500">
                                                            Entrance Fee and Downpayment
                                                            will be calculated
                                                            at checkout.
                                                        </p>
                                                    </div>

                                                   
                                                </section>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
