import appSlice from "@/app/redux/app-slice";
import activitySlice from "../redux/activity-slice";
import bookingInfoSlice from "../redux/booking-info-slice";
import bookingOrderSlice from "../redux/booking-order-slice";
import inventoryAllocationSlice from "../redux/inventory-allocation-slice";
import inventoryStockSlice from "../redux/inventory-stock-slice";
import landingPageSlice from "../redux/landing-page-slice";
import rentSlice from "../redux/rent-slice";
import resortSlice from "../redux/resort-slice";
import termSlice from "../redux/term-slice";
import uploadSlice from "../redux/upload-slice";
import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "../redux/inventory-slice";
import dashboardSlice from "../redux/dashboard-slice";

const store = configureStore({
    reducer: {
        app: appSlice,
        dashboard: dashboardSlice,
        activities: activitySlice,
        booking_info: bookingInfoSlice,
        booking_order: bookingOrderSlice,
        inventory_allocations: inventoryAllocationSlice,
        inventories: inventorySlice,
        inventory_stocks: inventoryStockSlice,
        landing_page: landingPageSlice,
        rent: rentSlice,
        rents: rentSlice,
        resort: resortSlice,
        terms: termSlice,
        upload: uploadSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
