import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaBed } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setRent } from "@/app/redux/rent-slice";
import store from "@/app/store/store";
import { create_rent_thunk, get_rent_thunk } from "@/app/redux/rent-thunk";
import { message } from "antd";
import UploadRoomSection from "./upload-room-section";

export default function AddRoomSection() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [uploadedFile1, setUploadedFile1] = useState(null);
    const { rent } = useSelector((state) => state.rents);
    const dispatch = useDispatch();

    function data_handler(e) {
        dispatch(setRent({
            ...rent,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const fd = new FormData();
        fd.append('rent_id', rent.id ?? '');
        fd.append('file_name', rent.file_name ?? '');
        fd.append('name', rent.name ?? '');
        fd.append('rate', rent.rate ?? '');
        fd.append('min_capacity', rent.min_capacity ?? '');
        fd.append('max_capacity', rent.max_capacity ?? '');
        fd.append('description', rent.description ?? '');
        fd.append('type', 'room');
        fd.append('status', 'Vacant');

        if (uploadedFile1 && uploadedFile1.length > 0) {
            Array.from(uploadedFile1).forEach((file) => {
                fd.append('uploads[]', file);
            });
        }

        try {
            await store.dispatch(create_rent_thunk(fd));
            await store.dispatch(get_rent_thunk());
            message.success("Cottage successfully saved!");
            setOpen(false);
        } catch (error) {
            message.error("Failed to add Cottage. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="mt-5 text-right">
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="block rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                    <FaBed
                        aria-hidden="true"
                        className="float-left mr-2 size-5"
                    />
                    Add Room(s)
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
                                                <FaBed className="size-5 float-left mr-2" />{" "}
                                                New Room
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
                                    <form onSubmit={handleSubmit} className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <div>
                                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                                <div className="sm:col-span-12">
                                                    <hr />
                                                    <h3 className="text-base font-medium text-white pt-3">
                                                        Room Information
                                                    </h3>
                                                </div>
                                                <div className="sm:col-span-12">
                                                    <input
                                                        onChange={data_handler}
                                                        value={rent?.name ?? ""}
                                                        name="name"
                                                        type="text"
                                                        placeholder="Room Name"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>

                                                <div className="sm:col-span-12">
                                                    <input
                                                        onChange={data_handler}
                                                        value={rent?.rate ?? ""}
                                                        name="rate"
                                                        type="number"
                                                        placeholder="Room Rate"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>
                                                <div className="sm:col-span-12">
                                                    <input
                                                        onChange={data_handler}
                                                        value={rent?.min_capacity ?? ""}
                                                        name="min_capacity"
                                                        type="number"
                                                        placeholder="Minimum Capacity"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>
                                                <div className="sm:col-span-12">
                                                    <input
                                                        onChange={data_handler}
                                                        value={rent?.max_capacity ?? ""}
                                                        name="max_capacity"
                                                        type="number"
                                                        placeholder="Maximum Capacity"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>

                                                <div className="sm:col-span-12">
                                                    <hr />
                                                    <h3 className="text-base font-medium text-white pt-3">
                                                        Room Description
                                                    </h3>
                                                </div>

                                                <div className="sm:col-span-12">
                                                    <textarea
                                                        name="description"
                                                        onChange={data_handler}
                                                        value={rent?.description ?? ""}
                                                        placeholder="Room Description"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>

                                                <div className="sm:col-span-12">
                                                    <hr />
                                                    <h3 className="text-base font-medium text-white pt-3">
                                                        Upload Room Images
                                                    </h3>
                                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white bg-cyan-600 px-6 py-10">
                                                        <div className="text-center">
                                                            <UploadRoomSection
                                                                files={uploadedFile1}
                                                                setFiles={setUploadedFile1}
                                                            />
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
                                                disabled={loading}
                                                className="ml-4 inline-flex justify-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                                            >
                                                {loading ? "Saving..." : "Save"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
