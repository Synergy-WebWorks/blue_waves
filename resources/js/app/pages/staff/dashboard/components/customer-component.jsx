import React from "react";
import { FaPersonDigging, FaRegCalendarCheck } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

export default function CustomerComponent() {
    const { dashboards } = useSelector((store) => store.dashboard);
    
    const options = {
        chart: {
            id: "bar-chart",
            toolbar: {
                show: false, // Hides the toolbar
            },
        },

        xaxis: {
            categories: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ], // x-axis categories
        },
        plotOptions: {
            bar: {
                horizontal: false, // Set to false to create a vertical bar chart
                columnWidth: "60%", // Adjust width of bars
            },
        },
        title: {
            text: "Monthly Reservation Graph",
            align: "center",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
            },
        },
        grid: {
            borderColor: "#e7e7e7", // Lighter grid border
        },
        colors: ["#00ACC1"], // Customize the bar color if desired
    };
console.log('dashboards',dashboards?.monthlyBookings?.April)
    const series = [
        {
            name: "Reservation Count",
            data: [
                dashboards?.monthlyBookings?.January??0,
                dashboards?.monthlyBookings?.February??0,
                dashboards?.monthlyBookings?.March??0,
                dashboards?.monthlyBookings?.April??0,
                dashboards?.monthlyBookings?.May??0,
                dashboards?.monthlyBookings?.June??0,
                dashboards?.monthlyBookings?.July??0,
                dashboards?.monthlyBookings?.August??0,
                dashboards?.monthlyBookings?.September??0,
                dashboards?.monthlyBookings?.October??0,
                dashboards?.monthlyBookings?.November??0,
                dashboards?.monthlyBookings?.December??0,
            ], // Data corresponding to each category
        },
    ];
    return (
        <div className="sm:col-span-2">
            <div className="bg-gray-200/20 shadow-md p-4 gap-4">
                <div className="flex flex-row text-cyan-600">
                    <FaRegCalendarCheck className="size-6 text-cyan-600 mr-2" />
                    Reservation Graph
                </div>
                <div
                    className="chart-container"
                    style={{ maxWidth: "650px", margin: "0 auto" }}
                >
                    <ApexCharts
                        options={options}
                        series={series}
                        type="bar"
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}
