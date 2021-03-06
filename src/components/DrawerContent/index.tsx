import React, {useContext, useEffect, useState} from "react";
import {StatusBar, View} from "react-native";
import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {Avatar, Caption, Text, Title} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import {Colors} from "../../styles";
import {UserProfileContext} from "../../index";
import {DrawerActions, useNavigation } from "@react-navigation/native";
import BasicDialog from "../BasicDialog";
import signOutMachine from "../../machines/signOut";
import {useMachine} from "@xstate/react";
import LoadingDialog from "../LoadingDialog";

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    const {userProfile, setUserProfile} = useContext(UserProfileContext);
    const profile = userProfile?.current;

    const navigation = useNavigation();
    const [signOutDialogVisible, setSignOutDialogVisible] = useState(false);
    const hideSignOutDialog = () => setSignOutDialogVisible(false);
    const showSignOutDialog = () => {
        navigation.dispatch(DrawerActions.closeDrawer);
        setSignOutDialogVisible(true);

        // lets the error dialog display again after being closed
        setErrorDialogVisible(true);
    }

    const [signOutState, signOutSend] = useMachine(signOutMachine);
    const errorTitle = signOutState.context.errorMessage ? signOutState.context.errorMessage.title : '';
    const errorMessage = signOutState.context.errorMessage ? signOutState.context.errorMessage.message : '';
    const signOutLoading = signOutState.matches({
        signedIn: {
            fetcher: 'loading'
        }
    });
    const hasError = signOutState.matches({
        signedIn: {
            error: 'noInternet'
        }
    }) || signOutState.matches({
        signedIn: {
            error: 'fail'
        }
    })
    const sendSignOutEvent = () => {
        signOutSend('SIGN_OUT');
    }

    const [errorDialogVisible, setErrorDialogVisible] = useState(true);
    const hideErrorDialog = () => setErrorDialogVisible(false);

    const signOutSuccess = signOutState.matches('success');
    useEffect(() => {
        if (signOutSuccess) {
            setUserProfile(null);

            navigation.reset({
                index: 0,
                routes: [{name: 'Home'}]
            });
        }
    }, [signOutSuccess]);

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.userDetailsContainer}>
                            <Avatar.Image
                                source={{
                                    uri: profile?.avatarUrl
                                }}
                                size={60}
                            />
                            <View style={styles.userDetailsTitleContainer}>
                                <Title style={styles.title}>{profile?.name}</Title>
                                <Caption style={styles.caption}>@{profile?.emailOrPhone}</Caption>

                                <View style={styles.statusContainer}>
                                    <Caption style={styles.caption}>{profile?.presence.label}</Caption>
                                    <Ionicons
                                        name='ios-pencil-sharp'
                                        style={styles.statusIcon}
                                    />
                                </View>
                            </View>
                        </View>

                        <DrawerItem
                            style={styles.drawerItem}
                            icon={({color, size}) => (
                                <Ionicons
                                    name='ios-happy'
                                    color={color}
                                    size={size}
                                    style={styles.drawerIcon}
                                />
                            )}
                            label=""
                            onPress={() => {}}
                        />
                    </View>

                    <View style={styles.divider}/>

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <Ionicons
                                name='ios-checkbox'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Tasks"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <MaterialIcons
                                name='event'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Team events"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        label={() => (
                            <View style={styles.cutomizeTabsContainer}>
                                <Text style={styles.customizeTabsLabel}>Customize tabs</Text>
                                <View style={styles.customizeTabsIconContainer}>
                                    <Ionicons
                                        name='ios-chevron-forward'
                                        color={Colors.GRAY_DARKER}
                                        size={18}
                                        style={styles.customizeTabsIcon}
                                    />
                                </View>
                            </View>
                        )}
                        onPress={() => {}}
                    />

                    <View style={styles.divider}/>

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <Ionicons
                                name='ios-settings-sharp'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Settings"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <MaterialIcons
                                name='new-releases'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="What's new"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <Ionicons
                                name='ios-help-circle'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Help and feedback"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <MaterialIcons
                                name='exit-to-app'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Sign out"
                        labelStyle={styles.drawerLabel}
                        onPress={showSignOutDialog}
                    />

                    {
                        (signOutDialogVisible || signOutLoading || (hasError && errorDialogVisible)) &&
                        <StatusBar backgroundColor={Colors.BLACK_TRANSPARENT} barStyle='light-content'/>
                    }
                    <BasicDialog
                        visible={signOutDialogVisible}
                        title='Sign out'
                        message='Are you sure you want to sign out?'
                        onDismiss={hideSignOutDialog}
                        negativeButtonText='CANCEL'
                        positiveButtonText='SIGN OUT'
                        onNegativeButtonPress={hideSignOutDialog}
                        onPositiveButtonPress={() => {
                            sendSignOutEvent();
                            hideSignOutDialog();
                        }}
                    />

                    {signOutLoading && <LoadingDialog visible={signOutLoading} />}

                    {
                        !signOutDialogVisible &&
                        !signOutLoading &&
                        hasError &&
                        <BasicDialog
                            visible={errorDialogVisible}
                            title={errorTitle}
                            message={errorMessage}
                            positiveButtonText='OK'
                            onDismiss={hideErrorDialog}
                            onPositiveButtonPress={hideErrorDialog}
                        />
                    }

                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;
