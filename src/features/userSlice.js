import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,
    isLoggedIn: false,
    profilePicLink: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         setActiveUser : (state,action)=>{
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
            state.isLoggedIn = action.payload.isLoggedIn
            state.profilePicLink = action.payload.profilePicLink
        },
         setUserLogOutState : (state,action)=>{
            state.userEmail=null
            state.userName=null
            state.isLoggedIn= false
            state.profilePicLink = null
        },
        setProfilePicLink : (state,action)=>{
            state.profilePicLink = action.payload.profilePicLink
        }
    }
});

export const { setActiveUser, setUserLogOutState, setProfilePicLink} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectIsLoggedIn = state => state.user.isLoggedIn
export const selectProfilePicLink = state => state.user.profilePicLink

export default userSlice.reducer