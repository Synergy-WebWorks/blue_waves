import { useState } from "react";
import {
    Dialog
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FaUserPlus } from "react-icons/fa6";
import store from "@/app/store/store";
import { message } from "antd";
import { create_user_thunk, get_user_thunk } from "@/app/redux/app-thunk";

export default function AddUserSection() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ password: "", password2: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        // Check if passwords match
        if (name === "password2" && value !== form.password) {
            setError("Passwords do not match");
        } else {
            setError("");
        }
    };

    const submitUser = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            await store.dispatch(
                create_user_thunk({
                    ...form,
                    status: "Active"
                })
            );
            store.dispatch(get_user_thunk())
            message.success("Successfully Added!");
            setOpen(false);
        } catch (error) {
            message.error("Failed to add User. Please try again."); // Show error message
        } finally {
            setLoading(false); // Always reset loading state
        }
    };

    return (
        <>
            <div className="mt-5 text-right">
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="block rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                    <FaUserPlus
                        aria-hidden="true"
                        className="float-left mr-2 size-5"
                    />
                    New User
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
                                                <FaUserPlus className="size-5 float-left mr-2" />{" "}
                                                New Account User
                                            </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                    className="relative rounded-md text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                                    <form action="" onSubmit={submitUser}>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            <div>
                                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                                    <div className="sm:col-span-12">
                                                        <hr />
                                                        <h3 className="text-base font-medium text-white pt-3">Personal Information</h3>
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <input
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    fname: e.target.value,
                                                                })
                                                            }
                                                            value={form.fname}
                                                            name="fname"
                                                            type="text"
                                                            placeholder="Firstname"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-6">
                                                        <input
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    mname: e.target.value,
                                                                })
                                                            }
                                                            value={form.mname}
                                                            name="mname"
                                                            type="text"
                                                            placeholder="Middlename"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <input
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    lname: e.target.value,
                                                                })
                                                            }
                                                            value={form.lname}
                                                            name="lname"
                                                            type="text"
                                                            placeholder="Lastname"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-6">
                                                        <select
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    suffix: e.target.value,
                                                                })
                                                            }
                                                            value={form.suffix}
                                                            name="suffix"
                                                            autoComplete="suffix-name"
                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                                selected
                                                            >
                                                                -- Suffix --
                                                            </option>
                                                            <option>Jr</option>
                                                            <option>Sr</option>
                                                            <option>I</option>
                                                            <option>II</option>
                                                            <option>III</option>
                                                        </select>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <select
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    user_type: e.target.value,
                                                                })
                                                            }
                                                            value={form.user_type}
                                                            name="user_type"
                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                                selected
                                                            >
                                                                -- Select a Role
                                                                --
                                                            </option>
                                                            <option value="2">Staff</option>
                                                            <option value="1">Manager</option>

                                                        </select>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <hr />
                                                        <h3 className="text-base font-medium text-white pt-3">Account Information</h3>
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <input
                                                            onChange={(e) =>
                                                                setForm({
                                                                    ...form,
                                                                    email: e.target.value,
                                                                })
                                                            }
                                                            value={form.email}
                                                            name="email"
                                                            type="email"
                                                            placeholder="Email Address"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                    </div>
                                                    <div className="sm:col-span-12">
                                                        <input
                                                            onChange={handleChange}
                                                            value={form.password}
                                                            name="password"
                                                            type="password"
                                                            placeholder="Password"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-12">
                                                        <input
                                                            onChange={handleChange}
                                                            value={form.password2}
                                                            name="password2"
                                                            type="password"
                                                            placeholder="Confirm Password"
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:ring-sky-500 focus:border-sky-500 sm:text-sm/6"
                                                        />
                                                        {error && (
                                                            <p className="text-red-500 text-sm mt-1">{error}</p>
                                                        )}
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
