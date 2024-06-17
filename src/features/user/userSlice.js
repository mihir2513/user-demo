import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            email: "test@gmail.com",
            password: "Test@1234",
            firstName: "John",
            lastName: "Doe",
            profileImage: "path/to/image.jpg",
            age: 30,
            gender: "Male",
            hobbies: ["Reading", "Swimming"],
            country: "USA",
            state: "California",
            city: "Los Angeles",
        },
        {
            id: 2,
            email: "jane@example.com",
            password: "Jane@5678",
            firstName: "Jane",
            lastName: "Smith",
            profileImage: "path/to/jane_image.jpg",
            age: 28,
            gender: "Female",
            hobbies: ["Hiking", "Photography"],
            country: "Canada",
            state: "Ontario",
            city: "Toronto",
        },
        {
            id: 3,
            email: "alice@example.com",
            password: "Alice@1234",
            firstName: "Alice",
            lastName: "Johnson",
            profileImage: "path/to/alice_image.jpg",
            age: 32,
            gender: "Female",
            hobbies: ["Cooking", "Traveling"],
            country: "UK",
            state: "England",
            city: "London",
        },
        {
            id: 4,
            email: "bob@example.com",
            password: "Bob@5678",
            firstName: "Bob",
            lastName: "Brown",
            profileImage: "path/to/bob_image.jpg",
            age: 25,
            gender: "Male",
            hobbies: ["Gaming", "Cycling"],
            country: "Australia",
            state: "New South Wales",
            city: "Sydney",
        },
        {
            id: 5,
            email: "carol@example.com",
            password: "Carol@9012",
            firstName: "Carol",
            lastName: "Davis",
            profileImage: "path/to/carol_image.jpg",
            age: 29,
            gender: "Female",
            hobbies: ["Yoga", "Painting"],
            country: "India",
            state: "Maharashtra",
            city: "Mumbai",
        },
        {
            id: 6,
            email: "david@example.com",
            password: "David@3456",
            firstName: "David",
            lastName: "Lee",
            profileImage: "path/to/david_image.jpg",
            age: 27,
            gender: "Male",
            hobbies: ["Reading", "Chess"],
            country: "USA",  // Same country as user id 1
            state: "New York",
            city: "New York City",
        },
        {
            id: 7,
            email: "emily@example.com",
            password: "Emily@7890",
            firstName: "Emily",
            lastName: "Brown",
            profileImage: "path/to/emily_image.jpg",
            age: 31,
            gender: "Female",
            hobbies: ["Writing", "Dancing"],
            country: "USA",  // Same country as user id 1 and 6
            state: "California",
            city: "San Francisco",
        },
    ],
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            // Generate a new id for the new user
            const newId = state.users.length > 0 ? state.users[state.users.length - 1].id + 1 : 1;
            state.users.push({ ...action.payload, id: newId });
        },
        updateUser: (state, action) => {
            const index = state.users.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export const selectUserById = (state, userId) => state.user.users.find((user) => user.id === userId);

export const selectUserByEmail = (state, email) => state.user.users.find((user) => user.email === email);

export const selectAllUsers = (state) => state.user.users;

export default userSlice.reducer;
