import { get_inventory_thunk, update_inventory_thunk } from '@/app/redux/inventory-thunk';
import store from '@/app/store/store';
import { message, Modal, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

export default function AddStocksSection({ data }) {
    const [showModal, setShowModal] = useState(false);
    const [dataValue, setDataValue] = useState({});
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        setDataValue(data);
    }, [data]);

    const submit_edit = async (e) => {
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
            // Dispatch the update inventory action with the updated quantity
            await store.dispatch(update_inventory_thunk(dataValue));
            await store.dispatch(get_inventory_thunk());
            message.success('Stocks Added Successfully');
            setShowModal(false);
        } catch (error) {
            messageApi.error('Error adding stock');
        }
    };

    return (
        <div>
            {contextHolder}
            <Tooltip title="Add Stock(s)">
                <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    title="Add Stocks"
                    className="relative inline-flex items-center rounded-l-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-gray-300 ring-1 ring-gray-300 ring-inset hover:bg-cyan-500 focus:z-10"
                >
                    <FaPlus />
                </button>
            </Tooltip>
            <Modal
                title={`Add Stock(s) for ${dataValue?.name}`}
                centered
                open={showModal}
                onCancel={() => setShowModal(false)}
                footer={null}
                width={500}
            >
                <form onSubmit={submit_edit} className="w-full">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block tracking-wide font-bold mb-1 mt-2" htmlFor="quantity">
                                Number of Stocks
                            </label>
                            <input
                                // value={dataValue?.quantity || ''}
                                onChange={(e) => setDataValue({
                                    ...dataValue,
                                    quantity: parseInt(e.target.value, 10) || 0,
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
                                Date Received
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
                            Add Stocks
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
