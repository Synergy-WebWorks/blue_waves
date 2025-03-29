import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { get_booking_info_by_id_thunk } from "@/app/redux/booking-info-thunk";
import { checkout_data_service } from "@/app/services/booking-info-service";
import store from "@/app/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function CheckoutSection() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { booking_info } = useSelector((store) => store.booking_info);
    const booking_info_id = window.location.pathname.split("/")[3];
    async function submit_checkout(status) {
        setLoading(true);
        try {
            await checkout_data_service({
                ...booking_info,
                status: status,
            });
            await store.dispatch(get_booking_info_by_id_thunk(booking_info_id));
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <>
            <div className="flex w-full">
                <button
                    disabled={loading}
                    onClick={() => setOpen(!open)}
                    className="p-2 bg-blue-600 hover:bg-blue-500 w-full text-white font-black"
                >
                    {loading ? "Loading..." : "CHECKOUT"}
                </button>
            </div>
            <Transition appear show={open} as="div" className="relative z-10">
                <Dialog
                    as="div"
                    className="fixed inset-0 overflow-y-auto"
                    onClose={setOpen}
                >
                    <div className="flex min-h-screen items-center justify-center p-4 text-center">
                        {/* Backdrop */}
                        <Transition.Child
                            as="div"
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="fixed inset-0 bg-gray-500/75"
                        />

                        {/* Dialog Panel */}
                        <Transition.Child
                            as={Dialog.Panel}
                            className="relative bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full p-6"
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="w-full flex items-end justify-end">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                >
                                    <span className="sr-only">Close</span>
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="size-6"
                                    />
                                </button>
                            </div>
                            <div className="mt-4 text-center">
                                <div className="flex justify-center">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                                        <CheckIcon className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                                <Dialog.Title className="text-lg font-semibold text-gray-900">
                                    Payment successful
                                </Dialog.Title>
                                <p className="mt-2 text-sm text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Eius aliquam laudantium
                                    explicabo pariatur iste dolorem animi vitae
                                    error totam. At sapiente aliquam accusamus
                                    facere veritatis.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-5 sm:mt-6 sm:flex sm:justify-end space-x-3 w-full">
                                <button
                                disabled={loading}
                                    onClick={() => submit_checkout("paid")}
                                    className="px-4 w-full py-2 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                {loading?"Loading...":"CHECKOUT"}    
                                </button>
                                <button
                                disabled={loading}
                                    onClick={() => submit_checkout("cancelled")}
                                    className="px-4 py-2 w-full bg-red-500 text-white rounded-md text-sm font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                 {loading?"Loading...":"CANCEL RESERVATION"}        
                                </button>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
