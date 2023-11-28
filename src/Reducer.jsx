import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isAuth: false
}
const rootReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuth = true
        },
        logout: (state) => {
            state.isAuth = false
        }

    }

})

export const { login, logout } = rootReducer.actions

export default rootReducer.reducer