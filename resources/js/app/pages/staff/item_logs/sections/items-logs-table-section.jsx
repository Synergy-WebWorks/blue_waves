import React, { useEffect } from "react";
import AddAllocateSection from "./add-allocate-item-section";
import { useDispatch, useSelector } from "react-redux";
import store from "@/app/store/store";
import { get_rent_thunk } from "@/app/redux/rent-thunk";
import { get_inventory_allocation_by_id_thunk } from "@/app/redux/inventory-allocation-thunk";
import moment from "moment";

export default function ItemsLogTableSection() {
    const dispatch = useDispatch();
    const { inventory_allocations } = useSelector((state) => state.inventory_allocations);
    const { inventory } = useSelector((state) => state.inventories);

    const item_id = window.location.pathname.split('/')[3]

    useEffect(() => {
        if (item_id) {
            dispatch(get_inventory_allocation_by_id_thunk(item_id));
        }
    }, [dispatch, item_id]);

    console.log('eeeedde', inventory_allocations)
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-4 pb-8 border rounded-lg shadow-lg">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-cyan-600 pt-8">
                        Item Logs Records
                    </h1>
                </div>
                <AddAllocateSection datas={inventory_allocations} data={inventory} />
            </div>
            <div className="mt-2">
                <h1 className="text-sm">
                    Item Name: <b className="text-lg">&nbsp;{inventory?.name}</b>
                </h1>
                <h1 className="text-sm">
                    Brand: <b className="text-lg">&nbsp;{inventory?.brand}</b>
                </h1>
                <h1 className="text-sm">
                    Stock(s): <b className="text-lg">&nbsp;{inventory?.quantity}</b>
                </h1>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Room/Cottage Allocation
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Date Allocated
                                    </th>
                                    {/* <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Actions
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {inventory_allocations?.data.map((allocation) => (
                                    <tr key={allocation?.name}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {allocation?.allocation}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {allocation?.quantity}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {moment(allocation.created_at).format('LLL')}
                                        </td>
                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm uppercase text-gray-900">
                                            <a
                                                href="#"
                                                className="text-indigo-500 hover:text-indigo-700"
                                            >
                                                Allocate Item
                                                <span className="sr-only">
                                                    , {room.rsbsa}
                                                </span>
                                            </a>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
