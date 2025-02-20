import { createSlice } from '@reduxjs/toolkit'


export const resortSlice = createSlice({
  name: 'resort',
  initialState: {
    resorts: [],
    resort:{}
  },
  reducers: {
    setResorts: (state, action) => {
      state.resorts = action.payload
    },
    setResort: (state, action) => {
        state.resort = action.payload
      },
  },
})
export const {
    setResorts,
    setResort
} = resortSlice.actions

export default resortSlice.reducer
