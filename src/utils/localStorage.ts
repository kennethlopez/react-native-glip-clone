import {User} from "../api/types";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storagePrefix = '@glipclone#';
const keys = {
    user: storagePrefix.concat('user')
}

export const setUser = (user: User | null): Promise<void> => {
    return AsyncStorage.setItem(keys.user, JSON.stringify(user));
}

export const getUser = (): Promise<User | null> => {
    return  new Promise<User | null>(async (resolve) => {
        const json = await AsyncStorage.getItem(keys.user);
        const user: User | null = json ? JSON.parse(json) : null;

        resolve(user);
    });
}
