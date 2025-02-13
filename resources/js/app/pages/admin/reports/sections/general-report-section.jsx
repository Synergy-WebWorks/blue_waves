import React from "react";
import { PrinterIcon } from "@heroicons/react/20/solid";
import CustomerComponent from "../../dashboard/components/customer-component";
import SalesComponent from "../../dashboard/components/sales-component";
import ReportsStatsSection from "../components/reports-stat-component";

export default function GeneralReportSection() {
    const handlePrint = () => {
        window.print();
    };
    return (
        <div>
            <div className="flex justify-between mt-4">
                <h3 className="text-base font-semibold text-gray-900">
                    Overall Report
                </h3>
                <button
                    type="button"
                    onClick={handlePrint}
                    className="rounded-full bg-cyan-600 p-3 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                    <PrinterIcon aria-hidden="true" className="size-5" />
                </button>
            </div>

            <ReportsStatsSection />
            <div className="mx-auto px-4 sm:px-6 lg:px-4 pb-4">
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <CustomerComponent />
                    <SalesComponent />
                </div>
            </div>
        </div>
    );
}
