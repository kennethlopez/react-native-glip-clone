import React from "react";
import {UserProfile} from "../api/types";
import {DrawerParams} from "../screens/Drawer/types";

export type UserProfileContextProp = {
    userProfile?: UserProfile | {};
    setUserProfile?: React.Dispatch<React.SetStateAction<UserProfile>>
};

export type RootStackParamList = {
    Drawer: DrawerParams
}
