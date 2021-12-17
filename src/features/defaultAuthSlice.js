import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,
    password: null
}

const defaultAuthSlice = createSlice({
    name: 'deafultUser',
    initialState,
    reducers: {
        setdefaultActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
            state.password = action.payload.password
        },
        setdefaultUserLogOutState: (state, action) => {
            state.userEmail = null
            state.userName = null
            state.password = null
        }
    }
});

export const { setdefaultActiveUser, setdefaultUserLogOutState} = defaultAuthSlice.actions

export const selectdefaultUserName = state => state.user.userName
export const selectdefaultUserEmail = state => state.user.userEmail
export const selectdefaultPassword = state => state.user.password

export default defaultAuthSlice.reducer