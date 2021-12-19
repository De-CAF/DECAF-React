/*import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,
    isLoggedIn: false
}

const defaultAuthSlice = createSlice({
    name: 'defaultUser',
    initialState,
    reducers: {
        setdefaultActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
            state.isLoggedIn= action.payload.isLoggedIn
        },
        setdefaultUserLogOutState: (state, action) => {
            state.userEmail = null
            state.userName = null
            state.isLoggedIn = false
        }
    }
});

export const { setdefaultActiveUser, setdefaultUserLogOutState} = defaultAuthSlice.actions

export const selectdefaultUserName = state => state.defaultUser.userName
export const selectdefaultUserEmail = state => state.defaultUser.userEmail
export const selectdefaultIsLoggedIn = state => state.defaultUser.isLoggedIn

export default defaultAuthSlice.reducer*/