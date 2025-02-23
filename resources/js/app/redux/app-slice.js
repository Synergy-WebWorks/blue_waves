import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
const params = new URLSearchParams(window.location.search);
const adults = params.get("adults");
const children = params.get("children");
const adults_price = parseInt(adults) * 50;
const children_price = parseInt(children) * 20;
export const appSlice = createSlice({
    name: "app",
    initialState: {
        user: {},
        search: {
            start: moment().format("LL"),
            end: null,
            adults: 0,
            children: 0,
        },
        selected: [],
        customer: {
            adults: isNaN(adults_price) ? 0 : adults_price,
            children: isNaN(children_price) ? 0 : children_price,
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
        },
        setCustomer: (state, action) => {
            state.customer = action.payload;
        },
    },
});
export const { setUser, setSearch, setSelected, setCustomer } =
    appSlice.actions;

export default appSlice.reducer;
