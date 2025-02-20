import { createSlice } from '@reduxjs/toolkit'


export const landingPageSlice = createSlice({
  name: 'landingpage',
  initialState: {
    landing_pages: [],
    landing_page:{}
  },
  reducers: {
    setLandingPages: (state, action) => {
      state.landing_pages = action.payload
    },
    setLandingPage: (state, action) => {
        state.landing_page = action.payload
      },
  },
})
export const {
    setLandingPages,
    setLandingPage
} = landingPageSlice.actions

export default landingPageSlice.reducer
