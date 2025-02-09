import React from "react";
import CustomerComponent from "../components/customer-component";
import SalesComponent from "../components/sales-component";

export default function GraphSection() {
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <CustomerComponent />
                <SalesComponent/>
            </div>
        </div>
    );
}
