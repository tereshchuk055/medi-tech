import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IsUserAuthenticated } from "../../utils/authProvider";
import { DeleteCookie, SetCookie } from "../../utils/cookieManager";


interface AuthSlice {
    isAuth: boolean
}

const initialState: AuthSlice = {
    isAuth: IsUserAuthenticated()
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state: AuthSlice, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
            SetCookie('user', action.payload.toString());
        },
        logOut: (state: AuthSlice) => {
            state.isAuth = false;
            DeleteCookie('user');
        }
    }
});

export const { setAuth } = authSlice.actions

export const auth = authSlice.reducer
