import { router } from "@inertiajs/react";
import { Pagination } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export default function ReservationPaginationSection() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");
    const { booking_infos } = useSelector((store) => store.booking_info);

    function next_page(params) {
        router.visit(`/admin/reservation?page=${params ?? 1}`);
    }
    return (
        <div>
            <Pagination
                onChange={next_page}
                defaultCurrent={page}
                total={booking_infos.total}
            />
        </div>
    );
}
