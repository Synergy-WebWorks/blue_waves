import { createSlice } from "@reduxjs/toolkit";

export const inventoryAllocationSlice = createSlice({
    name: "inventoryallocation",
    initialState: {
        inventory_allocations: [],
        inventory_allocation: {},
    },
    reducers: {
        setInventoryAllocations: (state, action) => {
            state.inventory_allocations = action.payload;
        },
        setInventoryAllocation: (state, action) => {
            state.inventory_allocation = action.payload;
        },
    },
});
export const { setInventoryAllocations, setInventoryAllocation } = inventoryAllocationSlice.actions;

export default inventoryAllocationSlice.reducer;
