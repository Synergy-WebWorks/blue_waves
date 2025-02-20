import { createSlice } from "@reduxjs/toolkit";

export const bookingInfoSlice = createSlice({
    name: "bookinginfo",
    initialState: {
        booking_infos: [],
        booking_info: {},
    },
    reducers: {
        setBookingInfos: (state, action) => {
            state.booking_infos = action.payload;
        },
        setBookingInfo: (state, action) => {
            state.booking_info = action.payload;
        },
    },
});
export const { setBookingInfos, setBookingInfo } = bookingInfoSlice.actions;

export default bookingInfoSlice.reducer;
