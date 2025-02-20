import { createSlice } from "@reduxjs/toolkit";

export const bookingOrderSlice = createSlice({
    name: "bookingorder",
    initialState: {
        booking_orders: [],
        booking_order: {},
    },
    reducers: {
        setBookingOrders: (state, action) => {
            state.booking_orders = action.payload;
        },
        setBookingOrder: (state, action) => {
            state.booking_order = action.payload;
        },
    },
});
export const { setBookingOrders, setBookingOrder } = bookingOrderSlice.actions;

export default bookingOrderSlice.reducer;
