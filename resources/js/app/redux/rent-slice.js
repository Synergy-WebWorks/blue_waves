import { createSlice } from '@reduxjs/toolkit'


export const rentSlice = createSlice({
  name: 'rent',
  initialState: {
    rents: [],
    rent:{}
  },
  reducers: {
    setRents: (state, action) => {
      state.rents = action.payload
    },
    setRent: (state, action) => {
        state.rent = action.payload
      },
  },
})
export const {
    setRents,
    setRent
} = rentSlice.actions

export default rentSlice.reducer
