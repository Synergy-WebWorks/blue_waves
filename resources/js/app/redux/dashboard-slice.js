import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        dashboards: [],
        dashboard: {},
    },
    reducers: {
        setDashboards: (state, action) => {
            state.dashboards = action.payload;
        },
        setDashboard: (state, action) => {
            state.dashboard = action.payload;
        },
    },
});
export const { setDashboards, setDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
