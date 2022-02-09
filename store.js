import { configureStore } from '@reduxjs/toolkit'
import navReducer from "./slices/navSlice"

// import rootReducer from './reducers'

const store = configureStore({ 
    reducer: {
        nav : navReducer,
    } 
})

export default store
// The store now has redux-thunk added and the Redux DevTools Extension is turned on