import React, { useEffect } from "react";
import StepperSection from "./sections/stepper-section";
import store from "@/app/store/store";
import { get_rent_thunk } from "@/app/redux/rent-thunk";

export default function BookReservationPage() {
    useEffect(() => {
        store.dispatch(get_rent_thunk());
    }, []);

    return (
        <div>
            <StepperSection />
        </div>
    );
}
