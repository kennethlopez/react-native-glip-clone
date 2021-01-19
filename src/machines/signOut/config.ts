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
            id: 'signOutLoading',
            initial: 'checkConnectivity',
            states: {
                checkConnectivity: {
                    invoke: {
                        src: 'checkConnectivity',
                        onDone: {
                            target: 'serverSignOut',
                            actions: 'setNetInfoState'
                        },
                        onError: {
                            target: ['#signOutFetcher.idle', '#signOutError.noInternet'],
                        },
                    }
                },
                serverSignOut: {
                    invoke: {
                        src: 'serVerSignOut',
                        onDone: 'localSignOut',
                        onError: {
                            target: ['#signOutFetcher.idle', '#signOutError.fail'],
                        }
                    }
                },
                localSignOut: {
                    invoke: {
                        src: 'localSignOut',
                        onDone: '#signOutSuccess',
                        onError: {
                            target: ['#signOutFetcher.idle', '#signOutError.fail'],
                        }
                    }
                },
            }
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
