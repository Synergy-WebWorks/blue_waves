import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
    name: "activity",
    initialState: {
        activities: [],
        activity: {},
    },
    reducers: {
        setActivities: (state, action) => {
            state.activities = action.payload;
        },
        setActivity: (state, action) => {
            state.activity = action.payload;
        },
    },
});
export const { setActivities, setActivity } = activitySlice.actions;

export default activitySlice.reducer;
