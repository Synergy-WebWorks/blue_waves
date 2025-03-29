import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_inventory_allocation_by_id_thunk } from "@/app/redux/inventory-allocation-thunk";
import moment from "moment";

export default function ReceivedRecordsTableSection() {
    const dispatch = useDispatch();
    const { inventory_stocks } = useSelector((state) => state.inventory_stocks);
    const { inventory } = useSelector((state) => state.inventories);

    const item_id = window.location.pathname.split('/')[3]

    useEffect(() => {
        if (item_id) {
            dispatch(get_inventory_allocation_by_id_thunk(item_id));
        }
    }, [dispatch, item_id]);

    console.log('efffffe', inventory_stocks)
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-4 pb-8 border rounded-lg shadow-lg">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-cyan-600 pt-8">
                        Inventory Received Records
                    </h1>
                </div>
            </div>
            <div className="mt-2">
                <h1 className="text-sm">
                    Item Name: <b className="text-lg">&nbsp;{inventory?.name}</b>
                </h1>
                <h1 className="text-sm">
                    Brand: <b className="text-lg">&nbsp;{inventory?.brand}</b>
                </h1>
                <h1 className="text-sm">
                    Remaining Total Stock: <b className="text-lg">&nbsp;{inventory?.quantity}</b>
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
                                        Remaining before stock added
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Stocks Added
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Date Received
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {inventory_stocks?.data.map((stock) => (
                                    <tr key={stock?.name}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <b>{stock?.remaining}</b>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            <b>{stock?.added}</b>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                            {moment(stock.created_at).format('LLL')}
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
