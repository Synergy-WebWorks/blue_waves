import React, { useEffect } from "react";
import AdminLayout from "../../layout";
import store from "@/app/store/store";
import { get_booking_info_by_id_thunk } from "@/app/redux/booking-info-thunk";
import BookingOrderSummary from "./sections/booking-order-summary";

export default function ReservationIDPage() {
    const booking_info = window.location.pathname.split("/")[3];
    useEffect(() => {
        store.dispatch(get_booking_info_by_id_thunk(booking_info))
    }, []);
    return (
        <AdminLayout>
            <BookingOrderSummary />
        </AdminLayout>
    );
}
