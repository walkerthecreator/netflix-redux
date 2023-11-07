import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests, { TOKEN } from "../utils/request";
import axios from "axios";

const init = {
    popup: {
        data : null ,
        isOpen : false , 
        status : "idle"
    } ,
    videos : {
        data : null ,
        show : false ,
        status : 'idle'
    }
}

export const fetchDetails = createAsyncThunk(
    "tv/fetchTvDetails" , 
    async(data) => {
        const { type , id } = data
        const response = await axios.get(requests.getDetails(type , id)  , { headers : { Authorization : TOKEN } })
        return response.data
    }
)

export const fetchVideos = createAsyncThunk(
    "tv/fetchVideos" , 
    async(data) => {
        const { type , id } = data
        const response = await axios.get(requests.getVideos(type , id)  , { headers : { Authorization : TOKEN } })
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
        state.popup.status = "loading"
    } )
    .addCase( fetchDetails.rejected , (state ) => {
        state.popup.status = "idle"
    } )
    .addCase(fetchDetails.fulfilled , (state , action)=>{
        state.popup.data = action.payload
        state.popup.status = "idle"
    }) 
    .addCase(fetchVideos.pending , (state) => {
        state.videos.status = "loading"
    } )
    .addCase( fetchVideos.rejected , (state ) => {
        state.videos.status = "idle"
    } )
    .addCase(fetchVideos.fulfilled , (state , action)=>{
        state.videos.data = action.payload
        state.videos.status = "idle"
    }) 
})

export const { popupData , togglePopup  } = common.actions

export default common.reducer

export const selectDetails = state => state.common.popup.data
export const selectVideos = state => state.common.videos