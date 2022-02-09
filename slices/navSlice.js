import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (tate, action) => {
            state.orign = action.payload
        },
        setDestination: (tate, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (tate, action) => {
            state.travelTimeInformation = action.payload
        },
        
    }
});

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer