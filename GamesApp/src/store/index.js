import { configureStore } from "@reduxjs/toolkit";
import gameReducer from '../slice/gamesSlice.js'
export const store=configureStore({
    reducer: {
        games: gameReducer
    }
})  