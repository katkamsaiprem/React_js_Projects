import { createSlice } from "@reduxjs/toolkit";

const initialState={
    games:[]
}

const gamesSlice=createSlice({
    name: "games",
    initialState,
    reducers: {
        setGames: (state,action) =>{
            state.games = action.payload;
        }
    }


})

export const {setGames} = gamesSlice.actions;// actions obj contains all reducer functions
//setGames is an action creator func that redux automatically creates for you

export default gamesSlice.reducer;