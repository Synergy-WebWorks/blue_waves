import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ArchiveBoxArrowDownIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaPlus } from "react-icons/fa6";
import store from "@/app/store/store";
import { create_inventory_thunk, get_inventory_thunk } from "@/app/redux/inventory-thunk";
import { message } from "antd";

export default function AddAllocateSection() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({});


    const submitItem = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            await store.dispatch(
                create_inventory_thunk({
                    ...form,
                })
            );
            store.dispatch(get_inventory_thunk())
            message.success('Items Allocated Successfully');
            setOpen(false);
        } catch (error) {
            message.error("Failed to add items. Please try again."); // Show error message
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="mt-5 text-right">
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="block rounded-md bg-cyan-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                    <ArchiveBoxArrowDownIcon className="size-5 float-left mr-1" />
                    Allocate Item(s)
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
                                                <ArchiveBoxArrowDownIcon className="size-5 float-left mr-1" />
                                                Allocate Item(s)
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
                                        <form action="" onSubmit={submitItem}>
                                            <div>
                                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                                    <div className="sm:col-span-12">
                                                        <hr />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <input
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    name: e.target.value,
                                                                })
                                                            }
                                                            value={form.name}
                                                            name="name"
                                                            type="text"
                                                            placeholder="Name of the Item"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <input
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    quantity: e.target.value,
                                                                })
                                                            }
                                                            value={form.quantity}
                                                            name="quantity"
                                                            type="number"
                                                            placeholder="Quantity"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="w-full sm:col-span-12">
                                                        <label htmlFor="isConsumable" className="text-white">&nbsp;Select where to Allocate:</label>
                                                    </div>
                                                    <div className="flex sm:col-span-12">
                                                        <input
                                                            onChange={(e) => {
                                                                setForm({
                                                                    ...form,
                                                                    type: e.target.checked ? "Consumable" : "Non-Consumable",
                                                                    ["non-consumable"]: false,
                                                                    ["consumable"]: e.target.checked,
                                                                });
                                                            }}
                                                            checked={form.type === "Consumable"}
                                                            type="checkbox"
                                                            name="consumable"
                                                            className="w-4 mt-1 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                                        />
                                                        <label htmlFor="isConsumable" className="text-white">&nbsp;Room</label>
                                                    </div>

                                                    <div className="flex sm:col-span-12">
                                                        <input
                                                            onChange={(e) => {
                                                                setForm({
                                                                    ...form,
                                                                    type: e.target.checked ? "Non-Consumable" : "Consumable",
                                                                    ["consumable"]: false,
                                                                    ["non-consumable"]: e.target.checked,
                                                                });
                                                            }}
                                                            checked={form.type === "Non-Consumable"}
                                                            type="checkbox"
                                                            name="non-consumable"
                                                            className="w-4 mt-1 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                                        />
                                                        <label htmlFor="isNonConsumable" className="text-white">&nbsp;Cottage</label>
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <label htmlFor="isNonConsumable" className="text-white">&nbsp;Select Room</label>
                                                        <select
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    brand: e.target.value,
                                                                })
                                                            }
                                                            value={form.brand}
                                                            name="brand"
                                                            type="text"
                                                            placeholder="Brand Name"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <label htmlFor="isNonConsumable" className="text-white">&nbsp;Select Cottage</label>
                                                        <select
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    brand: e.target.value,
                                                                })
                                                            }
                                                            value={form.brand}
                                                            name="brand"
                                                            type="text"
                                                            placeholder="Brand Name"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <hr />
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
                                        </form>
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
