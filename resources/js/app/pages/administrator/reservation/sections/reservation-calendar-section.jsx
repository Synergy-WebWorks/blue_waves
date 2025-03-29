import React, { useEffect, useState } from "react";
import { Badge, Calendar } from "antd";
import store from "@/app/store/store";
import { get_calendar_thunk } from "@/app/redux/booking-info-thunk";
import moment from "moment";
import { useSelector } from "react-redux";
import { router } from "@inertiajs/react";

const ReservationCalendarSection = () => {
    const { calendars } = useSelector((store) => store.booking_info);
    const [search, setSearch] = useState({
        year: moment().format("Y"),
        month: moment().format("M"),
    });

    const queryString = new URLSearchParams(search).toString();

    useEffect(() => {
        store.dispatch(get_calendar_thunk("?" + queryString));
    }, [search.year]);

    const getListData = (value) => {
        const reserves = calendars.map((res) => ({
            content: `${res.fname} ${res.lname}`,
            type:
                res.status === "pending"
                    ? "warning"
                    : ["canceled", "failed"].includes(res.status)
                    ? "error"
                    : "success",
            start: moment(res.start, "MMMM DD, YYYY"),
        }));

        return reserves.filter(
            (res) =>
                res.start.date() === value.date() &&
                res.start.month() === value.month()
        );
    };

    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog Number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current, info) => {
        if (info.type === "date") return dateCellRender(current);
        if (info.type === "month") return monthCellRender(current);
        return info.originNode;
    };

    const handleDateClick = (value, res) => {
        if (res.source == "date") {
            const selectedDate = moment(value.$d).format("LL");
            router.visit(`/admin/reservation?start=${selectedDate}`);
        }
    };
    return (
        <Calendar
            onChange={(e) =>
                setSearch({
                    ...search,
                    year: e.$y,
                })
            }
            onSelect={handleDateClick}
            mode="month"
            cellRender={cellRender}
        />
    );
};
export default ReservationCalendarSection;
