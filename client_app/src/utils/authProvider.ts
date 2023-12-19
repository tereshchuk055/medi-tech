import { ReadCookie } from "./cookieManager";

export const IsUserAuthenticated = (): boolean => {
    const userAuth = JSON.parse(ReadCookie('user') ?? "false");
    // if (userToken && userToken !== "") {
    //     const timeStamp: number = parseInt((jwt_decode(userToken) as TokenStructure).exp)
    //     const expires = new Date(timeStamp * 1000);

    //     return expires > new Date();
    // }
    return userAuth;
}

