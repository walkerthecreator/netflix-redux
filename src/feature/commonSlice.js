import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests, { TOKEN } from "../utils/request";
import axios from "axios";

const init = {
    data : null ,
    isOpen : false , 
    status : "idle"
}

export const fetchDetails = createAsyncThunk(
    "tv/fetchTvDetails" , 
    async(data) => {
        const { type , id } = data
        const response = await axios.get(requests.getDetails(type , id)  , { headers : { Authorization : TOKEN } })
        return response.data
    }
)

const common = createSlice({
    name : "popup" , 
    initialState : init , 
    reducers : {

        togglePopup : (state) => {
            state.isOpen = !state.isOpen
        } , 
    } , 
        extraReducers : (builder) => builder
            .addCase(fetchDetails.pending , (state) => {
        state.status = "loading"
    } )
    .addCase( fetchDetails.rejected , (state ) => {
        state.status = "idle"
    } )
    .addCase(fetchDetails.fulfilled , (state , action)=>{
        state.data = action.payload
        state.status = "idle"
    }) 
})

export const { popupData , togglePopup  } = common.actions

export default common.reducer

export const selectDetails = state => state.common.data
