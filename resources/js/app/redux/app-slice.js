import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        user: {},
        search: {
            start:moment().format('LL'),
            end: null,
            adults:0,
            children:0
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});
export const { setUser, setSearch } = appSlice.actions;

export default appSlice.reducer;
