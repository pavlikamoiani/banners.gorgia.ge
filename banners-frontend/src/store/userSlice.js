import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;