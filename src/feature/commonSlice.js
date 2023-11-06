import { createSlice } from "@reduxjs/toolkit";

const init = {
    data : null ,
    isOpen : false , 
    status : "idle"
}

const common = createSlice({
    name : "popup" , 
    initialState : init , 
    reducers : {
        popupData : (state , action ) => {
            state.data = action.payload
            state.isOpen = true
        } , 
        togglePopup : (state) => {
            state.isOpen = !state.isOpen
        } , 
    } , 
    extraReducers : {}
})

export const { popupData , togglePopup  } = common.actions

export default common.reducer