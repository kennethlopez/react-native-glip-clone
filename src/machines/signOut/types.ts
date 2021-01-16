import {ErrorMessage} from "../../api/types";
import {NetInfoState} from "@react-native-community/netinfo";

export type SignOutFetcherStates = {
    id: string,
    initial: 'idle' | 'loading',
    states: {
        idle: {},
        loading: {}
    }
}

export type SignOutErrorStates = {
    id: string,
    initial: 'none' | 'noInternet' | 'fail',
    states: {
        none: {},
        noInternet: {},
        fail: {}
    }
}

type SignedInStates = {
    states: {
        fetcher: SignOutFetcherStates,
        error: SignOutErrorStates
    }
}

export type SignOutStateSchema = {
    states: {
        signedIn: SignedInStates,
        success: {}
    }
}

export type SignOutEvent<T = {}> = {
    type: 'SIGN_OUT';
    data: T;
}

export type SignOutContext = {
    errorMessage: ErrorMessage | null;
    netInfoState: NetInfoState | null;
}
