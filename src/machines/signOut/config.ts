import {SignOutErrorStates, SignOutEvent, SignOutFetcherStates, SignOutStateSchema, SignOutContext} from "./types";
import {MachineConfig} from "xstate";

const SignOutFetcherConfig: SignOutFetcherStates = {
    id: 'signOutFetcher',
    initial: 'idle',
    states: {
        idle: {
            on: {
                SIGN_OUT: 'loading'
            }
        },
        loading: {
            invoke: [
                {
                    id: 'checkConnectivityService',
                    src: 'checkConnectivity',
                    onDone: {
                        actions: 'setNetInfoState'
                    },
                    onError: {
                        target: ['idle', '#signOutError.noInternet'],
                    },
                },
                {
                    id: 'signOutService',
                    src: 'signOut',
                    onDone: '#signOutSuccess',
                    onError: {
                        target: ['idle', '#signOutError.fail'],
                        cond: 'signOutFail'
                    }
                }
            ]
        }
    }
}

const SignOutErrorConfig: SignOutErrorStates = {
    id: 'signOutError',
    initial: 'none',
    states: {
        none: {
            entry: 'initErrorMessage'
        },
        noInternet: {
            entry: 'setErrorMessageNoInternet'
        },
        fail: {
            entry: 'setErrorMessageSignOutFail'
        }
    }
}

const config: MachineConfig<SignOutContext, SignOutStateSchema, SignOutEvent> = {
    id: 'signOut',
    initial: 'signedIn',
    context: {
        errorMessage: null,
        netInfoState: null
    },
    states: {
        signedIn: {
            id: 'signedIn',
            type: 'parallel',
            states: {
                fetcher: SignOutFetcherConfig,
                error: SignOutErrorConfig
            }
        },
        success: {
            id: 'signOutSuccess',
            type: 'final'
        }
    }
}

export default config;
