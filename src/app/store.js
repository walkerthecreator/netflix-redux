import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "../feature/movieSlice.js"
import tvReducer from "../feature/tvSlice.js"

const store = configureStore({
    reducer : {
        movie : movieReducer ,
        tv : tvReducer
    }
})

export default store