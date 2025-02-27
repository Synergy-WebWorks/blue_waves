import { createSlice } from '@reduxjs/toolkit'


export const inventoryStockSlice = createSlice({
  name: 'inventorystock',
  initialState: {
    inventory_stocks: {
      data: []
    },
    inventory_stock: {}
  },
  reducers: {
    setInventoryStocks: (state, action) => {
      state.inventory_stocks = action.payload
    },
    setInventoryStock: (state, action) => {
      state.inventory_stock = action.payload
    },
  },
})
export const {
  setInventoryStocks,
  setInventoryStock
} = inventoryStockSlice.actions

export default inventoryStockSlice.reducer
