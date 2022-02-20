import {createSlice} from "@reduxjs/toolkit"

const userInitialState = {
    userKey: "",
    username: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        setUser: (state, action) => ({userKey: action.payload.userKey, username: action.payload.username})
    }
})

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
