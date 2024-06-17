import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/authService";

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const getIsAuthenticated = (state) => state?.auth?.isAuthenticated;
export const getLoading = (state) => state?.auth?.loading;
export const getLoginError = (state) => state?.auth?.error;
export const getUser = (state) => state?.auth?.user;
export const selectAllUsersExceptCurrent = (state) => {
    const currentUser = getUser(state);
    return state?.user?.users.filter(user => user.id !== currentUser.id).map(user => ({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImage: user.profileImage,
        age: user.age,
        gender: user.gender,
        hobbies: user.hobbies,
        country: user.country,
        state: user.state,
        city: user.city,
    }));
};
export const { setIsAuthenticated, logout } = authSlice.actions;
export default authSlice.reducer;
