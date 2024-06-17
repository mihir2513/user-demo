import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserByEmail } from "../features/user/userSlice";

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue, getState }) => {
        try {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const state = getState();
                    const user = selectUserByEmail(state, email);

                    if (!user) {
                        reject(new Error("User not found"));
                    }

                    if (user.password !== password) {
                        reject(new Error("Invalid password"));
                    }
                    resolve({ ...user, token: "dummy-token" });
                }, 3000); // Simulating a delay of 1 second
            });
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
