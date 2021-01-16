import {AuthResponse, SignOutResponse, User, UserPresence, UserProfile} from "./types";

// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
export const authEmail = (emailOrPhone: string): Promise<AuthResponse> => {
    return new Promise<AuthResponse>(resolve => {
        setTimeout(() => {
            const response: AuthResponse = {
                status: {
                    success: true,
                    code: 0
                },
                needCaptcha: false,
                expressLinkAvailable: false,
                brandId: '1210'
            };

            resolve(response);
        }, 1000);
    });
}


// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
export const failAuthEmail = (email: string): Promise<AuthResponse> => {
    return new Promise<AuthResponse>((_, reject) => {
        setTimeout(() => {
            const response: AuthResponse = {
                status: {
                    success: false,
                    code: 304,
                    message: 'Login username is not found'
                },
                needCaptcha: false,
                expressLinkAvailable: false,
            };

            reject(response);
        }, 1000);
    });
}

// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
export const signIn = (email: string, password: string): Promise<AuthResponse> => {
    return new Promise<AuthResponse>(resolve => {
        setTimeout(() => {
            const response: AuthResponse = {
                status: {
                    success: true,
                    code: 0
                },
                needCaptcha: false,
                expressLinkAvailable: false,
                brandId: '1210'
            };

            resolve(response);
        }, 1000);
    });
}

// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
export const failSignIn = (email: string, password: string): Promise<AuthResponse> => {
    return new Promise<AuthResponse>((_, reject) => {
        setTimeout(() => {
            const response: AuthResponse = {
                status: {
                    success: false,
                    code: 304,
                    message: 'Username and password do not match'
                },
                needCaptcha: false,
                expressLinkAvailable: false,
            };

            reject(response);
        }, 1000);
    });
}

export const getUserProfile = (user: User): Promise<UserProfile> => {
    return new Promise<UserProfile>(resolve => {
       setTimeout(() => {
           const presence: UserPresence = {
               label: "Available",
               type: "available"
           };
           const userProfile: UserProfile = {
               ...user,
               avatarUrl: "https://avatars0.githubusercontent.com/u/11627301?s=400&u=7172b05e75d2525e4b1045eedf9010abcd806060&v=4",
               name: "Sam Paul",
               presence: presence,
           };

           resolve(userProfile);
       }, 1000);
    });
}

// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
export const signOut = (): Promise<SignOutResponse> => {
    return new Promise<SignOutResponse>(resolve => {
       setTimeout(() => {
           const response: SignOutResponse = {
               status: {
                   success: true
               }
           }

           resolve(response);
       }, 1000);
    });
}

// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
export const failSignOut = (): Promise<SignOutResponse> => {
    return new Promise<SignOutResponse>((_, reject) => {
       setTimeout(() => {
           const response: SignOutResponse = {
               status: {
                   success: false
               }
           }

           reject(response);
       }, 1000);
    });
}
