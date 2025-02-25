import { createSlice } from "@reduxjs/toolkit";

export const bookingInfoSlice = createSlice({
    name: "bookinginfo",
    initialState: {
        booking_infos: [],
        booking_info: {},
        calendars:[]
    },
    reducers: {
        setBookingInfos: (state, action) => {
            state.booking_infos = action.payload;
        },
        setBookingInfo: (state, action) => {
            state.booking_info = action.payload;
        },
        setCalendars: (state, action) => {
            state.calendars = action.payload;
        },
    },
});
export const { setBookingInfos, setBookingInfo,setCalendars } = bookingInfoSlice.actions;

export default bookingInfoSlice.reducer;
