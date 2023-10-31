import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "../feature/movieSlice.js"

const store = configureStore({
    reducer : movieReducer
})

export default store