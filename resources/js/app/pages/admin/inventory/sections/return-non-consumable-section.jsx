import { get_inventory_thunk, return_item_inventory_thunk } from '@/app/redux/inventory-thunk';
import store from '@/app/store/store';
import { message, Modal, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaArrowRotateLeft, FaArrowRotateRight, FaPlus } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

export default function ReturnNonConsumableSection({ data }) {
    const { inventories } = useSelector((state) => state.inventories);
    const [showModal, setShowModal] = useState(false);
    const [dataValue, setDataValue] = useState({});
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        setDataValue(data);
    }, [data]);
    // Ensure that item ID is passed to the API request

    const submit_return = async (e) => {
        e.preventDefault();

        // Validate the quantity and received date
        if (!dataValue.quantity || isNaN(dataValue.quantity) || dataValue.quantity <= 0) {
            messageApi.error('Please enter a valid quantity');
            return;
        }

        if (!dataValue.received) {
            messageApi.error('Please select a valid received date');
            return;
        }

        try {
            // Ensure the id is being passed along with the other data
            const updatedDataValue = {
                ...dataValue,
                returned: dataValue.quantity, // Ensure the returned quantity is included
            };

            // Check if item id exists and pass it
            if (!updatedDataValue.id) {
                messageApi.error('Item ID is missing!');
                return;
            }

            // Dispatch the update inventory action with the updated dataValue
            await store.dispatch(return_item_inventory_thunk(updatedDataValue));
            await store.dispatch(get_inventory_thunk());  // Fetch updated inventory list
            message.success('Item Returned Successfully');
            setShowModal(false);
        } catch (error) {
            messageApi.error('Error returning item');
        }
    };




    console.log('inventories', inventories)

    // Filter non-consumable inventories
    const nonConsumables = inventories.filter(item => item.type === 'Non-Consumable');

    return (
        <div>
            {contextHolder}
            <Tooltip title="Return Item(s)">
                <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    title="Add Stocks"
                    className="relative inline-flex items-center rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-gray-300 ring-1 ring-gray-300 ring-inset hover:bg-green-500 focus:z-10"
                >
                    <FaArrowRotateRight />&nbsp;Return Item
                </button>
            </Tooltip>
            <Modal
                title="Return Item"
                centered
                open={showModal}
                onCancel={() => setShowModal(false)}
                footer={null}
                width={500}
            >
                <form onSubmit={submit_return} className="w-full">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block tracking-wide font-bold mb-1 mt-2" htmlFor="itemName">
                                Name of Item
                            </label>
                            <select
                                value={dataValue?.id || ''} // Ensure you store and pass the item's id
                                onChange={(e) => {
                                    const selectedItem = nonConsumables.find(item => item.id === parseInt(e.target.value));
                                    setDataValue({
                                        ...dataValue,
                                        id: selectedItem?.id, // Set the id of the selected item
                                        itemName: selectedItem?.name,  // Set the name of the selected item
                                    });
                                }}
                                name="itemName"
                                className="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                <option value="">Select Item</option>
                                {nonConsumables.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>  // Pass item id to the value attribute
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block tracking-wide font-bold mb-1 mt-2" htmlFor="quantity">
                                Number of Returned Item(s)
                            </label>
                            <input
                                value={dataValue?.quantity || ''}
                                onChange={(e) => setDataValue({
                                    ...dataValue,
                                    quantity: parseInt(e.target.value, 10) || 0, // Ensure numeric input
                                })}
                                name="quantity"
                                className="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="number"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide font-bold mb-1" htmlFor="received">
                                Date Returned
                            </label>
                            <input
                                value={dataValue?.received || ''}
                                onChange={(e) =>
                                    setDataValue({
                                        ...dataValue,
                                        received: e.target.value,  // Update the received date in the state
                                    })
                                }
                                name="received"
                                className="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="date"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-1.5 mt-1">
                        <button
                            type="button"
                            className="flex justify-end px-2 py-1.5 rounded-md hover:bg-gray-300"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex justify-end bg-blue-600 px-2 py-1.5 rounded-md text-white hover:bg-blue-500"
                        >
                            Return Item(s)
                        </button>
                    </div>
                </form>
            </Modal>

        </div>
    );
}
