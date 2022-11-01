import { createSlice } from '@reduxjs/toolkit'

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        value: [],
    },
    reducers: {
        addToFavourites: (state, action) => {
            state.value.push(action.payload)
        },
        removeFromFavourites: (state, action) => {
            alert("HERE")
        },


    },
})

// Action creators are generated for each case reducer function
export const { addToFavourites, removeFromFavourites, incrementByAmount } = favouritesSlice.actions

export default favouritesSlice.reducer