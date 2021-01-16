export type AuthResponse = {
    status: {
        success: boolean,
        code: number,
        message?: string
    },
    needCaptcha: boolean,
    expressLinkAvailable: boolean,
    brandId?: string,
}

export type User = {
    emailOrPhone: string;
    userId: string;
}

export type UserPresence = {
    label: string;
    type: 'available' | 'do_not_disturb' | 'invisible' | 'offline';
}

export type UserProfile = {
    userId: string;
    name: string;
    emailOrPhone: string;
    avatarUrl: string;
    presence: UserPresence;
}

export type ErrorMessage = {
    title: string;
    message: string;
}

export type SignOutResponse = {
    status: {
        success: boolean;
    }
}
