import { configureStore } from '@reduxjs/toolkit'
import PhotoReducer from 'features/Photo/photoSlice'
const rootReducer = {
photos: PhotoReducer
}
const store = configureStore({
    reducer: rootReducer 
})
export default store