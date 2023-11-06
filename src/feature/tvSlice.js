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

export const fetchDiscoverTv = createAsyncThunk(
    "tv/fetchDiscoverTv" , 
    async() => {
        const response = await axios.get(requests.discover("tv")  , { headers : { Authorization : TOKEN } })
        return response.data
    }
)

// export const fetchDetails = createAsyncThunk(
//     "tv/fetchTvDetails" , 
//     async(id) => {
//         const response = await axios.get(requests.tvDetails(id)  , { headers : { Authorization : TOKEN } })
//         return response.data
//     }
// )

export const fetchTopRatedTv = createAsyncThunk('tv/fetchToprated' , 
async ()=>{
    const response = await axios.get(requests.topRated("tv")  , { headers : { Authorization : TOKEN } })
    return response.data
})


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
    } ,
    tvDetails : {
        data: null , 
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
    .addCase(fetchTopRatedTv.pending , (state) => {
        state.topRatedTv.status = "loading"
    } )
    .addCase( fetchTopRatedTv.rejected , (state , action) => {
        state.topRatedTv.error = action.error.message
        state.topRatedTv.status = "idle"
    } )
    .addCase(fetchTopRatedTv.fulfilled , (state , action)=>{
        state.topRatedTv.data = action.payload
        state.topRatedTv.status = "idle"
    })
    .addCase(fetchDiscoverTv.pending , (state) => {
        state.discoverTv.status = "loading"
    } )
    .addCase( fetchDiscoverTv.rejected , (state , action) => {
        state.discoverTv.error = action.error.message
        state.discoverTv.status = "idle"
    } )
    .addCase(fetchDiscoverTv.fulfilled , (state , action)=>{
        state.discoverTv.data = action.payload
        state.discoverTv.status = "idle"
    })
    // .addCase(fetchTvDetails.pending , (state) => {
    //     state.tvDetails.status = "loading"
    // } )
    // .addCase( fetchTvDetails.rejected , (state , action) => {
    //     state.tvDetails.error = action.error.message
    //     state.tvDetails.status = "idle"
    // } )
    // .addCase(fetchTvDetails.fulfilled , (state , action)=>{
    //     state.tvDetails.data = action.payload
    //     state.tvDetails.status = "idle"
    // })

})

export default tvSlice.reducer

export const selectNetflixOriginals = state => state.tv.netflixOriginals
export const selectTopRatedTv = state => state.tv.topRatedTv
export const selectDiscoverTv = state => state.tv.discoverTv
// export const selectTvDetails = state => state.tv.tvDetails
