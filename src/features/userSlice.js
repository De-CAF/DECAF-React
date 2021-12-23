import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,
    isLoggedIn: false,
    profilePicLink: null,
    // lastName: null,
    gender: null,
    birthDate: null,
    location: null,
    phone: null,
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
            state.lastName = null
            state.gender = null
            state.birthDate = null
            state.location = null
            state.phone = null
        },
        setProfilePicLink : (state,action)=>{
            state.profilePicLink = action.payload.profilePicLink
        },
        setAdditionalInformation : (state, action)=>{
                state.gender = action.payload.gender
                state.birthDate = action.payload.birthDate
                state.location = action.payload.location
                state.phone = action.payload.phone
        }
    }
});

export const { setActiveUser, setUserLogOutState, setProfilePicLink, setAdditionalInformation} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectIsLoggedIn = state => state.user.isLoggedIn
export const selectProfilePicLink = state => state.user.profilePicLink
// export const selectLastName = state => state.user.lastName
export const selectGender = state => state.user.gender
export const selectBirthDate = state => state.user.birthDate
export const selectLocation = state => state.user.location
export const selectPhone = state => state.user.phone

export default userSlice.reducer