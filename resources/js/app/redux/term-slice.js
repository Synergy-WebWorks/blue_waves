import { createSlice } from '@reduxjs/toolkit'


export const termSlice = createSlice({
  name: 'term',
  initialState: {
    terms: [],
    term:{}
  },
  reducers: {
    setTerms: (state, action) => {
      state.terms = action.payload
    },
    setTerm: (state, action) => {
        state.term = action.payload
      },
  },
})
export const {
    setTerms,
    setTerm
} = termSlice.actions

export default termSlice.reducer
