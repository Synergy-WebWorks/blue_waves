import Modal from "@/app/pages/components/modal";
import { delete_activity_thunk, get_activity_thunk } from "@/app/redux/activity-thunk";
import { delete_rent_thunk, get_rent_thunk } from "@/app/redux/rent-thunk";
import store from "@/app/store/store";
import { message, Tooltip } from "antd";
import React, { useState } from "react";
import { FaTrash, FaTrashCan } from "react-icons/fa6";

export default function DeleteActivitySection({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const [loading, setLoading] = useState(false);

    const deleteCottage = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(
                delete_activity_thunk(data.id)
            );
            store.dispatch(get_activity_thunk())
            message.success("Activity Deleted Successfully!");
            setIsModalOpen(false);
        } catch (error) {
            message.error("Failed to delete Activity. Please try again."); // Show error message
        } finally {
            setLoading(false); // Always reset loading state
        }
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Tooltip title="Remove Activity">
                <button
                    type="button"
                    onClick={openModal}
                    className="text-red-500"

                >
                    <FaTrashCan
                        aria-hidden="true"
                        className="float-left size-6"
                    />
                </button>
            </Tooltip>
            <Modal open={isModalOpen} setOpen={setIsModalOpen} width="w-1/4">
                <h2 className="text-xl font-semibold mb-4">
                    Are you sure you want to delete this activity?
                </h2>
                <form action="" onSubmit={deleteCottage}>
                    <div className="flex w-full gap-5">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="bg-blue-500 p-2 w-full rounded-md text-white hover:bg-blue-600"
                        >
                            Cancel
                        </button>
                        <button
                            disabled={loading}
                            type="submit"
                            className="bg-red-500 p-2 w-full rounded-md text-white hover:bg-red-600"
                        >

                            {
                                loading ? 'Loading...' : 'Confirm'
                            }
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
