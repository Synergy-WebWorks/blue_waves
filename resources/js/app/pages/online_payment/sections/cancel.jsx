import { router } from "@inertiajs/react";
import React from "react";

export default function SuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <img
                src="/gif/cancelled.gif"
                className="md:w-1/2 max-h-screen"
                alt="Payment Success Animation"
            />
            <button
                onClick={() => router.visit("/")}
                className="absolute bottom-5 p-3 bg-blue-700 text-white hover:bg-blue-600 rounded-md"
            >
                BACK TO WEBSITE
            </button>
        </div>
    );
}
