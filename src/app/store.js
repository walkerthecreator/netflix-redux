import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "../feature/movieSlice.js"
import tvReducer from "../feature/tvSlice.js"
import commonSlice from "../feature/commonSlice.js"

const store = configureStore({
    reducer : {
        movie : movieReducer ,
        tv : tvReducer , 
        common : commonSlice
    }
})

export default store