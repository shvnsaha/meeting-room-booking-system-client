import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store";



export type TUser = {
    email: string;
    role: string;
    iat: number;
    exp: number;
}

export type TUserData = {
    _id: string,
    name: string,
    email: string,
    phone: string,
    role: string,
    address: string,
}


type TAuthState = {
    user: null | TUser,
    token: null | string,
     userData: null| TUserData
}

const initialState: TAuthState = {
    user: null,
    token: null,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token ,userData} = action.payload;
            state.user = user;
            state.token = token;
            state.userData = userData
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.userData = null;
        }
    }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer
export const useCurrentUser = (state: RootState) => state.auth.user
export const useCurrentToken = (state: RootState) => state.auth.token
export const useCurrentUserData = (state: RootState) => state.auth.userData

