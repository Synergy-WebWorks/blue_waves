import React, { useEffect } from "react";
import AdminLayout from "../../layout";
import store from "@/app/store/store";
import { get_booking_info_by_id_thunk } from "@/app/redux/booking-info-thunk";
import BookingOrderSummary from "./sections/booking-order-summary";
// import AddReservationSection from "./sections/add-reservation-section";
import { get_rent_thunk } from "@/app/redux/rent-thunk";

export default function ReservationIDPage() {
    const booking_info = window.location.pathname.split("/")[3];
    useEffect(() => {
        store.dispatch(get_booking_info_by_id_thunk(booking_info));
        store.dispatch(get_rent_thunk());
    }, []);
    return (
        <AdminLayout>
            <BookingOrderSummary />
        </AdminLayout>
    );
}
