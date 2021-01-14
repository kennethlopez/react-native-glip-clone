import React, {useContext, useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {Appbar} from "react-native-paper";
import {AppStyle} from "../../styles";
import {useMachine} from "@xstate/react";
import signInMachine from "../../machines/signIn";
import SignInEmail from "../../components/SignInEmail";
import SignInPassword from "../../components/SignInPassword";
import {SubmitEventData} from "../../machines/signIn/types";
import LocalStorage from "../../utils";
import fakeApi from "../../api";
import {UserProfileContext} from "../../index";

const SignInScreen: React.FC = () => {
    const navigation = useNavigation();
    const [signInState, send] = useMachine(signInMachine);
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');

    const submitEmail = () => {
        const data: SubmitEventData = {
            emailOrPhone: text,
        }

        send({
            type: 'SUBMIT',
            data: data
        });
    }

    const submitPassword = () => {
        const data: SubmitEventData = {
            password: password
        }

        send({
            type: 'SUBMIT',
            data: data
        });
    }

    const sendAuthEmailEvent = () => {
        send('AUTH_EMAIL');
        setPassword('');
    }

    const authEmailLoading = signInState.matches({
        authEmail: {
            fetch: 'loading'
        }
    });

    const authPasswordLoading = signInState.matches({
        authPassword: {
            fetch: 'loading'
        }
    });

    const passWordEmpty = signInState.matches({
        authPassword: {
            error: 'empty'
        }
    });

    const signInSuccess = signInState.matches('success');

    console.log("state: ", signInState.value);
    console.log("context: ", signInState.context);

    const {setUserProfile} = useContext(UserProfileContext);
    useEffect(() => {
        if (signInSuccess) {
            const user = signInState.context.user;

            if (user != null) {
                LocalStorage.setUser(user).then(() => {
                    fakeApi.getUserProfile(user)
                        .then((profile) => {
                            // saves the user profile into context, this will allow other screens to access the user profile
                            if (setUserProfile) {
                                setUserProfile(profile);
                            }

                            navigation.reset({
                                index: 0,
                                routes: [{name: 'Drawer'}]
                            });
                        })
                        .catch(e => {
                            console.log('error fetching user profile: ', e);
                        });
                }).catch((e: any) => {
                    console.log('error on storing user: ', e);
                })
            }
        }
    }, [signInSuccess]);

    const content = signInState.matches('authEmail') ?
        (
            <SignInEmail
                value={text}
                onEmailChange={setText}
                errorMessage={signInState.context.errorMessage}
                onSubmit={submitEmail}
                isLoading={authEmailLoading}
            />
        ) :
        (
            <SignInPassword
                email={signInState.context.emailOrPhone}
                value={password}
                onPasswordChange={setPassword}
                isLoading={authPasswordLoading}
                errorMessage={!passWordEmpty ? signInState.context.errorMessage : ''}
                passwordFieldErrorMessage={passWordEmpty ? signInState.context.errorMessage : ''}
                onBackPress={sendAuthEmailEvent}
                onNextPress={submitPassword}
            />
        );

    return (
        <>
            <Appbar style={AppStyle.appBar}>
                <Appbar.Action icon='close' onPress={() => navigation.goBack()} />
                <Appbar.Content title='Sign in' />
            </Appbar>
            {content}
        </>
    );
}

export default SignInScreen;
