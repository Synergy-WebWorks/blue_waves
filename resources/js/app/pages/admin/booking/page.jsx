import React from "react";
import AdminLayout from "../layout";
import BookingStepperSection from "./sections/booking-stepper-section";


export default function BookingPage() {
  return (
    <AdminLayout>
        <BookingStepperSection/>
    </AdminLayout>
  );
}
