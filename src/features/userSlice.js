import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         setActiveUser : (state,action)=>{
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
            state.isLoggedIn = action.payload.isLoggedIn
        },
         setUserLogOutState : (state,action)=>{
            state.userEmail=null
            state.userName=null
            state.isLoggedIn= false
        }
    }
});

export const { setActiveUser, setUserLogOutState} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectIsLoggedIn = state => state.user.isLoggedIn

export default userSlice.reducer