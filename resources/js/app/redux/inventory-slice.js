import { createSlice } from '@reduxjs/toolkit'


export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    inventories: [],
    inventory:{}
  },
  reducers: {
    setInventories: (state, action) => {
      state.inventories = action.payload
    },
    setInventory: (state, action) => {
        state.inventory = action.payload
      },
  },
})
export const {
    setInventories,
    setInventory
} = inventorySlice.actions

export default inventorySlice.reducer
