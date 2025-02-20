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
const store = configureStore({
    reducer: {
        app: appSlice,
        activity: activitySlice,
        booking_info: bookingInfoSlice,
        booking_order: bookingOrderSlice,
        inventory_allocation: inventoryAllocationSlice,
        inventory: activitySlice,
        inventory_stock: inventoryStockSlice,
        landing_page: landingPageSlice,
        rent: rentSlice,
        resort: resortSlice,
        term: termSlice,
        upload: uploadSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
