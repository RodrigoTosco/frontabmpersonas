import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoged: false,
        userName: '',
    },
    reducers: {
        setUserName: (state, action) => {state.userName = action.payload},
        setIsLoged: (state) => {state.isLoged = !state.isLoged}
    }
});

export const { setIsLoged, setUserName } = loginSlice.actions;

export const selectIsLoged = (state) => state.login.isLoged;

export default loginSlice.reducer;