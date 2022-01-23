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
    userBio: null,
    role: false,
    metaAddress: null,
    accountBalance: null,
    currentNet: null,
    contractDoc: null,
    contractVerification: null,
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
            state.role = action.payload.role
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
            state.role=null
            state.metaAddress = null
            state.accountBalance = null
            state.currentNet = null
            state.contractDoc = null
            state.contractVerification = null
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
        },
        setMetaAddress : (state, action)=>{
            state.metaAddress = action.payload.metaAddress
        },
        setAccountBalance :(state,action)=>{
            state.accountBalance = action.payload.accountBalance
        },
        setCurrentNet: (state, action) =>{
            state.currentNet = action.payload.currentNet
        },
        setContracts: (state, action) =>{
            state.contractDoc = action.payload.contractDoc
            state.contractVerification = action.payload.contractVerification
        },
    }
});

export const { setActiveUser, setUserLogOutState, setProfilePicLink, setAdditionalInformation, setMetaAddress, setAccountBalance,setCurrentNet, setContracts} = userSlice.actions

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
export const selectRole = state=> state.user.role
export const selectMetaAddress = state => state.user.metaAddress
export const selectAccountBalance = state => state.user.accountBalance
export const selectCurrentNet = state => state.user.currentNet
export const selectContractDoc = state => state.user.contractDoc
export const selectContractVerification = state => state.user.contractVerification
export default userSlice.reducer