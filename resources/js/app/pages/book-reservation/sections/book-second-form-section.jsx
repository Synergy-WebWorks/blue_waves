import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer, setSelected } from "@/app/redux/app-slice";


export default function BookSecondFormSection() {
    const { selected, customer, search } = useSelector((store) => store.app);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const mobile = customer?.mobile || "";

    function getDayGap(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const difference = (end - start) / (1000 * 60 * 60 * 24);
        return difference;
    }
    const gap = getDayGap(search.start, search.end);
    const totalRate =
        selected.reduce((sum, item) => sum + Number(item.rate), 0) * gap;

    function remove_cart(value) {
        const idToRemove = value.id;
        const updatedData = selected.filter((item) => item.id !== idToRemove);
        dispatch(setSelected(updatedData));
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function isValidPHPhone(phone) {
        return /^09\d{9}$/.test(phone);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "mobile") {
            if (!isValidPHPhone(value)) {
                setError("Invalid mobile number format. Use 11 digit number format");
            } else {
                setError("");
            }
        }

        // if (name === "email") {
        //     if (!isValidEmail(value)) {
        //         setError("Invalid email address formatt");
        //     } else {
        //         setError("");
        //     }
        // }

        if (value.length <= 11) {
            dispatch(setCustomer({
                ...customer,
                [name]: value,
            }));
        }
    };


    console.log("customer", customer);
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Checkout</h2>

                <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    <div>
                        <div>
                            <h2 className="text-lg font-medium text-cyan-600">
                                Contact information
                            </h2>

                            <div className="mt-4">
                                <label
                                    htmlFor="email-address"
                                    className="block text-sm/6 font-medium text-gray-700"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="email"
                                        value={customer.email ?? ""}
                                        onChange={(e) =>
                                            dispatch(
                                                setCustomer({
                                                    ...customer,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            )
                                        }
                                        id="email-address"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="(e.g.,guest@gmail.com)"
                                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                        required
                                    />
                                </div>
                                {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
                                {!customer.email && (
                                    <p className="text-gray-400 text-sm mt-1">This field is required</p>
                                )}
                            </div>
                            <div className="sm:col-span-2 mt-3">
                                {/* <label
                                    htmlFor="phone"
                                    className="block text-sm/6 font-medium text-gray-700"
                                >
                                    Phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        value={mobile}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="tel"
                                        autoComplete="tel"
                                        pattern="[0-9]{10,11}" // Ensures only 10-11 digit numbers
                                        maxLength="11" // Prevents exceeding 11 digits
                                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                        required
                                    />
                                    {mobile.length > 11 && (
                                        <p className="text-red-500 text-sm mt-2">
                                            Mobile number cannot exceed 11 digits.
                                        </p>
                                    )}
                                </div> */}

                                <label for="phone-input" class="block mb-2 text-sm font-medium">Mobile number:</label>
                                <div class="relative">
                                    <div class="absolute text-gray-700 inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                        </svg>
                                    </div>
                                    <input
                                        value={mobile}
                                        onChange={handleChange}
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        maxLength={11}
                                        className="bg-white border outline-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                        placeholder="(0912-345-6789)"
                                        required
                                    />
                                </div>
                                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                {!customer.mobile && (
                                    <p className="text-gray-400 text-sm mt-1">This field is required</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h2 className="text-lg font-medium text-cyan-600">
                                Personal information
                            </h2>

                            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="fname"
                                            value={customer.fname ?? ""}
                                            onChange={(e) =>
                                                dispatch(
                                                    setCustomer({
                                                        ...customer,
                                                        [e.target.name]:
                                                            e.target.value,
                                                    })
                                                )
                                            }
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                            required
                                        />
                                    </div>
                                    {!customer.fname && (
                                        <p className="text-gray-400 text-sm mt-1">This field is required</p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Middle name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="mname"
                                            value={customer.mname ?? ""}
                                            onChange={(e) =>
                                                dispatch(
                                                    setCustomer({
                                                        ...customer,
                                                        [e.target.name]:
                                                            e.target.value,
                                                    })
                                                )
                                            }
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="lname"
                                            value={customer.lname ?? ""}
                                            onChange={(e) =>
                                                dispatch(
                                                    setCustomer({
                                                        ...customer,
                                                        [e.target.name]:
                                                            e.target.value,
                                                    })
                                                )
                                            }
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                            required
                                        />
                                        {!customer.lname && (
                                            <p className="text-gray-400 text-sm mt-1">This field is required</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Suffix
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="last-name"
                                            name="suffix"
                                            value={customer.suffix ?? ""}
                                            onChange={(e) =>
                                                dispatch(
                                                    setCustomer({
                                                        ...customer,
                                                        [e.target.name]:
                                                            e.target.value,
                                                    })
                                                )
                                            }
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                        >
                                            <option></option>
                                            <option>Sr</option>
                                            <option>Jr</option>
                                            <option>I</option>
                                            <option>II</option>
                                            <option>III</option>
                                        </select>
                                    </div>
                                </div>
{/* 
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="address"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="address"
                                            name="address"
                                            value={customer.address ?? ""}
                                            onChange={(e) =>
                                                dispatch(
                                                    setCustomer({
                                                        ...customer,
                                                        [e.target.name]:
                                                            e.target.value,
                                                    })
                                                )
                                            }
                                            type="text"
                                            autoComplete="street-address"
                                            placeholder="(e.g., 56 Lopez Jaena St, Brgy. 7, Bacolod City, Negros Occidental, 6100, Philippines)"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                            required
                                        />
                                    </div>
                                    {!customer.address && (
                                        <p className="text-gray-400 text-sm mt-1">This field is required</p>
                                    )}
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Order summary */}
                    <div className="mt-10 lg:mt-0">
                        <h2 className="text-lg font-medium text-cyan-600">
                            Booking Order summary
                        </h2>

                        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-xs">
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul
                                role="list"
                                className="divide-y divide-gray-200"
                            >
                                {selected.map((order, i) => {
                                    console.log("orderorder", order);
                                    return (
                                        <li
                                            key={order.id}
                                            className="flex px-4 py-6 sm:px-6"
                                        >
                                            <div className="shrink-0">
                                                <img
                                                    alt={order.imageAlt}
                                                    src={
                                                        order?.uploads[0]?.file
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
                                                                Min Capacity:
                                                                {
                                                                    order.min_capacity
                                                                }
                                                            </div>
                                                            <div>
                                                                Max Capacity:
                                                                {
                                                                    order.max_capacity
                                                                }
                                                            </div>
                                                            <div>
                                                                {
                                                                    order.description
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="ml-4 flow-root shrink-0">
                                                        <button
                                                            onClick={() =>
                                                                remove_cart(
                                                                    order
                                                                )
                                                            }
                                                            type="button"
                                                            className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                                                        >
                                                            <span className="sr-only">
                                                                Remove
                                                            </span>
                                                            <TrashIcon
                                                                aria-hidden="true"
                                                                className="size-5"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex flex-1 items-end justify-end pt-2">
                                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                                        ₱
                                                        {parseInt(
                                                            order.rate
                                                        ).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm"> Subtotal: {totalRate.toFixed(2) / gap} x {gap}</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱{totalRate.toFixed(2)}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between p-2 border-b border-gray-300">
                                    <dt className="text-sm">Entrance Fee</dt>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">  Adult: 80 x {search.adults}</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₱{customer.adults.toFixed(2)}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">  Children: 40 x {search.children}</dt>
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
                </form>
            </div>
        </div>
    );
}
