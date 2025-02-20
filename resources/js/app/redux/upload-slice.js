import { createSlice } from '@reduxjs/toolkit'


export const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    uploads: [],
    upload:{}
  },
  reducers: {
    setUploads: (state, action) => {
      state.uploads = action.payload
    },
    setUpload: (state, action) => {
        state.upload = action.payload
      },
  },
})
export const {
    setUploads,
    setUpload
} = uploadSlice.actions

export default uploadSlice.reducer
