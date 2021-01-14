import React from "react";
import {UserProfile} from "../api/types";
import {DrawerParams} from "../screens/Drawer/types";

export type UserProfileContextProp = {
    userProfile?: React.MutableRefObject<UserProfile | null>;
    setUserProfile: (profile: UserProfile) => void;
}

export type RootStackParamList = {
    Drawer: DrawerParams
}
