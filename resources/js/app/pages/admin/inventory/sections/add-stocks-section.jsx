import { get_inventory_thunk, update_inventory_thunk } from '@/app/redux/inventory-thunk';
import store from '@/app/store/store';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Alert } from '@material-tailwind/react';
import { message, Modal, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6';

export default function AddStocksSection({ data }) {
    const [showModal, setShowModal] = useState(false);
    const [dataValue, setDataValue] = useState({})
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        setDataValue(data)
    }, []);

    const submit_edit = async (e) => {
        e.preventDefault()
        try {
            await store.dispatch(update_inventory_thunk(dataValue))
            await store.dispatch(get_inventory_thunk())
            message.success('Stocks Added Successfully');
            setShowModal(false)
        } catch (error) {
            messageApi.error('error');
        }
    }

    console.log('dssssssss', data)
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
                onOk={() => setShowModal(false)}
                onCancel={() => setShowModal(false)}
                width={500}
                footer={null}
            >
                <form class="w-full" onSubmit={submit_edit} >
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block tracking-wide font-bold mb-1 mt-2" for="grid-text">
                                Number of Stocks
                            </label>
                            <input
                                // defaultValue={dataValue?.quantity}
                                onChange={(e) => setDataValue({
                                    ...dataValue,
                                    quantity: e.target.value
                                })}
                                name='quantity'
                                class="appearance-none block w-full  border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" />
                        </div>
                    </div>
                    <div className='flex flex-1 gap-1.5 justify-end mt-1'>
                        <button
                            className='flex justify-end px-2 py-1.5 rounded-md hover:bg-gray-300'
                            onClick={() => setShowModal(false)}
                            type='button'>
                            Cancel
                        </button>
                        <button
                            className='flex justify-end bg-blue-600 px-2 py-1.5 rounded-md text-white hover:bg-blue-500'
                            onClick={submit_edit}
                            type='submit'>
                            Add Stocks
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
