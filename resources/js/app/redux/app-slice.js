import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
const params = new URLSearchParams(window.location.search);
const adults = params.get("adults");
const children = params.get("children");
const start = params.get("start");
const end = params.get("end");
const adults_price = parseInt(adults) * 80;
const children_price = parseInt(children) * 40;

export const appSlice = createSlice({
    name: "app",
    initialState: {
        users: [],
        user: {},
        search: {
            start: start ?? moment().format("LL"),
            end: end ?? moment().format("LL"),
            adults: adults ?? 0,
            children: children ?? 0,
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
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setSearch: (state, action) => {
            state.customer = {
                ...state.customer,
                adults: action.payload.adults * 80,
                children: action.payload.children * 40
            }
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
export const { setUser, setUsers, setSearch, setSelected, setCustomer } =
    appSlice.actions;

export default appSlice.reducer;
