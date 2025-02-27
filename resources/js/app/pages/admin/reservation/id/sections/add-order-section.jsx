import { setSelected } from "@/app/redux/app-slice";
import { get_booking_info_by_id_thunk } from "@/app/redux/booking-info-thunk";
import { add_order_service } from "@/app/services/booking-info-service";
import store from "@/app/store/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddOrderSection() {
    const { selected, search, customer } = useSelector((store) => store.app);
    const { booking_info } = useSelector((store) => store.booking_info);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const booking_info_id = window.location.pathname.split("/")[3];
    const totalRate = selected?.reduce(
        (sum, item) => sum + Number(item.rate),
        0
    );

    function getDayGap(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const difference = (end - start) / (1000 * 60 * 60 * 24);
        return difference == 0 ? 1 : difference;
    }
    const gap = getDayGap(search.start, search.end);
    console.log("gap", gap);
    async function submit_order() {
        setLoading(true);
        try {
            await add_order_service({
                ...search,
                selected,
                customer,
                gap: gap,
                total_rent:
                    (totalRate * gap) +
                    parseInt(customer.children) +
                    parseInt(customer.adults),
            });
            await store.dispatch(get_booking_info_by_id_thunk(booking_info_id));
            dispatch(setSelected([]));
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div>
            <button
                disabled={loading}
                onClick={submit_order}
                className="shadow-xl rounded-md p-2.5 bg-green-600 hover:bg-green-500 text-white"
            >
                {loading ? "Loading..." : "ADD ORDER"}
            </button>
        </div>
    );
}
