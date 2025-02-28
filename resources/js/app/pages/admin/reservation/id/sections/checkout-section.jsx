import { get_booking_info_by_id_thunk } from "@/app/redux/booking-info-thunk";
import { checkout_data_service } from "@/app/services/booking-info-service";
import store from "@/app/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function CheckoutSection() {
    const [loading, setLoading] = useState(false);
    const { booking_info } = useSelector((store) => store.booking_info);
    const booking_info_id = window.location.pathname.split("/")[3];
    async function submit_checkout(params) {
        setLoading(true);
        try {
            await checkout_data_service({
                ...booking_info,
                status: "paid",
            });
            await store.dispatch(get_booking_info_by_id_thunk(booking_info_id));
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div className="flex w-full">
            <button
                disabled={loading}
                onClick={submit_checkout}
                className="p-2 bg-blue-600 hover:bg-blue-500 w-full text-white font-black"
            >
                {loading ? "Loading..." : "CHECKOUT"}
            </button>
        </div>
    );
}
