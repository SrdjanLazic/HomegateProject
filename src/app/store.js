import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../features/favourites/favouritesSlice'

export default configureStore({
    reducer: {
        favourites: favouritesReducer
    },
})