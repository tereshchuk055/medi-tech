import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IsUserAuthenticated } from "../../utils/authProvider";
import { DeleteCookie, SetCookie } from "../../utils/cookieManager";
import { User } from "../interfaces/entities";


interface AuthSlice {
    isAuth: boolean,
    user: User | null
}

const userData: User = {
    id: 11,
    permission: 0,
    email: "vasyauser@gmail.com",
    firstName: "Vasya",
    lastName: "User",
    age: 19,
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Ffree-photos-vectors%2F%25D1%2587%25D0%25B5%25D0%25BB%25D0%25BE%25D0%25B2%25D0%25B5%25D0%25BA&psig=AOvVaw1oAIuDt0hCagYjxNZkaZHc&ust=1703279044485000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjDg4W3oYMDFQAAAAAdAAAAABAE",
    phoneNumber: "+1234567890"
}


const initialState: AuthSlice = {
    isAuth: IsUserAuthenticated(),
    user: IsUserAuthenticated() ? userData : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state: AuthSlice, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
            SetCookie('user', action.payload.toString());
            state.user = userData

        },
        logOut: (state: AuthSlice) => {
            state.isAuth = false;
            state.user = null
            DeleteCookie('user');
        }
    }
});

export const { setAuth } = authSlice.actions

export const auth = authSlice.reducer
