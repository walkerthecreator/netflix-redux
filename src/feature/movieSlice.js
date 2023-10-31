import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import requests, { TOKEN } from "../utils/request"

const init = {
    data : null , 
    status : "idle" , // "idle" | "loading" 
    error : null
}


export const fetchMovies = createAsyncThunk(
    'movie/data', 
    async () => {
        const response = await axios.get(requests.discoverMovies  , { headers : { Authorization : TOKEN } })
        return response.data
    }
)



const movieSlice = createSlice({
    name : "movie" ,
    initialState : init ,
    reducers : {} , 
    extraReducers : (builder) => builder
        .addCase(fetchMovies.pending , (state)=>{
            state.status = "loading"
        })
        .addCase( fetchMovies.rejected , (state , action) => {
            state.error = action.error.message
            state.status = "idle"
        } )
        .addCase(fetchMovies.fulfilled , (state , action)=>{
            state.data = action.payload
            state.status = "idle"
        })

})

export default movieSlice.reducer

export const selectDiscoverMovie = (state) => state 