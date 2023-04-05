import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        if (state.value){
            state.value = false
        }else{
            state.value = true
        }
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment} = counterSlice.actions

export default counterSlice.reducer