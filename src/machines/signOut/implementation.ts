import {assign, MachineOptions} from "xstate";
import {SignOutContext, SignOutEvent} from "./types";
import {ErrorMessage, SignOutResponse} from "../../api/types";
import fakeApi from "../../api";
import {Utils} from "../../utils";
import {NetInfoState} from "@react-native-community/netinfo";

const makeErrorMessage = (title: string, message: string): ErrorMessage => {
    return {
        title,
        message
    };
}

const implementation: MachineOptions<SignOutContext, any> = {
    actions: {
        initErrorMessage: assign({
            errorMessage: (_) => null
        }),
        setErrorMessageNoInternet: assign({
            errorMessage: (_) => makeErrorMessage(
                'No internet connection',
                'Please check your network connection and try again'
            )
        }),
        setErrorMessageSignOutFail: assign({
            errorMessage: (_) => makeErrorMessage(
                'Could not sign out',
                "We're having trouble signing you out. Check your network connection and try again."
            )
        }),
        setNetInfoState: assign({
           netInfoState: (_, event: SignOutEvent<NetInfoState>) => event.data
        }),
    },
    services: {
        signOut: (_) => fakeApi.failSignOut(),
        checkConnectivity: (_) => Utils.checkConnectivity(),
    },
    guards: {
        signOutFail: (_, event: SignOutEvent<SignOutResponse>) => !event.data.status.success
    },
    activities: {},
    delays: {}
}

export default implementation;
