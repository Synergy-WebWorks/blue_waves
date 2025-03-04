import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FaSailboat, FaPenToSquare, FaHouseFloodWater } from "react-icons/fa6";
import { create_activity_thunk, get_activity_thunk } from "@/app/redux/activity-thunk";
import { message, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setActivity } from "@/app/redux/activity-slice";
import store from "@/app/store/store";
import UpdateImageSection from "./update-image-section";

export default function UpdateCottageSection({ data }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [uploadedFile1, setUploadedFile1] = useState(null);
    const { activity } = useSelector((state) => state.activities);
    const dispatch = useDispatch();

    function data_handler(e) {
        dispatch(setActivity({
            ...activity,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const fd = new FormData();
        fd.append('activity_id', activity.id ?? '');
        fd.append('file_name', activity.file_name ?? '');
        fd.append('name', activity.name ?? '');
        fd.append('rate', activity.rate ?? '');
        fd.append('unit', activity.unit ?? '');
        fd.append('quantity', activity.quantity ?? '');
        fd.append('intro', activity.intro ?? '');
        fd.append('description', activity.description ?? '');
        fd.append('status', 'Active');

        if (uploadedFile1 && uploadedFile1.length > 0) {
            Array.from(uploadedFile1).forEach((file) => {
                fd.append('uploads[]', file);
            });
        }

        try {
            await store.dispatch(create_activity_thunk(fd));
            await store.dispatch(get_activity_thunk());
            message.success("Cottage successfully updated!");
            setOpen(false);
        } catch (error) {
            message.error("Failed to update Cottage. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    console.log('data', data)

    return (
        <>
            <div className="mt-1 text-center">
                <Tooltip title="Update Cottage">
                    <button
                        type="button"
                        onClick={() => setOpen(true)}

                    >
                        <FaPenToSquare
                            aria-hidden="true"
                            className="float-left size-6"
                        />
                    </button>
                </Tooltip>
            </div>

            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-40">
                <Dialog.Backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Dialog.Panel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
                                <div className="flex h-full flex-col overflow-y-scroll bg-cyan-600 py-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-base font-semibold text-white">
                                                <FaHouseFloodWater className="size-5 float-left mr-2" />{" "}
                                                Update Cottage
                                            </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="relative rounded-md text-gray-600 hover:text-white focus:outline-none"
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
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
                                                        Cottage Information
                                                    </h3>
                                                </div>
                                                <div className="sm:col-span-12">
                                                    <input
                                                        onChange={data_handler}
                                                        value={data?.name ?? ""}
                                                        name="name"
                                                        type="text"
                                                        placeholder="Activity Name"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>

                                                <div className="sm:col-span-12">
                                                    <input
                                                        onChange={data_handler}
                                                        value={data?.rate ?? ""}
                                                        name="rate"
                                                        type="text"
                                                        placeholder="Cottage Rate"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>

                                                <div className="sm:col-span-12">
                                                    <input
                                                        onChange={data_handler}
                                                        value={data?.min_capacity ?? ""}
                                                        name="min_capacity"
                                                        type="text"
                                                        placeholder="Minimum Capacity"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>
                                                <div className="sm:col-span-12">
                                                    <input
                                                        onChange={data_handler}
                                                        value={data?.max_capacity ?? ""}
                                                        name="max_capacity"
                                                        type="text"
                                                        placeholder="Maximum Capacity"
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
                                                        name="description"
                                                        onChange={data_handler}
                                                        value={data?.description ?? ""}
                                                        placeholder="Activity Description"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    />
                                                </div>
                                                <div className="sm:col-span-12">
                                                    <hr />
                                                    <h3 className="text-base font-medium text-white pt-3">
                                                        Status
                                                    </h3>
                                                </div>
                                                {/* <div className="sm:col-span-12">
                                                    <select
                                                        onChange={data_handler}
                                                        value={data?.status ?? ""}
                                                        name="unit"
                                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                    >
                                                        <option value="" disabled>
                                                            -- Update Status --
                                                        </option>
                                                        <option value="Active">Active</option>
                                                        <option value="Inactive">Inactive</option>
                                                    </select>
                                                </div> */}

                                                <div className="sm:col-span-12">
                                                    <input
                                                        onChange={data_handler}
                                                        value={data?.status ?? ""}
                                                        name="status"
                                                        type="text"
                                                        placeholder="Status"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        readOnly
                                                    />
                                                </div>

                                                <div className="sm:col-span-12">
                                                    <hr />
                                                    <div className="mt-4 flex justify-center rounded-lg border border-dashed border-white bg-cyan-600 px-6 py-10">
                                                        <div className="text-center">
                                                            <UpdateImageSection data={data} />
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
