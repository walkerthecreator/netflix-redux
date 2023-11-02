import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import requests, { TOKEN } from "../utils/request";



export const fetchNetflixOriginals = createAsyncThunk(
    "tv/fetchNetflixOriginals" , 
    async() => {
        const response = await axios.get(requests.netflixOriginals  , { headers : { Authorization : TOKEN } })
        return response.data
    }
)


const initial = {
    netflixOriginals : {
        data : null ,
        status : "idle" ,
        error : null
    } ,
    discoverTv  : {
        data : null ,
        status : "idle" ,
        error : null
    } ,
    topRatedTv : {
        data : null ,
        status : "idle" ,
        error : null
    }
}


const tvSlice = createSlice({
    name : 'tv' ,
    initialState : initial ,
    reducers : {} , 
    extraReducers : (builder) => builder
    .addCase(fetchNetflixOriginals.pending , (state)=>{
        state.netflixOriginals.status = "loading"
    })
    .addCase( fetchNetflixOriginals.rejected , (state , action) => {
        state.netflixOriginals.error = action.error.message
        state.netflixOriginals.status = "idle"
    } )
    .addCase(fetchNetflixOriginals.fulfilled , (state , action)=>{
        state.netflixOriginals.data = action.payload
        state.netflixOriginals.status = "idle"
    })
})

export default tvSlice.reducer

export const selectNetflixOriginals = state => state.tv.netflixOriginals