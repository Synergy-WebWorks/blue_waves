import { setCustomer } from '@/app/redux/app-slice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ContactInformation() {
    const { selected, customer, search } = useSelector((store) => store.app);
    const { booking_info } = useSelector((store) => store.booking_info);
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(setCustomer(booking_info))
    },[booking_info?.id??''])
  return (
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
                    readOnly
                    id="email-address"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                />
            </div>
        </div>
        <div className="sm:col-span-2 mt-3">
            <label
                htmlFor="phone"
                className="block text-sm/6 font-medium text-gray-700"
            >
                Phone
            </label>
            <div className="mt-2">
                <input
                    id="mobile"
                    name="mobile"
                    readOnly
                    value={customer.mobile ?? ""}
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
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                />
            </div>
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
                        readOnly
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
                    />
                </div>
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
                        readOnly
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
                        readOnly
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
                    />
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
                        readOnly
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
                        readOnly
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
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                    />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
