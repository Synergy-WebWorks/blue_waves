import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaHouseFloodWater } from "react-icons/fa6";

export default function AddCottageSection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="mt-5 text-right">
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="block rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                    <FaHouseFloodWater
                        aria-hidden="true"
                        className="float-left mr-2 size-5"
                    />
                    Add Cottage(s)
                </button>
            </div>
            <Dialog open={open} onClose={setOpen} className="relative z-40">
                <Dialog.Backdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Dialog.Panel
                                transition
                                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col overflow-y-scroll bg-cyan-600 py-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-base font-semibold text-white">
                                                <FaHouseFloodWater className="size-5 float-left mr-2" />{" "}
                                                New Cottage
                                            </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                    className="relative rounded-md text-gray-600 hover:text-white focus:outline-none"
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">
                                                        Close panel
                                                    </span>
                                                    <XMarkIcon
                                                        aria-hidden="true"
                                                        className="size-6"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <div>
                                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                                <div className="sm:col-span-12">
                                                    <hr />
                                                    <h3 className="text-base font-medium text-white pt-3">
                                                        Cottage Information
                                                    </h3>
                                                </div>
                                                <div className="sm:col-span-12">
                                                    <input
                                                        id="cottage_name"
                                                        name="cottage_name"
                                                        type="text"
                                                        placeholder="Cottage Name"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>

                                                <div className="sm:col-span-12">
                                                    <input
                                                        id="cottage_rate"
                                                        name="cottage_rate"
                                                        type="number"
                                                        placeholder="Cottage Rate"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>
                                                <div className="sm:col-span-12">
                                                    <input
                                                        id="cottage_capacity"
                                                        name="cottage_capacity"
                                                        type="text"
                                                        placeholder="Cottage Capacity: Ex. 4-5 person"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>

                                               

                                                <div className="sm:col-span-12">
                                                    <hr />
                                                    <h3 className="text-base font-medium text-white pt-3">
                                                       Cottage Description
                                                    </h3>
                                                </div>

                                                <div className="sm:col-span-12">
                                                    <textarea
                                                        name="cottage_description"
                                                        type="cottage_description"
                                                        placeholder="Cottage Description"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>
                                              

                                                <div className="sm:col-span-12">
                                                    <hr />
                                                    <h3 className="text-base font-medium text-white pt-3">
                                                       Upload Cottage Images
                                                    </h3>
                                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white bg-cyan-600 px-6 py-10">
                                                            <div className="text-center">
                                                                <PhotoIcon
                                                                    aria-hidden="true"
                                                                    className="mx-auto size-12 text-gray-300"
                                                                />
                                                                <div className="mt-4 flex text-sm/6 text-gray-600">
                                                                    <label
                                                                        htmlFor="file-upload"
                                                                        className="relative cursor-pointer rounded-md font-semibold text-gray-300 hover:text-white"
                                                                    >
                                                                        <span>
                                                                            Upload
                                                                            a
                                                                            file
                                                                        </span>
                                                                        <input
                                                                            multiple
                                                                            id="file-upload"
                                                                            name="file-upload"
                                                                            type="file"
                                                                            accept="image/*"
                                                                            className="sr-only"
                                                                        />
                                                                    </label>
                                                                    <p className="pl-1">
                                                                        or drag
                                                                        and drop
                                                                    </p>
                                                                </div>
                                                                <p className="text-xs/5 text-gray-600">
                                                                    PNG, JPG,
                                                                    GIF up to
                                                                    10MB
                                                                </p>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex shrink-0 justify-end px-4 py-4">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(false)}
                                                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="ml-4 inline-flex justify-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
