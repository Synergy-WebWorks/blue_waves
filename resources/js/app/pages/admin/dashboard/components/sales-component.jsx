import React from "react";
import { FaChartLine, FaRegCalendarCheck } from "react-icons/fa6";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

export default function SalesComponent() {
    const { dashboards } = useSelector((store) => store.dashboard);
    const years = Object.entries(dashboards?.years??{});
    console.log('years',years)
    const options = {
        chart: {
            id: "line-chart",
            toolbar: {
                show: false, // Hides the toolbar
            },
        },
        xaxis: {
            categories: years.map(res=>res[0]), // x-axis categories
        },
        title: {
            text: "Annual Sales Graph",
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
        colors: ["#00ACC1"], // Customize the line color if desired
        stroke: {
            curve: "smooth", // Smooth the line curve
            width: 2, // Line thickness
        },
    };

    const series = [
        {
            name: "Sales Count",
            data: years.map(res=>res[1]), // Data corresponding to each category
        },
    ];

    return (
        <div className="sm:col-span-2">
            <div className="bg-gray-200/20 shadow-md p-4 gap-4">
                <div className="flex flex-row text-cyan-600">
                    <FaChartLine className="size-6 text-cyan-600 mr-2" />
                    Sales Graph
                </div>
                <div
                    className="chart-container"
                    style={{ maxWidth: "650px", margin: "0 auto" }}
                >
                    <ApexCharts
                        options={options}
                        series={series}
                        type="line" // Change to "line"
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}
