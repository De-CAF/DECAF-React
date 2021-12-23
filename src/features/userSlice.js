import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,
    isLoggedIn: false,
    profilePicLink: null,
    gender: null,
    birthDate: null,
    location: null,
    phone: null,
    profileCompletion: null,
    userBio: null
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
            state.gender = null
            state.birthDate = null
            state.location = null
            state.phone = null
            state.profileCompletion = null
            state.userBio = null
        },
        setProfilePicLink : (state,action)=>{
            state.profilePicLink = action.payload.profilePicLink
        },
        setAdditionalInformation : (state, action)=>{
                state.gender = action.payload.gender
                state.birthDate = action.payload.birthDate
                state.location = action.payload.location
                state.phone = action.payload.phone
                state.profileCompletion = action.payload.profileCompletion
                state.userBio = action.payload.userBio
        }
    }
});

export const { setActiveUser, setUserLogOutState, setProfilePicLink, setAdditionalInformation} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectIsLoggedIn = state => state.user.isLoggedIn
export const selectProfilePicLink = state => state.user.profilePicLink
export const selectProfileCompletion = state => state.user.profileCompletion
export const selectUserBio = state => state.user.userBio
export const selectGender = state => state.user.gender
export const selectBirthDate = state => state.user.birthDate
export const selectLocation = state => state.user.location
export const selectPhone = state => state.user.phone

export default userSlice.reducer