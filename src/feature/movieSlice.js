import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import requests, { TOKEN } from "../utils/request"

// const init = {
//     data : null , 
//     status : "idle" , // "idle" | "loading" 
//     error : null
// }

const init = {
    discoverMovies : {
        data : null , 
        status : "idle" , // "idle" | "loading" 
        error : null
    } , 
    popularMovies : {
        data : null , 
        status : "idle" , // "idle" | "loading" 
        error : null
    } , 
    topRatedMovies : {
        data : null , 
        status : "idle" , // "idle" | "loading" 
        error : null
    }
}


export const fetchMovies = createAsyncThunk(
    'movie/discoverMovies', 
    async () => {
        const response = await axios.get(requests.discoverMovies  , { headers : { Authorization : TOKEN } })
        return response.data
    }
)

export const fetchTopRated = createAsyncThunk(
    'movie/topRated' ,
    async () => {
        const response = await axios.get(requests.topRatedMovies  , { headers : { Authorization : TOKEN } })
        return response.data
    }
)



const movieSlice = createSlice({
    name : "movie" ,
    initialState : init ,
    reducers : {} , 
    extraReducers : (builder) => builder
        .addCase(fetchMovies.pending , (state)=>{
            state.discoverMovies.status = "loading"
        })
        .addCase( fetchMovies.rejected , (state , action) => {
            state.discoverMovies.error = action.error.message
            state.discoverMovies.status = "idle"
        } )
        .addCase(fetchMovies.fulfilled , (state , action)=>{
            state.discoverMovies.data = action.payload
            state.discoverMovies.status = "idle"
        })
        .addCase(fetchTopRated.pending , (state) => {
            state.topRatedMovies.status = "loading"
        } )
        .addCase( fetchTopRated.rejected , (state , action) => {
            state.topRatedMovies.error = action.error.message
            state.topRatedMovies.status = "idle"
        } )
        .addCase(fetchTopRated.fulfilled , (state , action)=>{
            state.topRatedMovies.data = action.payload
            state.topRatedMovies.status = "idle"
        })


})

export default movieSlice.reducer

export const selectDiscoverMovie = (state) => state.discoverMovies
export const selectTopRated = (state) => state.topRatedMovies