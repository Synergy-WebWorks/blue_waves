import React, { useEffect } from "react";
import BookingStepperSection from "./sections/booking-stepper-section";
import store from "@/app/store/store";
import { get_rent_thunk } from "@/app/redux/rent-thunk";
import StaffLayout from "../layout";


export default function BookingPage() {

  useEffect(() => {
    store.dispatch(get_rent_thunk());
}, []);
  return (
    <StaffLayout>
        <BookingStepperSection/>
    </StaffLayout>
  );
}
